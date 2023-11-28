import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { supabase } from '../../supabase';
import { TextInput, Button, FAB, BottomNavigation, Text } from 'react-native-paper';


export default function Subjects() {
  return (
    <View style={styles.container}>
      <Text variant='titleMedium'>All Subjects</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'start',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10
  },
  subjectContainer: {
    width: '100%',
    marginTop: 10,
    borderWidth: 0,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ded0f5'
  }
});