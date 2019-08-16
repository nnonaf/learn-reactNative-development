
import * as React from 'react';
import { Text, View,Platform  } from 'react-native';
import style from './style';
import Icon from '../../pureFunctions/Icon'



export default class Body1 extends React.Component {
    render() {
        return (
            <View style={style.container_1}>

                <View style={style.incon} >
                    <Icon name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
                </View>
                <View style={style.search}>


               <View style={style.searchBar}></View>
                
                </View>

            </View>

        )

    }
}