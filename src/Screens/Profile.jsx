import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { firebase } from '../../FirebaseConfig';

const Profile = () => {
    const [picture, setPicture] = useState("https://img.freepik.com/free-icon/user_318-804790.jpg")

    const [name, setName] = useState('');
    useEffect(() => {
        firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get()
            .then((user) => {
                if (user.exists) { // ton tai
                    setName(user.data())
                    //console.log(user.data())
                }
                else {
                    console.log('User does not exist')
                }
            })
    }, [])

    const requestCameraPermission = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync(); //yêu cầu quyền truy cập vào thư viện hình ảnh
        if (status === 'granted') { // trạng thái là 'granted', tức là người dùng đã cấp quyền truy cập
            // const result = await ImagePicker.launchCameraAsync
            const result = await ImagePicker.launchImageLibraryAsync({ // mở thư viện hình ảnh và chọn một hình ảnh
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true, // đặt true, người dùng sẽ có the chỉnh sửa hình ảnh trước khi chọn
                aspect: [4, 3], //  tỷ lệ khung hình là 4:3
                quality: 1,
            });
            setPicture(result?.assets[0]?.uri);
        }
        else {
            console.log('Camera permission denied');
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: "center", gap: 10 }}>
                <Image style={styles.image} source={{ uri: picture }} />
                <Text style={{ fontSize: 18, fontWeight: '800' }}>
                    {name.username}
                </Text>
            </View>

            <TouchableOpacity style={styles.button}
                onPress={() => requestCameraPermission()}
            >
                <Text style={styles.textButton}>
                    Đổi ảnh đại diện
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    firebase.auth().signOut()
                }}
                style={styles.button}>
                <Text style={styles.textButton}>
                    Đăng xuất
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        gap: 20
    },
    image: {
        resizeMode: 'contain',
        height: 50,
        width: 50,
        borderRadius: 25
    },
    button: {
        borderBottomWidth: 1,
        borderBottomColor: '#E3E3E3',
        width: 120
    },
    textButton: {
        fontSize: 16,
        fontWeight: '600'
    }
})