import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function App() {
  const [userNumber ,setUserNumber] =useState()
  function startGameHandler (pickedNumber){
    setUserNumber(pickedNumber)
  }
  let screen = <StartGameScreen onConfirmNumber={startGameHandler} />
  if (userNumber) {
    screen = <GameScreen/>
  }

  return (
    <LinearGradient colors={['#023e8a', '#ade8f4']} style={styles.AppContainer}>
      <ImageBackground 
      source={require("./assets/background.png")} 
      resizeMode="cover"
      style={styles.AppContainer}
      imageStyle={styles.backgroundImage}
      >
    {screen}
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
