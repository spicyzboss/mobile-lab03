import Note from './src/screens/Note';
import BMI from './src/screens/BMI';
import StopWatch from './src/screens/StopWatch'
import Route from './src/routes/Route';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name="Main" component={Route} />
        <Stack.Screen name="Note" component={Note} />
        <Stack.Screen name="BMI" component={BMI} />
        <Stack.Screen name="StopWatch" component={StopWatch} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
