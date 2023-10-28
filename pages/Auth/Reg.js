import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { TextInput, Chip, Provider, Button } from 'react-native-paper';
import DropDown from "react-native-paper-dropdown";

function Reg({ navigation }) {
    const [showDropDown, setShowDropDown] = useState(false);
    const [gender, setGender] = useState("");
    const genderList = [
        {
            label: "Computer Science",
            value: "comp",
        },
        {
            label: "Commerce",
            value: "comm",
        },
    ];
    return (
        <Provider>
            <View style={{ flex: 1, alignItems: 'start', justifyContent: 'center', paddingHorizontal: 20 }}>
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

                <SafeAreaView style={styles.safeContainerStyle}>
                    <DropDown
                        label="Select Department"
                        visible={showDropDown}
                        showDropDown={() => setShowDropDown(true)}
                        onDismiss={() => setShowDropDown(false)}
                        value={gender}
                        style={styles.input}
                        setValue={setGender}
                        list={genderList}
                    />
                </SafeAreaView>

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

                <Button icon="send" mode="contained" onPress={() => console.log('Pressed')}>
                    Submit
                </Button>
            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        marginVertical: 10
    },
    safeContainerStyle: {
        margin: 10,
        justifyContent: "center",
    },
});

export default Reg