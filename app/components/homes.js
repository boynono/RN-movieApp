import React from 'react';
import {SafeAreaView,View,Text,StatusBar} from 'react-native';

function homes() {
    return(
        <SafeAreaView style={{backgroundColor:'#f7f7f7 ',flex:1}}>
            <StatusBar hidden/>
            <Text>THIS homes</Text>
        </SafeAreaView>
    )
}

export default homes; 