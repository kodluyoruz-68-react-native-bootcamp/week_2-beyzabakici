import React from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { CurrentDate } from './CurrentDate';

function ToDoCard({item, deleteToDo, onChange} ) {

    return (
        <TouchableOpacity style={
            item.isDone ? [styles.container, styles.disableContainer] : styles.container 
            }
            onLongPress={() => deleteToDo(item.key)}
            onPress={() => onChange(item.key)}
            
        >
            { <Text style={styles.text}>{item.text}</Text> } 
            { <CurrentDate style={styles.dateContainer}/>}
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#cbdfbd',
        height: Dimensions.get('window').height / 14,
        padding: 10,
        margin: 10,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent:'space-between'
    },

    disableContainer: {
        backgroundColor: '#FFE7D6',
        borderColor: '#83c5be',
        borderStyle: 'dashed',
        borderWidth: 3,
        
    },

    text: {
        color: '#555B6E',
        fontSize: 20,
        fontWeight: 'bold',
    },

    dateContainer: {

    }
});

export { ToDoCard };