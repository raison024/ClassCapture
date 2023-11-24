// import 'react-native-url-polyfill/auto'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://jseslgbwsmozafruduji.supabase.co'
// const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzZXNsZ2J3c21vemFmcnVkdWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA4Mjg5MTQsImV4cCI6MjAxNjQwNDkxNH0.Fnrd7XS3tP7B7npFQ3T9KnPzY7czEsbbnWD9yaPeYt8'

// export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
//   auth: {
//     storage: AsyncStorage,
//     autoRefreshToken: true,
//     persistSession: true,
//     detectSessionInUrl: false,
//   },
// })

import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jseslgbwsmozafruduji.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzZXNsZ2J3c21vemFmcnVkdWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA4Mjg5MTQsImV4cCI6MjAxNjQwNDkxNH0.Fnrd7XS3tP7B7npFQ3T9KnPzY7czEsbbnWD9yaPeYt8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

async function checkSupabaseConnection() {
  try {
    // Execute a simple query
    const { data, error } = await supabase.from('students').select('*');

    if (error) {
      console.error('Error connecting to Supabase:', error.message);
    } else {
      console.log('Connected to Supabase:', data);
    }

  } catch (error) {
    console.error('Unexpected error:', error.message);
  }

}

// Call the function to check Supabase connection
checkSupabaseConnection();
