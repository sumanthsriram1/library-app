
import * as React from 'react'
import {View,TouchableOpacity,StyleSheet,Text} from 'react-native'
import TransactionScreen from '../screens/TransactionScreen'
import SearchScreen from '../screens/SearchScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Ionicons from 'react-native-vector-icons/Ionicons'; //https://ionic.io/ionicons
import Icon from 'react-native-vector-icons'; //npm i react-native-vector-icons
// import {Rajdhani} from 
//expo install @expo-google-fonts/rajdhani 
//expo install expo-font@~8.4.0

const BottomTab = createBottomTabNavigator()

export default class BottomTabNavigator extends React.Component{


    constructor(){
        super()
    }

    render(){
        return(
            <BottomTab.Navigator
            //Ionicons
            screenOptions = {({route})=>({
                tabBarIcon : ({focused, color, size})=>{
                    var iconName;
                    
                    if(route.name === "transaction"){
                        iconName = "book"
                    }
                    else if(route.name === "search"){
                        iconName = "search"
                    }

                    return (<Icon
                     name = {iconName}
                     size={size}
                     color={color}
                    />)
                }
            })}
            
            tabBarOptions={{
                activeTintColor: "#FFFFFF",
                inactiveTintColor: "black",
                style: {
                  height: 130,
                  borderTopWidth: 0,
                  backgroundColor: "#5653d4"
                },
                labelStyle: {
                  fontSize: 20,
                  fontFamily: "Rajdhani_600SemiBold"
                },
                labelPosition: "beside-icon",
                tabStyle: {
                  marginTop: 25,
                  marginLeft: 10,
                  marginRight: 10,
                  borderRadius: 30,
                  borderWidth: 2,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#5653d4"
                }
              }}
            >
                <BottomTab.Screen name = "transaction" component = {TransactionScreen}/>
                <BottomTab.Screen name = "search" component = {SearchScreen}/>
            </BottomTab.Navigator>
            
        )
    }
}


const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:"brown"
    },
    buttonStyling:{
        width:200,
        height:20,
        justifyContent:'center',
        alignSelf:'center',
        color:"pink"
    },
    buttonTextStyling:{
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center',
        color:'white'
    }
})