import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React ,{useState}from 'react'
import { fontSize, Spacing } from '../constants/dimensions';
import { fontFamily } from '../constants/fonts';
import { colors } from '../colors/colors';
import { category } from './../data/category';

const Category = ({selectedCategory, handleSelectedCategory}) => {
  console.log(selectedCategory,)
  return (
    <FlatList
      data={category}
      renderItem={({item, index}) => (
        <TouchableOpacity
          onPress={() => {
            handleSelectedCategory(item.name);
          }}>
          <Text
            style={[
              styles.categoryText,
              selectedCategory === item.name && {color: colors.purple},
            ]}>
            {item.name}
          </Text>
          {selectedCategory === item.name && <View style={styles.underline} />}
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
      horizontal
      ItemSeparatorComponent={
        <View style={{paddingHorizontal: Spacing.sm}} />
      }></FlatList>
  );
};

export default Category

const styles = StyleSheet.create({
  categoryText: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.Semibold,
    color: colors.gray,
  },
  underline:{
    borderBottomWidth:2,
borderBottomColor:colors.purple,
width:"100%",
marginTop:Spacing.sm
  }
});