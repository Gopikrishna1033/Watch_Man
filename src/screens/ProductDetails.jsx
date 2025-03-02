import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { useRoute,useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { fontSize, iconSize } from '../constants/dimensions';
import { colors } from '../colors/colors';
import { Spacing } from '../constants/dimensions';
import { fontFamily } from '../constants/fonts';
const ProductDetails = () => {
  const route = useRoute();
  const navigation=useNavigation()
  // Access the passed product from route.params
  const {product} = route.params || {};
  console.log(route,"route")
  
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackPress} >
        <Ionicons name="arrow-back" size={iconSize.md} color="black" />
      </TouchableOpacity>
      <View>
        {/* Display product details, make sure product is available */}
        {product ? (
          <View>
            <Image source={{uri: product.image}} style={styles.productImage} />
            <Text style={styles.contentStyle}> {product.name}</Text>
            <Text style={styles.contentStyle}> Brand:{product.brand}</Text>
            <Text style={styles.contentStyle}> Price:  {product.price}</Text>
            <Text style={styles.contentStyle}>   {product.details}</Text>
          </View>
        ) : (
          <Text>No product details available</Text>
        )}
      </View>
    </View>
  );
}

export default ProductDetails

const styles = StyleSheet.create({
  container: {
    padding: Spacing.md,
    backgroundColor: colors.background,
  },
  productImage: {
    height: 250,
    width: '100%',
    resizeMode: 'center',
  },
  contentStyle:{
    fontSize:fontSize.md,
    fontFamily:fontFamily.Bold
  }
});