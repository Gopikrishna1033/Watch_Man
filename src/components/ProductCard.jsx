import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../colors/colors'
import { Spacing } from '../constants/dimensions'

const ProductCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>ProductCard</Text>
    </TouchableOpacity>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.background,
        width:"50%",
        height:150,
        borderRadius:12,
        marginVertical:Spacing.md,
        elevation:5
    }
})