import * as React from 'react'
import {View,TouchableOpacity,StyleSheet,Text} from 'react-native'
import BottomTabNavigator from './navigation/BottomTabNavigator'
import { NavigationContainer } from '@react-navigation/native'
export default class App extends React.Component{
    render(){
        return(
            <NavigationContainer>
              <BottomTabNavigator/>
            </NavigationContainer>
        )
    }
}