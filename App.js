import { StyleSheet, Text, View } from 'react-native';
import AppRoutes from './src/routes/AppRoutes';
import { useState } from 'react';
import AuthRoutes from './src/routes/AuthRoutes';


export default function App() {

  // USE CONTEXT
  const[logged, setLogged] = useState(true);

  return (
    <View style={styles.container}>
      {logged === true ? <AuthRoutes /> : <AppRoutes />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
