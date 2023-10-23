import { ScrollView, StyleSheet, Text, View, Image, StatusBar, TextInput, TouchableOpacity, Alert, InputAccessoryView } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../../FirebaseConfig';

const SignUp = () => {
    const [isVisbile, setIsVisbile] = useState(true);
    const nav = useNavigation();

    const [userInformation, setUserInformation] = useState({
        username: "",
        email: "",
        password: ""
    });
    const { username, email, password } = userInformation;

    const userAccount = async (username, email, password) => {
        try {
            // Đăng ký tài khoản
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            // Gửi email xác minh
            await firebase.auth().currentUser.sendEmailVerification({
                handleCodeInApp: true,
                url: 'http://bookshop-27440.firebaseapp.com'
            });
            // Thông báo khi email xác minh được gửi
            alert('Verification email sent');
            // Lưu thông tin người dùng vào Firestore
            await firebase.firestore().collection('users')
                .doc(firebase.auth().currentUser.uid)
                .set({
                    username,
                    email
                });
        }
        catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email này đã được sử dụng!');
            }
            else if (error.code === 'auth/invalid-email') {
                alert('Địa chỉ email không hợp lệ!');
            }
            else {
                console.error(error);
            }
        }
    }


    return (
        <SafeAreaView style={styles.bg}>
            <ScrollView style={styles.container}>
                <Image source={require('../assets/iconMainCycle.png')} style={styles.img} />
                <View style={styles.col}>
                    <Text style={styles.title}>
                        Đăng ký tài khoản
                    </Text>
                    <Text style={styles.lable}>Tên người dùng</Text>
                    <TextInput maxLength={30} style={styles.input} keyboardType='name-phone-pad'
                        value={username}
                        onChangeText={(value) => {
                            setUserInformation({ ...userInformation, username: value })
                        }}
                    />

                    <Text style={styles.lable}>Email</Text>
                    <TextInput style={styles.input} keyboardType='email-address'
                        value={email}
                        onChangeText={(value) => {
                            setUserInformation({ ...userInformation, email: value })
                        }}
                    />

                    <Text style={styles.lable}>Mật khẩu</Text>
                    <View style={styles.viewPassword}>
                        <TextInput style={{ flex: 0.9, marginTop: 10 }}
                            keyboardType='ascii-capable' maxLength={16}
                            secureTextEntry={isVisbile}
                            value={password}
                            onChangeText={(value) => {
                                setUserInformation({ ...userInformation, password: value })
                            }}
                        />
                        <Feather onPress={() => {
                            setIsVisbile(!isVisbile)
                        }} name={isVisbile ? "eye-off" : "eye"} size={24} color="black" />
                    </View>
                    <Text style={{ marginTop: 20, textAlign: 'center' }}>
                        Sau khi đăng ký sẽ tự động đăng nhập
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        userAccount(username, email, password);
                    }}>
                        <Text style={styles.textButton}>
                            Đăng ký
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.textBottom}>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Đã có tài khoản?</Text>
                        <TouchableOpacity onPress={() => {
                            nav.navigate('Login')
                        }}>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: 'green' }}>
                                Đăng nhập ngay
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <StatusBar style='auto' />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: 'white',
        flex: 1
    },
    container: {
        flex: 1,
        paddingVertical: 30
    },
    img: {
        height: 100,
        width: 100,
        alignSelf: 'center',
    },
    col: {
        paddingHorizontal: 20,
        paddingTop: 30
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 10
    },
    lable: {
        marginTop: 30,
        fontSize: 14,
        fontWeight: '500',
        color: 'grey'
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#E3E3E3',
        marginTop: 10
    },
    viewPassword: {
        borderBottomWidth: 1,
        borderColor: '#E3E3E3',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: 'green',
        borderRadius: 20,
        height: 50
    },
    textButton: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white'
    },
    textBottom: {
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    }
})

export default SignUp;