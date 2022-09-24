import { Image, StyleSheet, Text, View , Dimensions } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title"
import Colors from "../constants/colors";


export default function GameOverScreen({roundsNumber,userNumber,onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer} >
      <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <View>
        <Text style={styles.summaryText} >
        Your Phone needed 
        <Text style={styles.heighlight}> {roundsNumber} </Text> Number to guess Number 
        <Text style={styles.heighlight}> {userNumber} </Text>. 
        </Text>
      </View>
      <PrimaryButton onPress={onStartNewGame} >Start New Game</PrimaryButton>
    </View>
  )
}

const deviceWidth =Dimensions.get("window").width
const styles = StyleSheet.create({
  rootContainer :{
  flex: 1,
  padding: 24,
  justifyContent : "center",
  alignItems :"center"
  },
  imageContainer :{
    width: deviceWidth <380 ? 150 : 300,
    height: deviceWidth <380 ? 150 : 300,
    borderRadius : deviceWidth <380 ? 75 : 150,
    borderWidth : 2,
    borderColor : Colors.primary500,
    margin : 36,
    overflow: "hidden",
  },
  image :{
    width: "100%",
    height: "100%",
  },
  summaryText :{
    fontFamily :"open-sans",
    fontSize :24,
    textAlign : "center",
    marginVertical :24
  },
  heighlight :{
    fontFamily :"open-sans-bold",
    color:  Colors.white
  }
})