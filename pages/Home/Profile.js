import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { supabase } from '../../supabase';
import { TextInput, Button, FAB, BottomNavigation, Text } from 'react-native-paper';
import ProfileImg from '../../assets/login.png'

export default function Profile( { navigation ,handleSignout } ) {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text variant='titleMedium'>Welcome Faculty Member!</Text>
        <Image 
        style={{width: '65%', height: '40%'}}
        source={ProfileImg}
        />
        <Button
        mode='contained'
        onPress={handleSignout}
        style={{ marginTop: 20 }}>
        Sign out
      </Button>
      </View>
    );
  }