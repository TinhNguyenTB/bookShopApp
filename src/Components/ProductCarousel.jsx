import { StyleSheet, Text, FlatList, View, Image } from 'react-native'
import React from 'react';
import { books } from '../Utils/Data';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { FontAwesome } from '@expo/vector-icons';

const ProductCarousel = () => {
    return (
        <View>
            <FlatList horizontal
                showsHorizontalScrollIndicator={false}
                data={books}
                renderItem={({ item, index }) => (
                    <View style={styles.box}>
                        <Image style={styles.image} source={{ uri: item.img }} />
                        <View style={{ paddingHorizontal: 10, gap: 3, alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: '600' }}>
                                {item.name}
                            </Text>
                            <View style={styles.row}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                                    {(item.price / 1000).toFixed(3)}đ
                                </Text>
                                <FontAwesome name="plus-square" size={30} color="lightgreen" />
                            </View>
                        </View>
                    </View>
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
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        marginTop: 5
    }
})