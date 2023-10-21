import { View, StyleSheet } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Favourite from './Favourite';
import Cart from './Cart';
import Profile from './Profile';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false
            }}
        >
            <Tab.Screen name='Home' component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            (
                                <View style={styles.icon}>
                                    <Ionicons name="home" size={24} color="#007FFF" />
                                </View>
                            )
                            :
                            (
                                <Ionicons name="home-outline" size={24} color="grey" />
                            )
                    )
                }}
            />
            <Tab.Screen name='Favourite' component={Favourite}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            (
                                <View style={styles.icon}>
                                    <AntDesign name="heart" size={24} color="#007FFF" />
                                </View>
                            )
                            :
                            (
                                <AntDesign name="hearto" size={24} color="grey" />
                            )
                    )
                }}
            />
            <Tab.Screen name='Cart' component={Cart}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            (
                                <View style={styles.icon}>
                                    <Ionicons name="cart" size={24} color="#007FFF" />
                                </View>
                            )
                            :
                            (
                                <Ionicons name="cart-outline" size={24} color="grey" />
                            )
                    )
                }}
            />
            <Tab.Screen name='Profile' component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            (
                                <View style={styles.icon}>
                                    <Ionicons name="person-circle" size={24} color="#007FFF" />
                                </View>
                            )
                            :
                            (
                                <Ionicons name="person-circle-outline" size={24} color="grey" />
                            )
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    icon: {
        height: 35,
        width: 35,
        borderBottomColor: '#007FFF',
        borderBottomWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: 30,
        // backgroundColor:'#007FFF'
    }
});

export default Tabs