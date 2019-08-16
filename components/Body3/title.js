
import React from 'react';
import { Text, View, Button } from 'react-native';
import style from './style';

export default function Title(props) {
    return (

        <View style={style.content_3_title}>
            <View style={style.content_3_title_ViewText}>

                <Text style={style.title_1}>Title 1</Text>
                <Text>I will Be a blessing to my generation</Text>


            </View>
            <View style={style.content_3_title_ViewButtton}>

                <Button
                   style={style.button}
                    title="Go"
                    raised={true}

                ></Button>



            </View>


        </View>

    );
}
