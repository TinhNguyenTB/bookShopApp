import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductTitle = ({ title }) => {
    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: '700' }}>{title}</Text>
        </View>
    )
}

export default ProductTitle

const styles = StyleSheet.create({

})