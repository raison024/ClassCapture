import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { supabase } from '../../supabase';
import { TextInput, Button, FAB, BottomNavigation } from 'react-native-paper';

export default function Subjects() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }