import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavourite } from '../Redux/FavouriteSlice';

const Favourite = () => {
    const favouriteData = useSelector((state) => state.FavouriteSlice);
    // console.log(favouriteData);
    const dispatch = useDispatch();
    const nav = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Sản phẩm yêu thích
            </Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={favouriteData}
                renderItem={({ item, index }) => (
                    <View style={styles.wrap}>
                        <TouchableOpacity
                            style={styles.boxLeft}
                            onPress={() => {
                                nav.navigate('Details', { info: item })
                            }}
                        >
                            <Image style={styles.image} source={{ uri: item.img }} />
                        </TouchableOpacity>
                        <View style={styles.boxRight}>
                            <View style={{ flex: 0.95, justifyContent: 'space-around' }}>
                                <Text style={styles.name}>
                                    {item.name}
                                </Text>
                                <Text style={styles.author}>
                                    Tác giả: {item.author}
                                </Text>
                                <Text style={styles.price}>
                                    Giá: {(item.price / 1000).toFixed(3)}đ
                                </Text>
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <AntDesign name="delete" size={30} color="red" onPress={() => {
                                    dispatch(removeFromFavourite(item));
                                }} />
                            </View>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

export default Favourite;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        flex: 1,
        gap: 15
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center'
    },
    wrap: {
        flexDirection: 'row',
        height: responsiveHeight(18),
        borderBottomWidth: 1,
        borderBottomColor: '#E3E3E3'
    },
    boxLeft: {
        flex: 0.35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 120,
        width: 120,
        resizeMode: 'contain'
    },
    boxRight: {
        flex: 0.65,
        flexDirection: 'row'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    name: {
        fontSize: 16,
        fontWeight: '600'
    },
    author: {
        fontSize: 13,
        fontWeight: '500'
    },
    price: {
        fontSize: 17,
        fontWeight: '800'
    }
})