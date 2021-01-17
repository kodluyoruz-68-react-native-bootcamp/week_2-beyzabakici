import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

function CurrentDate (){
    
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        setCurrentDate(
          date + '/' + month + '/' + year 
          + ' ' + hours + ':' + min
        );
      }, []);
    
    return(
        <View style={styles.container}>
           <Text style={styles.text}>{currentDate}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    marginTop: 20,
    alignSelf:'center'
  },
  
  text: {
    fontSize: 18,
    color: '#555B6E'

  }
})

export { CurrentDate }