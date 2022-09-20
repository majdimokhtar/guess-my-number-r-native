import { View,Text, Pressable,StyleSheet } from "react-native";


function PrimaryButton({children,onPress})  {


    return (

        <View style={styles.btnOuterContainer} >
        <Pressable onPress={onPress} 
        android_ripple={{color : "#caf0f8"}} 
        style={({pressed})=>
        pressed ? [styles.btnInnerContainer ,styles.pressed]
        : styles.btnInnerContainer}
        >
            <Text  style={styles.btnText}>{children}</Text>
        </Pressable>
        </View>

    );
}


const styles = StyleSheet.create({
btnOuterContainer :{
borderRadius :14,
margin: 4,
overflow: "hidden",
},
btnInnerContainer : {
    backgroundColor :"#48cae4",
    paddingVertical : 8,
    paddingHorizontal :16,
    elevation : 2,
},
btnText :{
    color :"#fff",
    textAlign :"center",
},
pressed :{
    opacity: 0.75
}
});

export default PrimaryButton;
