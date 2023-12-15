import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { FAB } from 'react-native-paper';
import { supabase } from '../../supabase';

export default function Students({ navigation, handleNewEntry }) {
  const [subjectTotals, setSubjectTotals] = useState({
    java: 0,
    python: 0,
    c: 0,
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  async function fetchStudents() {
    try {
      const { data, error } = await supabase
        .from('students')
        .select('total_java, total_c, total_python')
        .order('stud_rollno');

      if (error) {
        throw error;
      }

      const newSubjectTotals = {
        java: data.reduce((total, student) => total + student.total_java, 0),
        python: data.reduce((total, student) => total + student.total_python, 0),
        c: data.reduce((total, student) => total + student.total_c, 0),
      };

      setSubjectTotals(newSubjectTotals);
    } catch (error) {
      console.error('Error fetching students:', error.message);
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}></Text>
 
        <View style={styles.studentContainer}>
          <Text style={styles.subjectText}>JAVA</Text>
          <Text style={styles.totalText}>Total Classes Conducted: {subjectTotals.java}</Text>
        </View>

        <View style={styles.studentContainer}>
          <Text style={styles.subjectText}>PYTHON</Text>
          <Text>Total Classes Conducted: {subjectTotals.python}</Text>
        </View>

        <View style={styles.studentContainer}>
          <Text style={styles.subjectText}>C</Text>
          <Text>Total Classes Conducted: {subjectTotals.c}</Text>
        </View>

      </ScrollView>

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={handleNewEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'start'
  },
  scrollView: {
    height: '50%',
    width: '100%'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10
  },
  studentContainer: {
    width: '100%',
    marginTop: 20,
    borderWidth: 0,
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#ded0f5',
  },
  subjectText: {
    marginBottom: 10, 
    fontWeight: 'bold',
  },
  totalText: {
    marginBottom: 0
  },
  fab: {
    position: 'absolute',
    margin: 30,
    right: 0,
    bottom: 60,
  },
});




