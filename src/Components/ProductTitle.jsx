import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductTitle = ({ title }) => {
    return (
        <View style={styles.view}>
            <Text style={{ fontSize: 18, fontWeight: '700' }}>{title}</Text>
            <Text style={{ fontSize: 16, color: 'lightgreen', fontWeight: '500' }}>Xem tất cả</Text>
        </View>
    )
}

export default ProductTitle

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})