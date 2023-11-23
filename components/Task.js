import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

const Task = (props) => {

  return (
    <View style={styles.item}>
        <View style={styles.itemleft}>
         <View style={styles.square}></View> 
        <Text style={styles.itemText}>{props.text}</Text>
     </View> 
        <View style={styles.circular}></View>
    </View>
  );
}

const styles = StyleSheet.create({
    
    item: {
      backgroundColor: 'white',
      margin: 20,
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    itemleft: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
    },

    square: {
      width: 25,
      height: 25,
      backgroundColor: 'red',
      opacity: 0.4,
      borderRadius: 5,
      marginRight: 15,
    },

    itemText: {
      maxWidth: '80%',
      
    },
    circular: {
      width: 12,
      height: 12,
      borderColor: 'blue', 
      borderWidth: 2, 
      borderRadius: 6, 
    },
  });
  
  export default Task;
  
