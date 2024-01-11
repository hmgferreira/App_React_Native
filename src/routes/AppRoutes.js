import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ProdutosScreen from '../screens/ProdutosScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();
// ROTAS PUBLICAS
export default function AppRoutes() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
