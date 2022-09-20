import { StyleSheet, ImageBackground,SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Colors from './constants/colors';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber ,setUserNumber] =useState()
  const [gameIsOver,setGameIsOver] = useState(true)

 const [fontsLoaded] = useFonts({
    "open-sans" : require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold" : require("./assets/fonts/OpenSans-Bold.ttf")
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  
  function startGameHandler (pickedNumber){
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  function gameOverHandler(){
    setGameIsOver(true)
  }

  let screen = <StartGameScreen onConfirmNumber={startGameHandler} />
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen/>
  }


  return (
    <LinearGradient colors={[Colors.primary800, Colors.primary600]} style={styles.AppContainer}>
      <ImageBackground 
      source={require("./assets/background.png")} 
      resizeMode="cover"
      style={styles.AppContainer}
      imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.AppContainer}>{screen}</SafeAreaView>
    </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
AppContainer :{
  flex: 1,
},
backgroundImage :{
  opacity: 0.35
}
});
