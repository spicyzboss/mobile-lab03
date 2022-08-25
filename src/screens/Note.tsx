import { useState } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

const Note = () => {
  const [text, setText] = useState<string>("");
  const [textlists, setTextlists] = useState<string[]>([]);

  const addText = () => {
    if (text.length) {
      setTextlists([...textlists, text]);
      setText("");
    }
  }

  const removeText = (index: number) => {
    let lists = [...textlists];
    lists.splice(index, 1);
    setTextlists(lists);
  }

  return (
    <View style={{
      flex: 1,
      margin: 10,
      alignItems: 'center',
    }}>
      <Text style={{ fontSize: 24 }}>สมุดบันทึก</Text>
      <TextInput
        style={{
          borderColor: 'red',
          borderWidth: 1,
          width: '100%',
          fontSize: 24,
          padding: 10,
          marginVertical: 10,
        }}
        placeholder='เพิ่มข้อความที่นี่'
        textAlign='center'
        value={text}
        onChangeText={v => setText(v)}
      />
      <View style={{
        backgroundColor: "cyan",
        width: '100%',
      }}>
        <Button color="black" title='บันทึก' onPress={addText} />
      </View>
      {
        textlists.map(
          (v, i) =>
          <TouchableOpacity key={i} onPress={() => removeText(i)}>
            <Text style={{ fontSize: 20 }}>{ v }</Text>
          </TouchableOpacity>
        )
      }
      <TextInput keyboardType="default" />
    </View>
  );
}

export default Note;
