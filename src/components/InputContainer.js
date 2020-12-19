import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Dimensions, View, Image } from 'react-native';

function InputContainer(props) {
    const [todo, setTodo] = useState(['']);
    return (
        <View style={styles.container} >
            <TextInput
                testID="input"
                style={styles.input}
                placeholder='text gir..'
                onChangeText={(text) => setTodo(text)}
               
            />

            <TouchableOpacity
                testID="button"
                style={styles.cartButtonContainer}
                onPress={() => {
                    props.onSend(todo);  
                }}
            >
                <Image
                    source={require('../assets/upArrow.png')}
                    style={styles.button}

                />

            </TouchableOpacity>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: '#83c5be',
        flexDirection: 'row',
        bottom: 10,
        padding: 8,
        margin: 10,
        alignItems: 'center',
        borderRadius: 20,

    },

    input: {
        flex: 1,
        backgroundColor: '#faf9f9',
        borderRadius: 15,
        padding: 10


    },

    button: {
        width: 50,
        height: 50,
        tintColor: '#555b6e',
        margin: 5,


    }
});

export { InputContainer };