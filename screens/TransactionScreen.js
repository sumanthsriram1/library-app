import * as React from 'react'
import {View,TouchableOpacity,StyleSheet,Text,Image,ImageBackground} from 'react-native'
import * as Permissions from 'expo-permissions'
import { BarCodeScanner } from 'expo-barcode-scanner'

export default class TransactionScreen extends React.Component{
    constructor(){
        super();

        this.state = {
            buttonState:"normal",
            hasCameraPermissions:null,
            scanned:false,
            scannedData:"",
            bookId:"",
            studentId:""
        }
    }

    getCameraPermissions = async (state)=>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermissions:status === "granted",
            buttonState:state,
            scanned:false
        })
    }


    handleBarcodeScanned = async ({type,data})=>{
        this.setState({
            buttonState:"normal",
            scannedData:data,
            scanned:true
        })
    }

    render(){
        const {buttonState,hasCameraPermissions,scannedData,scanned} = this.state //Object Destruction
        if(buttonState != "normal"){
            return (
                <BarCodeScanner
                 style={StyleSheet.absoluteFillObject}
                 onBarCodeScanned={scanned ? undefined : this.handleBarcodeScanned}
                /> 
            )
        }
        return(
            <View style={styles.container}>
                <ImageBackground style={styles.bgImage} source = {require("../images/background2.png")}>
                  <View style={styles.upperContainer}>
                    <Image style={styles.appIcon} source={require("../images/appIcon.png")}/>
                    <Image style={styles.appName} source={require("../images/appName.png")}/>
                  </View>
                  <View style={styles.lowerContainer}>
                    <View style={styles.textinputContainer}>
                        <TextInput 
                            style={styles.textinput}
                            placeholder = {"Enter the book Id"}
                            placeholderTextColor= {"white"}
                        />
                        
                        <TouchableOpacity 
                        style = {styles.scanbutton}
                        onPress={()=>{
                            thisl.getCameraPermissions("bookId")
                        }}
                        >
                            <Text style={styles.scanbuttonText}></Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.textinputContainer}>
                        <TextInput 
                            style={styles.textinput}
                            placeholder = {"Enter the student Id"}
                            placeholderTextColor= {"white"}
                        />
                        
                        <TouchableOpacity 
                        style = {styles.scanbutton}
                        onPress={()=>{
                            thisl.getCameraPermissions("studentId")
                        }}
                        >
                            <Text style={styles.scanbuttonText}></Text>
                        </TouchableOpacity>
                    </View>
                  </View>

                </ImageBackground>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
      },
      bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      upperContainer: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
      },
      appIcon: {
        width: 200,
        height: 200,
        resizeMode: "contain",
        marginTop: 80
      },
      appName: {
        width: 80,
        height: 80,
        resizeMode: "contain"
      },
      lowerContainer: {
        flex: 0.5,
        alignItems: "center"
      },
      textinputContainer: {
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        backgroundColor: "#9DFD24",
        borderColor: "#FFFFFF"
      },
      textinput: {
        width: "57%",
        height: 50,
        padding: 10,
        borderColor: "#FFFFFF",
        borderRadius: 10,
        borderWidth: 3,
        fontSize: 18,
        backgroundColor: "#5653D4",
        fontFamily: "Rajdhani_600SemiBold",
        color: "#FFFFFF"
      },
      scanbutton: {
        width: 100,
        height: 50,
        backgroundColor: "#9DFD24",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: "center",
        alignItems: "center"
      },
      scanbuttonText: {
        fontSize: 24,
        color: "#0A0101",
        fontFamily: "Rajdhani_600SemiBold"
      }
})