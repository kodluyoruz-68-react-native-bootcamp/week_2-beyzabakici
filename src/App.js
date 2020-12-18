import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Dimensions, Image } from 'react-native';
import { InputContainer, ToDoCard } from './components';

/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {
  const [toDoList, setToDoList] = useState([]);

  const deleteToDo = (key) => {
    setToDoList((prevToDoList) => {
      return prevToDoList.filter(todo => todo.key != key)
    });
  }

  const renderToDoCard = (obj) => (
    <ToDoCard item={obj.item} deleteToDo={deleteToDo}/>

  );

  const addToDo = (val) => {
    setToDoList([{ text: val, key: Math.random().toString(), isDisable: false }, ...toDoList]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('./assets/todo.png')}
          />
          <Text style={styles.label}>TO DO LIST</Text>
        </View>

        <FlatList
          keyExtractor={(item, index) => item.key.toString()}
          data={toDoList}
          renderItem={renderToDoCard}
        />

        <InputContainer
          onSend={(val) => addToDo(val)}
        />

      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#FFE7D6'
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  logo: {
    height: 40,
    width: 40,
    tintColor: '#89b0ae',
    margin: 10,

  },

  label: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#555b6e'
  }
});

export default App;
