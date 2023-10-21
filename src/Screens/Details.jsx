import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import DropBox from '../Components/DropBox';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/CartSlice';


const Details = ({ route }) => {
    const productData = route.params.info;
    const { name, price, img, author, language, descriptions } = productData;
    const nav = useNavigation();
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.CartSlice);

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor='white' />
                <View style={{ marginTop: 15 }}>
                    <View style={styles.iconTop}>
                        <Ionicons onPress={() => {
                            nav.goBack();
                        }} name="chevron-back" size={40} color="black" />
                    </View>
                    <Image style={styles.img} resizeMode='contain' source={{ uri: img }} />
                </View>
                <View style={styles.wrap}>
                    <View style={styles.row}>
                        <Text style={styles.name}>
                            {name.charAt(0).toUpperCase() + name.slice(1)}
                        </Text>
                        <MaterialIcons name="favorite-border" size={30} color="black" />
                    </View>
                    <Text style={styles.price}>
                        Giá: {(price / 1000).toFixed(3)}đ
                    </Text>
                    <Text>Tác giả: {author}</Text>
                    <Text>Ngôn ngữ: {language}</Text>

                    <DropBox data={descriptions} />
                    <View style={styles.viewButton}>
                        {
                            cartData.find((value) => value.name === productData.name) ?
                                (
                                    <TouchableOpacity style={styles.btnAddedToCart}
                                        disabled={true}
                                        activeOpacity={0.5}
                                    >
                                        <Text style={{ fontSize: 18, fontWeight: '700' }}>
                                            Đã thêm vào giỏ hàng
                                        </Text>
                                    </TouchableOpacity>
                                )
                                :
                                (
                                    <TouchableOpacity style={styles.btnAddToCart}
                                        activeOpacity={0.5}
                                        onPress={() => {
                                            dispatch(addToCart(productData));
                                            nav.navigate('Cart')
                                        }}
                                    >
                                        <Text style={{ fontSize: 18, fontWeight: '700', color: 'white' }}>
                                            Thêm vào giỏ hàng
                                        </Text>
                                    </TouchableOpacity>
                                )
                        }
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 15,
        backgroundColor: 'white',
        paddingHorizontal: 15,
    },
    img: {
        height: responsiveHeight(30),
        width: responsiveWidth(90),
        alignSelf: 'center',
        marginTop: 15
    },
    iconTop: {
        alignItems: 'flex-start',
        position: 'absolute',
    },
    wrap: {
        backgroundColor: 'white',
        flex: 1,
        gap: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    name: {
        fontSize: 18,
        fontWeight: '500'
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5
    },
    viewButton: {
        flex: 0.9,
        justifyContent: 'flex-end'
    },
    btnAddToCart: {
        backgroundColor: 'green',
        borderRadius: 10,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnAddedToCart: {
        backgroundColor: '#E3E3E3',
        borderRadius: 10,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    }

})