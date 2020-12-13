import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Dimensions, View, Image } from 'react-native';

function InputContainer(props) {
    const [word, setWord] = useState(['']);
    return (
        <View style={styles.container} >
            <TextInput
                style={styles.input}
                placeholder='text gir..'
                onChangeText={(text) => setWord(text)}
            />
            {console.log('burasi input ' + word)}
            <TouchableOpacity style={styles.cartButtonContainer} onPress={props.setWord}>
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
        backgroundColor: '#89b0ae',
        flexDirection: 'row',
        bottom: 10,
        padding: 8,
        margin: 10,
        alignItems: 'center',
        borderRadius: 20,
         
    },

    input: {
        flex: 1,
        backgroundColor:'#faf9f9',
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