import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { deCrementQuantity, inCrementQuantity, removeFromCart } from '../Redux/CartSlice';

const Cart = () => {
    const cartData = useSelector((state) => state.CartSlice);
    const dispatch = useDispatch();
    const nav = useNavigation();
    //console.log(cartData)

    let total = 0;
    cartData.forEach(element => {
        total += (element.price * element.quantity);
    });

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Giỏ hàng
            </Text>
            <View style={{ flex: 0.97 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={cartData}
                    renderItem={({ item, index }) => (
                        <View style={styles.wrap}>
                            <View style={styles.boxLeft}>
                                <Image style={styles.image} source={{ uri: item.img }} />
                            </View>
                            <View style={styles.boxRight}>
                                <Text style={{ fontSize: 17, fontWeight: '500' }}>
                                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                </Text>
                                <View style={styles.row}>
                                    <Text style={{ fontSize: 16, fontWeight: '500' }}>
                                        Giá: {(item.price / 1000).toFixed(3)}đ
                                    </Text>
                                    <AntDesign name="delete" size={30} color="red" onPress={() => {
                                        // Hiển thị hộp thoại cảnh báo khi người dùng nhấn nút Xóa
                                        Alert.alert(
                                            'Xác nhận',
                                            `Bạn có chắc muốn xóa '${item.name}' khỏi giỏ hàng?`,
                                            [
                                                {
                                                    text: 'Hủy',
                                                    onPress: () => console.log('Xóa bị hủy'),
                                                    style: 'cancel',
                                                },
                                                {
                                                    text: 'Xóa',
                                                    onPress: () => {
                                                        dispatch(removeFromCart(item));
                                                        console.log('Xóa đã được thực hiện');
                                                    },
                                                },
                                            ],
                                            { cancelable: false }
                                        );
                                    }} />
                                </View>

                                <View style={styles.row}>
                                    <View style={[styles.row, styles.gap10]}>
                                        <AntDesign name="minuscircle" size={30} color="green" onPress={() => {
                                            dispatch(deCrementQuantity(item))
                                        }} />
                                        <Text style={{ fontSize: 16 }}>
                                            {item.quantity}
                                        </Text>
                                        <AntDesign name="pluscircle" size={30} color="green" onPress={() => {
                                            dispatch(inCrementQuantity(item))
                                        }} />
                                    </View>
                                    <Text style={{ fontSize: 18, fontWeight: '600' }}>
                                        {(item.price * item.quantity / 1000).toFixed(3)}đ
                                    </Text>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
            {
                total === 0 ?
                    (
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: '500', textAlign: 'center', marginBottom: 20 }}>
                                Giỏ hàng của bạn đang trống
                            </Text>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    nav.navigate('Home');
                                }}>
                                <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>
                                    Mua ngay
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )
                    :
                    (
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={styles.button}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 30 }}>
                                <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }}>
                                    Thanh toán
                                </Text>
                                <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>
                                    {(total / 1000).toFixed(3)}đ
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
            }

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        flex: 1,
        gap: 15
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600'
    },
    wrap: {
        flexDirection: 'row',
        height: responsiveHeight(18), // 18% screen
        borderBottomColor: '#E3E3E3',
        borderBottomWidth: 1,
    },
    boxLeft: {
        flex: 0.35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 120,
        width: 120,
        resizeMode: 'contain'
    },
    boxRight: {
        flex: 0.65,
        paddingHorizontal: 10,
        justifyContent: 'space-around'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    gap10: {
        gap: 10
    },
    button: {
        backgroundColor: 'green',
        borderRadius: 10,
        height: responsiveHeight(8),
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Cart;