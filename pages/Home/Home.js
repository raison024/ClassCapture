import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { supabase } from '../../supabase';
import { TextInput, Button, FAB } from 'react-native-paper';

export default function Home({ navigation }) {
  const [students, setStudents] = useState([]);
  const [totalStudents, setTotalStudents] = useState(0);

  useEffect(() => {
    fetchStudents();
  }, []);

  async function fetchStudents() {
    try {
      const { data, error, count } = await supabase
        .from('students')
        .select('stud_name, stud_rollno');

      if (error) {
        throw error;
      }

      setStudents(data || []);
      setTotalStudents(count || 0);
    } catch (error) {
      console.error('Error fetching students:', error.message);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student List</Text>
      <Text>Total Students: {totalStudents}</Text>

      {/* {students.map((student, index) => (
        <View key={index} style={styles.studentContainer}>
          <Text>Name: {student.stud_name}</Text>
          <Text>Roll No: {student.stud_rollno}</Text>
        </View>
      ))} */}

      {students.map((student) => (
        <View key={student.id || Math.random()} style={styles.studentContainer}>
          <Text>Name: {student.stud_name}</Text>
          <Text>Roll No: {student.stud_rollno}</Text>
        </View>
      ))}
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate('NewEntry')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  studentContainer: {
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  fab: {
    position: 'absolute',
    margin: 30,
    right: 0,
    bottom: 0,
  }
});



// import * as React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// import { TextInput, Button, FAB } from 'react-native-paper';

// function Home({ navigation }) {
//   const [text, setText] = React.useState("");
//   return (
//     <View style={{ flex: 1, alignItems: 'start', justifyContent: 'center', paddingHorizontal: 20 }}>
//       <Text>Attendance Dashboard</Text>

//     </View>
//   )
// }



// <FAB
//   icon="plus"
//   style={styles.fab}
//   onPress={() => console.log('Pressed')}
// />

// const styles = StyleSheet.create({
//   fab: {
//     position: 'absolute',
//     margin: 30,
//     right: 0,
//     bottom: 0,
//   }
// });

// export default Home
