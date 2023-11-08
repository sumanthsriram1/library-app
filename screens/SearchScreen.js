import * as React from 'react'
import {View,TouchableOpacity,StyleSheet,Text} from 'react-native'


export default class SearchScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>
                    Search Screen
                </Text>
            </View>
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