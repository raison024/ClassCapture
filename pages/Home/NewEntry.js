// import * as React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// import { TextInput, Button, FAB } from 'react-native-paper';

// function Home({ navigation }) {
//     const [text, setText] = React.useState("");
//     return (
//         <View style={{ flex: 1, alignItems: 'start', justifyContent: 'center', paddingHorizontal: 20 }}>
//             <Text>Attendance Dashboard</Text>
//             <FAB
//                 icon="plus"
//                 style={styles.fab}
//                 onPress={() => console.log('Pressed')}
//             />
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     fab: {
//         position: 'absolute',
//         margin: 30,
//         right: 0,
//         bottom: 0,
//     }
// });

// export default Home

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
// import { launchImageLibrary } from 'react-native-image-picker';
// import 'react-native-web'

// const Home = () => {
//   const [apiKey, setApiKey] = useState('eb24f49d-e127-436b-a08a-414542202897');
//   const [result, setResult] = useState('');

//   const recognizeFace = async () => {
//     const options = {
//       title: 'Select Photo',
//       storageOptions: {
//         skipBackup: true, // iOS only
//         path: 'images', // iOS only
//       },
//     };

//     const response = await launchImageLibrary(options);

//     if (response.didCancel) {
//       console.log('User cancelled image picker');
//     } else if (response.error) {
//       console.log('ImagePicker Error: ', response.error);
//     } else {
//       const formData = new FormData();
//       formData.append('file', {
//         uri: response.uri,
//         type: response.type,
//         name: response.fileName,
//       });

//       try {
//         const response = await fetch('http://64.227.178.8:8000/api/v1/recognition/recognize', {
//           method: 'POST',
//           headers: {
//             'x-api-key': apiKey,
//             Accept: 'application/json',
//             'Content-Type': 'multipart/form-data',
//           },
//           body: formData,
//         });

//         const data = await response.json();
//         setResult(JSON.stringify(data));
//       } catch (error) {
//         alert('Request failed: ' + JSON.stringify(error));
//       }
//     }
//   };

//   return (
//     <View>
//       <Text>API key:</Text>
//       <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//         onChangeText={(text) => setApiKey(text)}
//         value={apiKey}
//       />
//       <Button title="Recognize Photo" onPress={recognizeFace} />
//       <Text>Result:</Text>
//       <Text>{result}</Text>
//     </View>
//   );
// };

// export default Home;


import React, { Component } from 'react';
import { SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';

class NewEntry extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView 
        cacheEnabled={false}
          source={{ uri: 'http://2247208-bucket.s3-website-us-east-1.amazonaws.com/' }} 
          style={{ flex: 1, width: '100%' }}
          scalesPageToFit
        />
      </SafeAreaView>
    );
  }
}

export default NewEntry

// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, Alert, Image } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import Constants from 'expo-constants';

// const Home = () => {
//   const [apiKey, setApiKey] = useState("eb24f49d-e127-436b-a08a-414542202897");
//   const [subject, setSubject] = useState("Java");
//   const [result, setResult] = useState(null);

//   useEffect(() => {
//     (async () => {
//       if (Constants.platform.ios || Constants.platform.android) {
//         const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//         if (status !== 'granted') {
//           Alert.alert('Permission required', 'Please allow access to the media library to use this feature.');
//         }
//       }
//     })();
//   }, []);

//   const pickImage = async (callback) => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.All,
//         allowsEditing: true,
//         aspect: [4, 3],
//         quality: 1,
//       });

//       if (!result.cancelled) {
//         callback(result);
//       }
//     } catch (error) {
//       console.error('Error picking an image', error);
//     }
//   };

//   // const saveNewImageToFaceCollection = async () => {
//   //   pickImage(async (photo) => {
//   //     try {
//   //       let formData = new FormData();
//   //       formData.append("file", {
//   //         uri: photo.uri,
//   //         type: 'image/jpeg', // Adjust the type accordingly
//   //         name: 'photo.jpg', // Adjust the name accordingly
//   //       });

//   //       const response = await fetch('http://64.227.178.8:8000/api/v1/recognition/faces/?subject=' + encodeURIComponent(subject), {
//   //         method: "POST",
//   //         headers: {
//   //           "x-api-key": apiKey,
//   //           "Content-Type": "multipart/form-data",
//   //         },
//   //         body: formData,
//   //       });

//   //       const data = await response.json();
//   //       console.log('New example was saved', data);
//   //     } catch (error) {
//   //       Alert.alert('Request failed', JSON.stringify(error));
//   //     }
//   //   });
//   // };

//   const recognizeFace = async () => {
//     pickImage(async (photo) => {
//       try {
//         let formData = new FormData();
//         formData.append("file", {
//           uri: photo.uri,
//           type: 'image/jpeg',
//           name: 'photo.jpg',
//         });
  
//         const response = await fetch('http://64.227.178.8:8000/api/v1/recognition/faces/?subject=' + encodeURIComponent(subject), {
//           method: "POST",
//           headers: {
//             "x-api-key": apiKey,
//             "Content-Type": "multipart/form-data",
//           },
//           body: formData,
//         });
  
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
  
//         const data = await response.json();
//         console.log('New example was saved', data);
//       } catch (error) {
//         console.error('Request failed:', error);
//         Alert.alert('Request failed', JSON.stringify(error));
//       }
//     });
//   };
  

//   return (
//     <View>
//       <Text>API key:</Text>
//       <TextInput
//         value={apiKey}
//         onChangeText={setApiKey}
//       />

//       <Text>Subject:</Text>
//       <TextInput
//         value={subject}
//         onChangeText={setSubject}
//       />

//       {/* <Text>Click to add photo:</Text>
//       <Button
//         title="Choose File"
//         onPress={saveNewImageToFaceCollection}
//       /> */}

//       <Text>Click to recognize photo:</Text>
//       <Button
//         title="Choose File"
//         onPress={recognizeFace}
//       />

//       <Text>Result:</Text>
//       {result && <Image source={{ uri: result.uri }} style={{ width: 200, height: 200 }} />}
//       <Text>{JSON.stringify(result)}</Text>
//     </View>
//   );
// };

// export default Home



