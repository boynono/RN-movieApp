import React, { useEffect } from 'react';
import {SafeAreaView,View,Text,StatusBar} from 'react-native';
import { StackActions } from "@react-navigation/native";

function splashScreen(navigation,route) {
    useEffect(()=>{
        setTimeout(() => {
            navigation.dispatch(
                StackActions.replace('homes')
            )
           
        },3000);
    })

    return(
        <SafeAreaView style={{backgroundColor:'#002dbb',flex:1}}>
            <StatusBar hidden/>
            <Text style={{color:'#fff'}}>THIS SPLASHSCREEN</Text>
        </SafeAreaView>
    )
}

export default splashScreen;