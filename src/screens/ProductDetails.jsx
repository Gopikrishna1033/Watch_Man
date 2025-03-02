import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useRoute,useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { iconSize } from '../constants/dimensions';
const ProductDetails = () => {
  const route = useRoute();
  const navigation=useNavigation()
  console.log(route);
  // Access the passed product from route.params
  const {product} = route.params || {};
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <Ionicons name="arrow-back" size={iconSize.md} color="black" />
      </TouchableOpacity>
      <Text>ProductDetails</Text>
      {/* Display product details, make sure product is available */}
      {product ? (
        <Text>Product Name: {product.name}</Text>
      ) : (
        <Text>No product details available</Text>
      )}
    </View>
  );
}

export default ProductDetails

const styles = StyleSheet.create({})