import { StyleSheet, Text, View } from "react-native"
import Colors from "../../constants/colors"


function Title({children}) {
  return (
    <View>
        <Text style={styles.title}>{children}</Text>
    </View>
  )
}
const styles = StyleSheet.create({

    title :{
        fontFamily : "open-sans-bold",
        fontSize : 24,
        textAlign :"center" ,
        color: Colors.white,
        borderColor : Colors.white,
        borderWidth :2,
        padding: 12
    }
})
export default Title