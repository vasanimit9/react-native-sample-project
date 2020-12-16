import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {

  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const goalAddHandler = () => {
    if(!enteredGoal) {
      return;
    }
    props.onAdd(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='CANCEL'
              color='red'
              onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title='ADD' onPress={goalAddHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-evenly',
  },
  button: {
    width: '40%'
  }
});

export default GoalInput;