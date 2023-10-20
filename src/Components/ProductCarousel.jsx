import { StyleSheet, Text, FlatList, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProductCarousel = ({ data }) => {
    const nav = useNavigation();
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
                                    {(item.price / 1000).toFixed(3)}đ
                                </Text>
                                <MaterialIcons name="add-shopping-cart" size={28} color="#fc5a31" />
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
        flex: 0.5
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 0.5,
        justifyContent: 'flex-end',
        gap: 20,
        marginTop: 5
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})