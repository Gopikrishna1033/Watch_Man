import React from "react"
import { Text, View,StyleSheet, Image, TextInput, FlatList } from "react-native"
import { fontSize, iconSize, Spacing } from "../constants/dimensions"
import { colors } from "../colors/colors"
import { fontFamily } from "../constants/fonts"
import Category from "../components/Category"
import ProductCard from "../components/ProductCard"
import { smartWatch } from "../data/smartWatch"
const HomeScreen = ()=>{
return (
  <>
    <View style={styles.container}>
      <Text style={styles.headerLine}>Find your suitable watch now.</Text>
      <View style={styles.mainInputContainer}>
        <View style={styles.inputWrapper}>
          <Image source={require('../images/search.png')} style={styles.logo} />
          <TextInput
            style={styles.textInput}
            placeholder="Search Product"
            placeholderTextColor={colors.placeholderText}
          />
        </View>
        <View style={styles.categoryContainer}>
          <Image
            source={require('../images/category.png')}
            style={styles.logo}
          />
        </View>
      </View>
      <Category />
      <FlatList
        data={smartWatch}
        key={2}
        renderItem={({item,index}) => <ProductCard product={item}/>}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={{paddingBottom:800}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  </>
);
}
const styles = StyleSheet.create({
  container: {
  //  flex: 1,
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
    borderColor: colors.placeholderText,
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
    fontFamily:fontFamily.Medium
  },
  categoryContainer:{
    paddingHorizontal:Spacing.sm
  }
});
export default HomeScreen
