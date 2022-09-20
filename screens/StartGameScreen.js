import { View ,TextInput, StyleSheet, Alert} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import {useState} from "react"
import Colors from "../constants/colors";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

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
        <View style={styles.rootContainer} >
        <Title>Guess My Number</Title>
        <Card >
            <InstructionText>Enter Number</InstructionText>
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
        </Card>
        </View>
    );
}


const styles =StyleSheet.create({
rootContainer :{
    flex :1,
    marginTop :100,
    alignItems : "center"
    },
numberInput :{
    height: 50,
    width: 50,
    fontSize : 32,
    borderBottomColor : Colors.accent500,
    borderBottomWidth : 2,
    color: Colors.accent500,
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
