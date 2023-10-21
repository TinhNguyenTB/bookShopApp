import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/Screens/Splash';
import Login from './src/Screens/Login';
import SignUp from './src/Screens/SignUp';
import Tabs from './src/Screens/Tabs';
import Home from './src/Screens/Home';
import Details from './src/Screens/Details';
import Cart from './src/Screens/Cart';
import { Provider } from 'react-redux';
import { Store } from './src/Redux/Store';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Splash'
          screenOptions={
            {
              headerShown: false
            }
          }
        >
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}