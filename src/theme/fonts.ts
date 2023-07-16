const sizes = ['xs', 's', 'm', 'x', 'xl', 'xxl', 'xxxl'] as const;

export type fonstSizeType = {
  [K in (typeof sizes)[number]]: number;
};

export const fontSize: fonstSizeType = {
  xs: 12,
  s: 14,
  m: 16,
  x: 18,
  xl: 20,
  xxl: 24,
  xxxl: 28,
};

export const font = {
  default: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  bold: 'Poppins-Bold',
};
