import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import DropBox from '../Components/DropBox';

const Details = ({ route }) => {
    const { name, price, img, descriptions } = route.params.info;
    const nav = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='white' />
            <View style={{ marginTop: 15 }}>
                <View style={styles.iconTop}>
                    <Ionicons onPress={() => {
                        nav.goBack()
                    }} name="chevron-back" size={30} color="black" />
                    <Feather name="share" size={30} color="black" />
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
                <DropBox data={descriptions} />
                <View>
                    {

                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        width: '100%'
    },
    wrap: {
        backgroundColor: 'white',
        flex: 1
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    name: {
        fontSize: 18,
        fontWeight: '500'
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    }

})