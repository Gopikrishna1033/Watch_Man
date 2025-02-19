import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { colors } from '../colors/colors'
import { fontSize, Spacing } from '../constants/dimensions'
import { fontFamily } from '../constants/fonts'
const imageURL="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1725994442/Croma%20Assets/Communication/Wearable%20Devices/Images/309428_0_jhv5to.png"
const ProductCard = ({product}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{uri:product.image}} style={styles.productImage}/>
      </View>
      <View style={styles.contentConntainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: '50%',
    height: 300,
    borderRadius: 12,
    marginVertical: Spacing.md,
    elevation: 5,
  },
  imageWrapper: {
    borderRadius: 12,
    backgroundColor: '#FFC887',
    margin: Spacing.sm,
  },
  productImage: {
    height: 150,
    width: '100%',
    resizeMode:'center'
  },
  contentConntainer: {
    padding:Spacing.md
  },
  name:{
    color:colors.black,
    fontSize:fontSize.md,
    fontFamily:fontFamily.Semibold
  },
  brand:{
    color:colors.gray,
    fontSize:fontSize.sm,
    fontFamily:fontFamily.Medium,
    paddingVertical:Spacing.xs
  },
  price:{
    color:colors.purple,
    fontSize:fontSize.Medium,
    fontFamily:fontFamily.Medium
  }
});