import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import Splash from './src/Screens/Splash';
import Login from './src/Screens/Login';
import SignUp from './src/Screens/SignUp';
import Tabs from './src/Screens/Tabs';
import Home from './src/Screens/Home';
import Details from './src/Screens/Details';
import Cart from './src/Screens/Cart';
import Profile from './src/Screens/Profile';
import { Provider } from 'react-redux';
import { Store } from './src/Redux/Store';
import { firebase } from './FirebaseConfig';

const Stack = createNativeStackNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <Stack.Navigator
        screenOptions={
          {
            headerShown: false
          }
        }
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    )
  }

  return (
    <Stack.Navigator
      initialRouteName='Splash'
      screenOptions={
        {
          headerShown: false
        }
      }
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  )
}