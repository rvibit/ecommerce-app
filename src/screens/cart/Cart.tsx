import {FlatList, View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useMemo} from 'react';
import {styles} from './styles';
import {Product} from '@src/redux/slices/productSlice';
import {useAppDispatch, useAppSelector} from '@src/redux/hooks';
import {
  CartItem as CartItemType,
  addProduct,
} from '@src/redux/slices/cartSlice';
import {CartItem} from '@src/components';
import Icon from 'react-native-vector-icons/Feather';
const Cart = () => {
  const dispatch = useAppDispatch();
  const {cart, total} = useAppSelector(state => state.cart);

  const products = useMemo(() => Object.values(cart), [cart]);
  const addToCart = (product: CartItemType) => {
    dispatch(addProduct(product));
  };

  useEffect(() => {
    console.log(JSON.stringify(cart, null, 2));
  }, [cart]);

  const renderItem = ({item}: {item: Product}) => {
    return <CartItem onDelete={addToCart} product={item} />;
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        contentContainerStyle={styles.container}
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.footer}>
        <Text style={styles.total}>${total}</Text>
        <TouchableOpacity
          style={styles.payBtn}
          onPress={() => Alert.alert('Pay Now')}>
          <Text style={styles.payBtnText}>Pay Now</Text>
          <Icon name="arrow-right" style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {Cart};
