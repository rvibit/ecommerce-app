import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Product} from '@src/redux/slices/productSlice';
import {styles} from './styles';
import {CartItem as CartItemType} from '@src/redux/slices/cartSlice';
import Icon from 'react-native-vector-icons/Feather';

type ItemProps = {
  product: Product;
  onDelete: (item: CartItemType) => void;
};

const CartItem = ({product, onDelete}: ItemProps) => {
  return (
    <View style={styles.item}>
      <Image
        style={styles.img}
        source={{
          uri: product.img,
        }}
      />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{product.name}</Text>
        <View style={styles.variantWrapper}>
          <Text style={styles.variantType}>Color: </Text>
          <Text style={styles.variantValue}>{product.colour}</Text>
        </View>
        <View style={styles.priceWrapper}>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>

          <TouchableOpacity
            style={styles.trashBtn}
            onPress={() => onDelete({...product, qty: 0})}>
            <Icon name="trash" style={styles.trashIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
