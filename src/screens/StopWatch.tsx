import { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const StopWatch = () => {
  const [time, setTime] = useState<number>(0);
  const [isCounting, setIsCounting] = useState<boolean>(false);

  let counter: NodeJS.Timer;

  useEffect(() => {
    if (isCounting) {
      counter = setTimeout(() => setTime(time+1), 1000);
    }
  }, [isCounting, time]);

  const startCounter = () => {
    setIsCounting(true);
  }

  const stopCounter = () => {
    setIsCounting(false);
    clearTimeout(counter);
  }

  const clearCounter = () => {
    stopCounter();
    setTime(0);
  }

  const convertTime = (time: number) => {
    return `${Math.floor(time/60).toString().padStart(2, '0')}:${(time%60).toString().padStart(2, '0')}`;
  }

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
    }}>
      <Text style={{ fontSize: 32 }}>{ convertTime(time) }</Text>
      <View style={{
        backgroundColor: 'salmon',
        width: '100%',
        marginTop: 10
      }}>
        <Button color='white' onPress={startCounter} title='Start' />
      </View>
      <View style={{
        backgroundColor: 'salmon',
        width: '100%',
        marginTop: 10
      }}>
        <Button color='white' onPress={stopCounter} title='Stop' />
      </View>
      <View style={{
        backgroundColor: 'salmon',
        width: '100%',
        marginTop: 10
      }}>
        <Button color='white' onPress={clearCounter} title='Clear' />
      </View>
    </View>
  )
}

export default StopWatch;
