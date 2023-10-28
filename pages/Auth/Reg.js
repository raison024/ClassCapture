import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { TextInput, Chip } from 'react-native-paper';

function Reg({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is reg page</Text>

            <TextInput
                label="Full Name"
                style={styles.input}
                nChangeText={text => setText(text)}
            />

            <TextInput
                label="Department Name"
                style={styles.input}
                nChangeText={text => setText(text)}
            />

            <Chip selected onPress={() => console.log('Pressed')}>Example Chip</Chip>


            <TextInput
                label="Email"
                style={styles.input}
                nChangeText={text => setText(text)}
            />

            <TextInput
                label="Password"
                style={styles.input}
                nChangeText={text => setText(text)}
            />

            <Button
                title="Go to Reg"
                onPress={() => navigation.navigate('Login')}
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

export default Reg