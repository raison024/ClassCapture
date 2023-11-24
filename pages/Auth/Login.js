// import * as React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// import { TextInput, Button } from 'react-native-paper';

// function Login({ navigation }) {
//     const [text, setText] = React.useState("");
//     return (
//         <View style={{ flex: 1, alignItems: 'start', justifyContent: 'center', paddingHorizontal: 20 }}>
//             <Text>This is login page</Text>
//             <Button onPress={() => navigation.navigate('Registration')}>
//                 Go to Reg
//             </Button>

//             <TextInput
//                 label="Email"
//                 value={text}
//                 style={styles.input}
//                 nChangeText={text => setText(text)}
//             />
//             <TextInput
//                 label="Password"
//                 value={text}
//                 style={styles.input}
//                 nChangeText={text => setText(text)}
//             />
//             <Button icon="send" mode="contained" onPress={() => navigation.navigate('Home')}>
//                 Submit
//             </Button>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     input: {
//         width: '100%',
//         marginVertical: 10
//     }
// });

// export default Login

import React, { useState } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function Login({ navigation, auth }) {
  const [email, setEmail] = useState('raison024@gmail.com');
  const [password, setPassword] = useState('raison12345');

  const handleLogin = () => {
    // const app = initializeApp(firebaseConfig);
    // const auth = getAuth(app);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Alert.alert('Success', 'Login successful!');
        navigation.navigate('Home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Error', errorMessage);
      });
  };

  const handleReg = () => {
    navigation.navigate('Registration')
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        style={{ width: '100%', marginBottom: 10, borderBottomWidth: 1 }}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
        style={{ width: '100%', marginBottom: 20, borderBottomWidth: 1 }}
      />
      <Button
        onPress={handleLogin}
        mode='contained'
        style={{ width: '100%', marginBottom: 20, borderBottomWidth: 1 }}>
        Sign In
      </Button>

      <Text variant="bodyMedium"
        style={{ marginBottom: 20 }}>
        New User?
      </Text>

      <Button
        onPress={handleReg}
        mode='contained'
        style={{ width: '100%', marginBottom: 20, borderBottomWidth: 1 }}>
        Sign Up
      </Button>


    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    marginVertical: 10
  }
});

export default Login