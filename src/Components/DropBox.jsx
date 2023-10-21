import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';


const DropBox = ({ data }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <View>
            <TouchableOpacity activeOpacity={0.5}
                style={styles.button}
                onPress={() => {
                    setToggle(!toggle);
                }}
            >
                <Text style={styles.descriptions}>Mô tả</Text>
                <AntDesign name={toggle ? "down" : "right"} size={24} color="black" />
            </TouchableOpacity>
            {toggle ? <Text>{data}</Text> : null}
        </View>
    )
}

export default DropBox

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#E3E3E3',
        borderBottomWidth: 2,
        marginBottom: 10,
        paddingVertical: 15
    },
    descriptions: {
        fontSize: 16,
        fontWeight: '600'
    }
})