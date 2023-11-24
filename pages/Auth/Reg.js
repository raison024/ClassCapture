// import React, { useState } from "react";
// import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
// import { TextInput, Chip, Provider, Button } from 'react-native-paper';
// import DropDown from "react-native-paper-dropdown";

// function Reg({ navigation }) {
//     const [showDropDown, setShowDropDown] = useState(false);
//     const [gender, setGender] = useState("");
//     const genderList = [
//         {
//             label: "Computer Science",
//             value: "comp",
//         },
//         {
//             label: "Commerce",
//             value: "comm",
//         },
//     ];
//     return (
//         <Provider>
//             <View style={{ flex: 1, alignItems: 'start', justifyContent: 'center', paddingHorizontal: 20 }}>
//                 <Text>This is reg page</Text>

//                 <TextInput
//                     label="Full Name"
//                     style={styles.input}
//                     nChangeText={text => setText(text)}
//                 />

//                 <TextInput
//                     label="Department Name"
//                     style={styles.input}
//                     nChangeText={text => setText(text)}
//                 />

//                 <SafeAreaView style={styles.safeContainerStyle}>
//                     <DropDown
//                         label="Select Department"
//                         visible={showDropDown}
//                         showDropDown={() => setShowDropDown(true)}
//                         onDismiss={() => setShowDropDown(false)}
//                         value={gender}
//                         style={styles.input}
//                         setValue={setGender}
//                         list={genderList}
//                     />
//                 </SafeAreaView>

//                 <TextInput
//                     label="Email"
//                     style={styles.input}
//                     nChangeText={text => setText(text)}
//                 />

//                 <TextInput
//                     label="Password"
//                     style={styles.input}
//                     nChangeText={text => setText(text)}
//                 />

//                 <Button icon="send" mode="contained" onPress={() => console.log('Pressed')}>
//                     Submit
//                 </Button>
//             </View>
//         </Provider>
//     )
// }

// const styles = StyleSheet.create({
//     input: {
//         width: '100%',
//         marginVertical: 10
//     },
//     safeContainerStyle: {
//         margin: 10,
//         justifyContent: "center",
//     },
// });

// export default Reg


// import React, { useState } from 'react';
// import { View, TextInput, Button, Alert } from 'react-native';
// import { initializeApp } from 'firebase/app';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import { firebaseConfig } from './firebaseConfig'; // Firebase yapılandırma dosyasını içe aktar
// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// const app = initializeApp(firebaseConfig);
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });



// function Reg({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = () => {
//     const app = initializeApp(firebaseConfig);
//     const auth = getAuth(app);

//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Kullanıcı başarıyla kaydedildi
//         const user = userCredential.user;
//         Alert.alert('Success', 'Account created successfully!');
//         navigation.navigate('Login');
//         // İstediğiniz yönlendirmeyi burada yapabilirsiniz
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         Alert.alert('Error', errorMessage);
//       });
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <TextInput
//         placeholder="Email"
//         onChangeText={(text) => setEmail(text)}
//         value={email}
//         style={{ width: '80%', marginBottom: 10, borderBottomWidth: 1 }}
//       />
//       <TextInput
//         placeholder="Password"
//         onChangeText={(text) => setPassword(text)}
//         value={password}
//         secureTextEntry
//         style={{ width: '80%', marginBottom: 20, borderBottomWidth: 1 }}
//       />
//       <Button title="Register" onPress={handleRegister} />
//     </View>
//   );
// };

// export default Reg


import React, { useState } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import { firebaseConfig } from './firebaseConfig'; // Firebase configuration file

// const auth = initializeAuth(firebaseConfig, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });

function Reg({ navigation, auth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Alert.alert('Success', 'Account created successfully!');
        navigation.navigate('Login');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Error', errorMessage);
      });
  };

  const handleLogin = () => {
    navigation.navigate('Login')
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
        onPress={handleRegister}
        mode='contained'
        style={{ width: '100%', marginBottom: 20, borderBottomWidth: 1 }}>
        Proceed
      </Button>

      <Text variant="bodyMedium"
        style={{ marginBottom: 20 }}>
        Already a user?
      </Text>

      <Button
        onPress={handleLogin}
        mode='contained'
        style={{ width: '100%', marginBottom: 20, borderBottomWidth: 1 }}>
        Sign In
      </Button>


    </View>
  );
}

export default Reg
