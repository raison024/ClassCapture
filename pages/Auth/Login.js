import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { TextInput } from 'react-native-paper';

function Login({ navigation }) {
    const [text, setText] = React.useState("");
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>
            <Text>This is login page</Text>
            <Button
                title="Go to Reg"
                onPress={() => navigation.navigate('Registration')}
            />
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
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        margin: 10
    }
});

export default Login