
import * as React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import style from './style';
import Title from './title'



export default class Body3 extends React.Component {
  render() {
    return (
        <View style={style.container_3}>
        <Title />
        <View style={style.content_3_body}>
        
        <Text
          style={style.text}
        > 
        when the solution needs you to be good feel free to act good, smile when ever you find discomfort
        .Kind to humanity, celebrate people and make life enjoyable
          
          </Text>
        </View>        
        </View>

    )

  }
}