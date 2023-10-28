import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { TextInput, Button, FAB } from 'react-native-paper';

function Home({ navigation }) {
    const [text, setText] = React.useState("");
    return (
        <View style={{ flex: 1, alignItems: 'start', justifyContent: 'center', paddingHorizontal: 20 }}>
            <Text>This is home page</Text>
            <FAB
                icon="plus"
                style={styles.fab}
                onPress={() => console.log('Pressed')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 30,
        right: 0,
        bottom: 0,
    }
});

export default Home