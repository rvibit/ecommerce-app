import {colors, font, fontSize, gap} from '@src/theme';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: colors.white.default,
    padding: gap.m,
    margin: gap.m,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  img: {
    width: 120,
    height: 120,
    objectFit: 'contain',
  },
  titleWrapper: {
    flex: 2,
  },
  title: {
    fontFamily: font.default,
    fontSize: fontSize.m,
    color: colors.black.default,
  },
  variantWrapper: {
    flexDirection: 'row',
    marginTop: gap.m,
  },
  variantType: {
    color: colors.gray.default,
    fontFamily: font.default,
    fontSize: fontSize.m,
  },
  variantValue: {
    color: colors.gray[900],
    fontFamily: font.default,
    fontSize: fontSize.m,
  },
  priceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: gap.x,
  },
  price: {
    fontFamily: font.medium,
    fontSize: fontSize.xl,
    color: colors.black.default,
  },
  addBtn: {
    width: 110,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary.default,
    borderRadius: 5,
  },
  btnText: {
    fontFamily: font.medium,
    fontSize: fontSize.s,
    color: colors.white.default,
  },
});
