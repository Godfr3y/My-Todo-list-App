import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  

  return (
    <View style={styles.container}>
      
    {/* todolist (header)*/}
    <View style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}>Todo List</Text>
 
      <View style={styles.items}> 
       {/* This is the list of my task */}
       {
    taskItems.map((item, index) => {
     return (
        <TouchableOpacity key={index} onPress={() => completeTask(index)}>
         <Task text={item} />
        </TouchableOpacity>
     )
    })
  }

    
      </View>

    </View>


      {/* Write a task */}
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
      <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />

      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>

 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  taskWrapper: {
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  items: {
    marginTop: 20,
  },
  writeTaskWrapper: {
   position: 'absolute',
   bottom: 30,
   width: '100%',
   flexDirection: 'row',
   justifyContent: 'space-around',
   alignItems: 'center',
},
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: 'blue',
    borderWidth: 1,
    width: 250,

  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    bordercolor: 'blue',
    borderWidth: 1,
  },
  addText: {
  },
});
