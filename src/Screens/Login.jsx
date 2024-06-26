import { ScrollView, StyleSheet, Text, View, StatusBar, Alert, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { firebase } from '../../FirebaseConfig';

const Login = () => {
    const [isVisbile, setIsVisbile] = useState(true);
    const nav = useNavigation();
    const [loginInformation, setLoginInformation] = useState({
        email: "",
        password: ""
    });
    const { email, password } = loginInformation;

    const loginUser = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
        }
        catch (error) {
            alert(error.message);
        }
    }

    const forgotPassword = async (email) => {
        try {
            await firebase.auth().sendPasswordResetEmail(email);
            alert("pasword reset email sent");
        } catch (error) {
            alert(error)
        }
    }

    return (
        <SafeAreaView style={styles.bg}>
            <ScrollView style={styles.container}>
                <Image source={require('../assets/iconMainCycle.png')} style={styles.img} />
                <View style={styles.col}>
                    <Text style={styles.title}>
                        Đăng nhập
                    </Text>

                    <Text style={styles.lable}>Email</Text>
                    <TextInput style={styles.input} keyboardType='email-address'
                        value={email}
                        onChangeText={(value) => {
                            setLoginInformation({ ...loginInformation, email: value })
                        }}
                    />

                    <Text style={styles.lable}>Mật khẩu</Text>
                    <View style={styles.viewPassword}>
                        <TextInput style={{ flex: 0.9, marginTop: 10 }}
                            keyboardType='ascii-capable' maxLength={16}
                            secureTextEntry={isVisbile}
                            value={password}
                            onChangeText={(value) => {
                                setLoginInformation({ ...loginInformation, password: value })
                            }}
                        />
                        <Feather onPress={() => {
                            setIsVisbile(!isVisbile)
                        }} name={isVisbile ? "eye-off" : "eye"} size={24} color="black" />
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            loginUser(email, password)
                        }}>
                        <Text style={styles.textButton}>
                            Đăng nhập
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.textBottom}>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Chưa có tài khoản?</Text>
                        <TouchableOpacity onPress={() => {
                            nav.navigate('SignUp')
                        }}>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: 'green' }}>
                                Đăng ký
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={{ marginTop: 20 }}
                        onPress={() => {
                            forgotPassword(email)
                        }}>
                        <Text style={{ fontSize: 16, fontWeight: '600', textAlign: 'center' }}>
                            Quên mật khẩu?
                        </Text>
                    </TouchableOpacity>
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

export default Login;