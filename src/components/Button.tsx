import { View, Button } from 'react-native';

type StyledButtonProps = {
  func: () => void;
  name: string;
}

const StyledButton = ({ func, name }: StyledButtonProps) => {
  return (
    <View style={{
      width: '100%',
      marginTop: 10
    }}>
      <Button color='pink' onPress={func} title={name} />
    </View>
  )
}

export default StyledButton;
