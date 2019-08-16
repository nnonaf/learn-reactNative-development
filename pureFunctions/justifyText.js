
import React from 'react';
import JustifiedText from 'react-native-justified-text';

export default function JustifiedText(props) {
    return (

        <JustifiedText
            text={props.text} 
            color="#ff0000"
            fontFamily="myFont.ttf" 
            fontSize={16}
            lineHeightMultiplicator={2}
            style={{ height: 200 }} />
        
    );
}






{/* <Ionicons
    name={props.name}
    size={50}
    color="#ffffff"
    style={{ textAlign: "center" }}
/> */}