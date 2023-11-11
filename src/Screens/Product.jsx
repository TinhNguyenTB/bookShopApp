import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeSearch from '../Components/HomeSearch';
import { useNavigation } from '@react-navigation/native';


const famous = require('../Utils/famous.json');
const lightnovel = require('../Utils/lightnovel.json');
const romance = require('../Utils/romance.json');
const science = require('../Utils/science.json');

const Product = () => {

    const nav = useNavigation();
    const [selected, setSelected] = useState(0);
    const dataOptions = [famous, lightnovel, romance, science];

    return (
        <SafeAreaView style={styles.container}>
            <HomeSearch />
            <View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={dataOptions}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => {
                                setSelected(index)

                            }}
                            activeOpacity={0.5}
                            style={{
                                marginRight: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 5,
                                backgroundColor: selected === index ? 'green' : '#E3E3E3',
                                height: 50,
                                width: 90
                            }}
                        >
                            <Text style={{ color: selected === index ? 'white' : 'grey', fontWeight: '500' }}>
                                {dataOptions[index] === famous
                                    ? 'Phổ biến'
                                    : dataOptions[index] === lightnovel
                                        ? 'Tiểu thuyết'
                                        : dataOptions[index] === romance
                                            ? 'Lãng mạn'
                                            : 'Khoa học'}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <View style={{ height: '75%' }}>
                <FlatList
                    contentContainerStyle={{ minHeight: '100%' }}
                    showsVerticalScrollIndicator={false}
                    data={dataOptions[selected]}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    renderItem={({ item, index }) => (
                        <View style={{ flex: 1 }}>
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
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

export default Product

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10,
        gap: 20,
        paddingHorizontal: 20
    },
    row: {
        flex: 1,
    },
    box: {
        height: responsiveHeight(30),
        borderColor: '#E3E3E3',
        borderWidth: 2,
        width: responsiveWidth(40),
        borderRadius: 15,
    },
    image: {
        height: 125,
        width: 120,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    col: {
        paddingHorizontal: 10,
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
        flex: 0.4,
        justifyContent: 'flex-end',
        gap: 20,
        marginTop: 5
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})