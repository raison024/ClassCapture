import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { supabase } from '../../supabase';
import { TextInput, Button, FAB, BottomNavigation } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Students from './Students';
import Subjects from './Subjects';
import Profile from './Profile';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo Icons

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, left: 0, right: 0 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const iconSize = 24; // Adjust the icon size as needed

        const getIconName = (routeName) => {
          switch (routeName) {
            case 'Students':
              return 'ios-people'; // Replace with the actual Ionicons name for Students
            case 'Subjects':
              return 'ios-book'; // Replace with the actual Ionicons name for Subjects
            case 'Profile':
              return 'ios-person'; // Replace with the actual Ionicons name for Profile
            default:
              return 'ios-information-circle';
          }
        };

        const iconColor = isFocused ? '#673ab7' : '#222';

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center', padding: 16 }}
          >
            <Ionicons name={getIconName(route.name)} size={iconSize} color={iconColor} />
            <Text style={{ color: iconColor }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {
  const handleSignout = () => {
    Alert.alert('Success', 'Successfully Signed out');
    navigation.navigate('Login');
  }

  const handleNewEntry = () => {
    navigation.navigate('NewEntry');
  }

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen name="Students">
          {(props) => <Students {...props} handleNewEntry={handleNewEntry} />}
        </Tab.Screen>
        <Tab.Screen name="Subjects" component={Subjects} />
        <Tab.Screen name="Profile">
          {(props) => <Profile {...props} handleSignout={handleSignout} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
