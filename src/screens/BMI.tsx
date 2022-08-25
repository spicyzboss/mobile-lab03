import { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

const BMI = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [bmi, setBmi] = useState<number>(0);
  const [result, setResult] = useState<string>('');

  const calculateBMI = () => {
    let bmi = weight / ((height/100)**2);
    setBmi(bmi);
    setResult(BMIReadable(bmi));
  }

  const BMIReadable = (v: number) => {
    if (v > 32) return 'Obese';
    else if (25 < v && v < 32) return 'Over Weight';
    else if (18.5 < v && v < 25) return 'Normal Weight';
    return 'Under Weight';
  }

  return (
    <View style={{
      flex: 1,
      margin: 10,
      alignItems: 'center'
    }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>BMI Calculator</Text>
      <View style={{ width: '100%', marginVertical: 10 }}>
        <Text style={{ fontSize: 18 }}>Height</Text>
        <TextInput style={{ borderWidth: 1, fontSize: 20, padding: 10 }} keyboardType="numeric" onChangeText={v => setHeight(parseInt(v))} />
      </View>
      <View style={{ width: '100%', marginVertical: 10 }}>
        <Text style={{ fontSize: 18 }}>Weight</Text>
        <TextInput style={{ borderWidth: 1, fontSize: 20, padding: 10 }} keyboardType="numeric" onChangeText={v => setWeight(parseInt(v))} />
      </View>
      <View style={{ backgroundColor: 'red', width: '100%' }}>
        <Button title='Calculate' color='white' onPress={calculateBMI} />
      </View>
      <Text style={{ fontSize: 24 }}>{ result ? bmi.toFixed(2) : '' }</Text>
      <Text style={{ fontSize: 24, color: 'blue' }}>{ result }</Text>
    </View>
  )
}

export default BMI;
