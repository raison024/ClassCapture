import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './pages/Auth/Login';
import Reg from './pages/Auth/Reg';
import Home from './pages/Home/Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Reg} />
        <Stack.Screen name="Home" component={Home} options={{
          title: "Home",
          headerBackVisible: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;