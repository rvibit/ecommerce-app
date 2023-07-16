import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Product} from '@src/redux/slices/productSlice';
import {styles} from './styles';
import InputSpinner from 'react-native-input-spinner';
import {colors, font} from '@src/theme';
import {CartItem} from '@src/redux/slices/cartSlice';

type ItemProps = {
  product: Product;
  qty: number;
  onAddCart: (item: CartItem) => void;
};

const Item = ({product, qty = 0, onAddCart}: ItemProps) => {
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
          {qty === 0 ? (
            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => onAddCart({...product, qty: 1})}>
              <Text style={styles.btnText}>Add</Text>
            </TouchableOpacity>
          ) : (
            <InputSpinner
              min={0}
              step={1}
              colorPress={colors.primary[500]}
              colorRight={colors.primary.default}
              colorLeft={colors.primary.default}
              value={qty}
              height={40}
              fontSize={13}
              editable={false}
              fontFamily={font.default}
              skin="square"
              onChange={(num: number) => onAddCart({...product, qty: num})}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default Item;
