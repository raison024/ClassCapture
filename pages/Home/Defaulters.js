import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { FAB } from 'react-native-paper';
import { supabase } from '../../supabase';

export default function Defaulters({ navigation, handleNewEntry }) {
    const [students, setStudents] = useState([]);
    const [totalStudents, setTotalStudents] = useState(0);
    const [defaulters, setDefaulters] = useState([]);

    useEffect(() => {
        fetchStudents(); // Fetch students on initial load

        // Set up interval to fetch students every 1 minute
        const intervalId = setInterval(() => {
            fetchStudents();
        }, 60000); // 60000 milliseconds = 1 minute

        // Clear the interval on component unmount to avoid memory leaks
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run the effect only once on mount

    async function fetchStudents() {
        try {
            const { data, error } = await supabase
                .from('students')
                .select('stud_name, stud_rollno, curr_att, total_att, curr_java, total_java, curr_c, total_c, curr_python, total_python')
                .order('stud_rollno');

            if (error) {
                throw error;
            }

            setStudents(data || []);
            setTotalStudents(data ? data.length : 0);

            // Filter students with less than 75% attendance
            const defaulterStudents = data.filter(
                (student) => calculateAttendancePercentage(student.curr_att, student.total_att) < 40
            );

            setDefaulters(defaulterStudents);
        } catch (error) {
            console.error('Error fetching students:', error.message);
        }
    }

    return (
        <View style={styles.container}>

            <ScrollView style={styles.scrollView}>
                <Text style={styles.header}>Defaulters</Text>
                {defaulters.map((defaulter) => (
                    <View key={defaulter.id || Math.random()} style={styles.studentContainer}>
                        <Text>Name: {defaulter.stud_name}</Text>
                        <Text>Roll No: {defaulter.stud_rollno}</Text>
                        <Text>Attendance Percentage: {calculateAttendancePercentage(defaulter.curr_att, defaulter.total_att)}%</Text>
                    </View>
                ))}
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
        marginTop: 10,
        borderWidth: 0,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#ded0f5'
    },
    fab: {
        position: 'absolute',
        margin: 30,
        right: 0,
        bottom: 60,
    },
});

function calculateAttendancePercentage(currAtt, totalAtt) {
    if (totalAtt === 0) {
        return 0; // Prevent division by zero
    }
    return ((currAtt / totalAtt) * 100).toFixed(2);
}

