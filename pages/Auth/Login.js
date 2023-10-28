import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { TextInput, Button } from 'react-native-paper';

function Login({ navigation }) {
    const [text, setText] = React.useState("");
    return (
        <View style={{ flex: 1, alignItems: 'start', justifyContent: 'center', paddingHorizontal: 20 }}>
            <Text>This is login page</Text>
            <Button onPress={() => navigation.navigate('Registration')}>
                Go to Reg
            </Button>
            
            <TextInput
                label="Email"
                value={text}
                style={styles.input}
                nChangeText={text => setText(text)}
            />
            <TextInput
                label="Password"
                value={text}
                style={styles.input}
                nChangeText={text => setText(text)}
            />
            <Button icon="send" mode="contained" onPress={() => navigation.navigate('Home')}>
                Submit
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        marginVertical: 10
    }
});

export default Login