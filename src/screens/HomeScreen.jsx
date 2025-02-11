import React from "react"
import { Text, View,StyleSheet, Image, TextInput } from "react-native"
import { fontSize, iconSize, Spacing } from "../constants/dimensions"
import { colors } from "../colors/colors"
import { fontFamily } from "../constants/fonts"
const HomeScreen = ()=>{
return (
  <>
    <View style={styles.container}>
      <Text style={styles.headerLine}>Find your suitable watch now.</Text>
      <View style={styles.mainInputContainer}>
        <View style={styles.inputWrapper}>
          {' '}
          <Image source={require('../images/search.png')} style={styles.logo} />
          <TextInput style={styles.textInput} />        
        </View>
        <View style={styles.categoryContainer}>
          <Image
            source={require('../images/category.png')}
            style={styles.logo}
          />
        </View>
      </View>
    </View>
  </>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: Spacing.md,
  },
  headerLine: {
    fontSize: fontSize.xxl,
    color: colors.black,
    fontFamily: fontFamily.Bold,
  },
  mainInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Spacing.xl,
  },
  inputWrapper: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
  },
  logo: {
    height: iconSize.md,
    width: iconSize.md,
  },
  textInput: {
    flex: 1,
    fontSize: fontSize.lg,
  },
  categoryContainer:{
    paddingHorizontal:Spacing.sm
  }
});
export default HomeScreen
