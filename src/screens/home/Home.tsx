import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import {Product, fetchProducts} from '@src/redux/slices/productSlice';
import {useAppDispatch, useAppSelector} from '@src/redux/hooks';
import {CartItem, addProduct} from '@src/redux/slices/cartSlice';
import {Loader, Item} from '@src/components';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
const Home = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const {cart, total} = useAppSelector(state => state.cart);
  const {loading, products} = useAppSelector(state => state.products);
  const addToCart = (product: CartItem) => {
    dispatch(addProduct(product));
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const renderItem = ({item}: {item: Product}) => {
    const qty = cart.hasOwnProperty(item.id) ? cart[item.id]?.qty : 0;
    return <Item onAddCart={addToCart} qty={qty} product={item} />;
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        refreshControl={
          <RefreshControl
            onRefresh={() => dispatch(fetchProducts())}
            refreshing={loading}
          />
        }
        contentContainerStyle={styles.container}
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />

      {total > 0 && (
        <View style={styles.footer}>
          <Text style={styles.total}>${total}</Text>
          <TouchableOpacity
            style={styles.cartBtn}
            onPress={() => navigation.navigate('Cart')}>
            <Icon name="shopping-cart" style={styles.cartIcon} />
            <Text style={styles.cartBtnText}>View Cart</Text>
          </TouchableOpacity>
        </View>
      )}

      <Loader visible={loading} />
    </View>
  );
};

export {Home};
