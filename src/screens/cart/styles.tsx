import {colors, font, fontSize, gap} from '@src/theme';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primary[100],
  },

  item: {
    flexDirection: 'row',
    backgroundColor: colors.white.default,
    padding: gap.m,
    margin: gap.m,
    elevation: 5,
    borderRadius: 5,
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
    fontSize: fontSize.xxl,
    color: colors.black.default,
  },
  addBtn: {
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary[600],
    paddingVertical: gap.m,
    borderRadius: 5,
    marginRight: 10,
  },
  btnText: {
    fontFamily: font.medium,
    fontSize: fontSize.s,
    color: colors.white.default,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 55,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.primary.default,
    marginBottom: gap.x,
    margin: gap.m,
  },
  total: {
    fontFamily: font.medium,
    fontSize: fontSize.xxl,
    color: colors.white.default,
  },
  payBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.primary[600],
    height: 40,
    width: 115,
    paddingHorizontal: gap.x,
    borderRadius: 5,
  },
  payBtnText: {
    fontFamily: font.medium,
    fontSize: fontSize.m,
    color: colors.white.default,
  },
  arrowIcon: {
    fontSize: fontSize.m,
    color: colors.white.default,
  },
});
