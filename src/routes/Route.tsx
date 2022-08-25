import { Button, View } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RouteProps = {
  navigation: NativeStackNavigationProp<any>;
}

const Route = ({ navigation }: RouteProps) => {
  return (
    <View>
      <Button title='Note' onPress={() => navigation.navigate('Note')} />
      <Button title='BMI' onPress={() => navigation.navigate('BMI')} />
      <Button title='StopWatch' onPress={() => navigation.navigate('StopWatch')} />
    </View>
  )
}

export default Route;
