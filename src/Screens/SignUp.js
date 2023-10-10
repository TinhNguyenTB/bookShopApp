import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
    const [isVisbile, setIsVisbile] = useState(true);
    const nav = useNavigation();

    return (
        <SafeAreaView style={styles.bg}>
            <ScrollView style={styles.container}>
                <Image source={require('../assets/iconMainCycle.png')} style={styles.img} />
                <View style={styles.col}>
                    <Text style={styles.title}>
                        Đăng ký tài khoản
                    </Text>

                    <Text style={styles.lable}>Tên người dùng</Text>
                    <TextInput style={styles.input} keyboardType='name-phone-pad' maxLength={30} />

                    <Text style={styles.lable}>Email</Text>
                    <TextInput style={styles.input} keyboardType='email-address' />

                    <Text style={styles.lable}>Mật khẩu</Text>
                    <View style={styles.viewPassword}>
                        <TextInput style={{ flex: 0.9, marginTop: 10 }}
                            keyboardType='ascii-capable' maxLength={16}
                            secureTextEntry={isVisbile}
                        />
                        <Feather onPress={() => {
                            setIsVisbile(!isVisbile)
                        }} name={isVisbile ? "eye-off" : "eye"} size={24} color="black" />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => {
                        console.log("Press");
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
                            <Text style={{ fontSize: 16, fontWeight: '600', color: 'lightgreen' }}>
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
        backgroundColor: 'lightgreen',
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