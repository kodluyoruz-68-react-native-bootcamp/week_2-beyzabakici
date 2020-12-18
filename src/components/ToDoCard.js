import React from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';

function ToDoCard({item, deleteToDo} ) {
    return (
        <TouchableOpacity style={styles.container}
            onLongPress={() => deleteToDo(item.key)}
        >
            { <Text style={styles.text}>{item.text}</Text> } 
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#BEE3DB',
        height: Dimensions.get('window').height / 14,
        padding: 10,
        margin: 10,
        borderRadius: 20,
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