import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const HomeSearch = () => {
    return (
        <View style={styles.view}>
            <AntDesign name="search1" size={24} color="black" />
            <TextInput style={styles.input} placeholder='Tìm kiếm' />
        </View>
    )
}

export default HomeSearch

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        backgroundColor: '#F2F3F2',
        gap: 8,
        height: responsiveHeight(6),
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 10
    },
    input: {
        flex: 1
    }
})