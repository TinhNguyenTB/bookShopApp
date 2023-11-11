import { StyleSheet, Text, FlatList, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../Redux/CartSlice';
import { showMessage } from "react-native-flash-message";

const ProductCarousel = ({ data }) => {
    const nav = useNavigation();
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.CartSlice);

    return (
        <View>
            <FlatList horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={styles.box}
                        activeOpacity={0.7}
                        onPress={() => {
                            nav.navigate('Details', { info: item })
                        }}
                    >
                        <Image style={styles.image} source={{ uri: item.img }} />
                        <View style={styles.col}>
                            <Text style={styles.name}>
                                {item.name}
                            </Text>
                            <View style={styles.row}>
                                <Text style={styles.price}>
                                    Giá: {(item.price / 1000).toFixed(3)}đ
                                </Text>
                                {
                                    cartData.find((value) => value.name === item.name) ?
                                        (
                                            <AntDesign name="minuscircle" size={30} color="green" onPress={() => {
                                                dispatch(removeFromCart(item));
                                                showMessage({
                                                    message: "Thông báo",
                                                    description: `Đã xóa '${item.name}' khỏi giỏ hàng.`,
                                                    type: 'danger',
                                                    icon: () => <AntDesign name="delete" size={24} color="white" style={{ marginRight: 20 }} />
                                                });
                                            }} />
                                        )
                                        :
                                        (
                                            <AntDesign name="pluscircle" size={30} color="green" onPress={() => {
                                                dispatch(addToCart(item));
                                                showMessage({
                                                    message: "Thông báo",
                                                    description: `Đã thêm '${item.name}' vào giỏ hàng.`,
                                                    type: "success",
                                                    icon: () => <AntDesign name="checkcircle" size={24} color="white" style={{ marginRight: 20 }} />
                                                });
                                            }} />
                                        )
                                }

                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default ProductCarousel

const styles = StyleSheet.create({
    box: {
        height: responsiveHeight(30),
        borderColor: '#E3E3E3',
        borderWidth: 2,
        width: responsiveWidth(45),
        marginRight: 15,
        borderRadius: 15
    },
    image: {
        height: 125,
        width: 120,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    col: {
        paddingHorizontal: 10,
        gap: 3,
        alignItems: 'center',
        flex: 1
    },
    name: {
        fontSize: 14,
        fontWeight: '600',
        flex: 0.6,
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: "center",
        flex: 0.4,
        gap: 10,
        marginTop: 5
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})