import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextInput from './src/component/TextInput';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput 
        placeHolder='type your text'
        onChangeText={()=>console.log("you clicked me.")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
