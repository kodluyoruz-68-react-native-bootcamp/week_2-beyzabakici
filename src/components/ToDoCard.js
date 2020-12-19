import React from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';

function ToDoCard({item, deleteToDo, onChange} ) {
    
    return (
        <TouchableOpacity style={
            item.isDone ? [styles.container, styles.disableContainer] : styles.container 
            }
            onLongPress={() => deleteToDo(item.key)}
            onPress={() => onChange(item.key)}
            
        >
            { <Text style={styles.text}>{item.text}</Text> } 
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
    },

    disableContainer: {
        backgroundColor: '#f19c79',
        
    },

    text: {
        color: '#555B6E',
        fontSize: 20,
        fontWeight: 'bold',
    },

    dateTime: {

    }
});

export { ToDoCard };