import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ProdutosScreen from '../screens/ProdutosScreen';

const Stack = createNativeStackNavigator();
// ROTAS PRIVADAS
export default function AuthRoutes() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeScreen} options={{ title: "App FullStack", headerShown: false }} />
          <Stack.Screen name='Produtos' component={ProdutosScreen}  />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
