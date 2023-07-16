const gaps = ['xs', 's', 'm', 'x', 'xl', 'xxl'] as const;

type gapSize = {
  [K in (typeof gaps)[number]]: number;
};

export const gap: gapSize = {
  xs: 2,
  s: 5,
  m: 8,
  x: 10,
  xl: 15,
  xxl: 20,
};
