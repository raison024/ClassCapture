import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Auth/Login';
import Reg from './pages/Auth/Reg';
import Home from './pages/Home/Home';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from './pages/Auth/firebaseConfig'; // Adjust the path accordingly
import NewEntry from './pages/Home/NewEntry';

const Stack = createNativeStackNavigator();

// Initialize Firebase once
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login">
          {(props) => <Login {...props} auth={auth} />}
        </Stack.Screen>
        <Stack.Screen name="Registration">
          {(props) => <Reg {...props} auth={auth} />}
        </Stack.Screen>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerShown: false
          }}
        />
        <Stack.Screen
          name="NewEntry"
          component={NewEntry}
          options={{
            title: 'Take Attendance',
            headerBackVisible: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
