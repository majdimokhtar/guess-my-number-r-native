import { View ,TextInput, StyleSheet, Alert} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import {useState} from "react"

function StartGameScreen ({onConfirmNumber}) {
    const [entredNumber , setEntredNumber] =useState("")
    function numberIputHandler(entredText){
        setEntredNumber(entredText)
    }
    function resetInputHandler(){
        setEntredNumber("")
    }

    function confirmInputHandler(){
        const chosenNumber =parseInt(entredNumber)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            //show alert!!
            Alert.alert("Invalid Number", "Number must be between 1 and 99",
            [{text :"Okay", style : "destructive",onPress : resetInputHandler}]
            )
            return;
        }
        onConfirmNumber(chosenNumber)
    }
    return (
        <View style={styles.inputContainer} >
            <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false}
            onChangeText={numberIputHandler}
            value={entredNumber}
            />
            <View style={styles.btnsContainer} >
            <View style={styles.btnContainer}>
            <PrimaryButton onPress={resetInputHandler} >Reset</PrimaryButton>
            </View>
            <View style={styles.btnContainer}>
            <PrimaryButton onPress={confirmInputHandler} >Confirm</PrimaryButton>
            </View>
            </View>
        </View>
    );
}


const styles =StyleSheet.create({
inputContainer :{
    justifyContent :"center",
    alignItems : "center",
    padding: 16,
    marginTop : 100,
    backgroundColor : "#219ebc",
    borderRadius : 8,
    marginHorizontal :24,
    elevation :4, // box shadow for android
    // box shadow for ios
    shadowColor : "black",
    shadowOffset :{ width :0 , height : 2},
    shadowRadius : 6,
    shadowOpacity : 0.25
},
numberInput :{
    height: 50,
    width: 50,
    fontSize : 32,
    borderBottomColor : "#ffb703",
    borderBottomWidth : 2,
    color: "#ffb703",
    marginVertical : 8,
    fontWeight :"bold",
    textAlign : "center"
},
btnsContainer :{
    flexDirection :"row"
},
btnContainer :{
    flex: 1
}
})

export default StartGameScreen;
