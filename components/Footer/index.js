
import * as React from 'react';
import { Text, View, Platform } from 'react-native';
import Icon from '../../pureFunctions/Icon'
import style from './style';



export default class Footer extends React.Component {
  render() {
    return (
      <View style={style.container_4}>
        <View style={style.footerMessage} >
          <Icon name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
        </View>
        <View style={style.footerCall}>
          <Icon name={Platform.OS === 'ios' ? 'ios-options' : 'md-link'} />

        </View>
      </View>
    )

  }
}