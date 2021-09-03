import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class TransactionScreen extends React.Component{
    render(){
        return(
            <View style = {{flex:1 , justifyContent: "center" , alignItems: "center"}}>
                <Text>INSTAGRAM</Text>
            </View>
        )
    }
}