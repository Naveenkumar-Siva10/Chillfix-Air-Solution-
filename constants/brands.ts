export const AC_BRANDS = [
  {
    id: 'samsung',
    name: 'Samsung',
    logo: '/images/brands/samsung.svg',
  },
  {
    id: 'lg',
    name: 'LG',
    logo: '/images/brands/lg.svg',
  },
  {
    id: 'daikin',
    name: 'Daikin',
    logo: '/images/brands/daikin.svg',
  },
  {
    id: 'voltas',
    name: 'Voltas',
    logo: '/images/brands/voltas.svg',
  },
  {
    id: 'hitachi',
    name: 'Hitachi',
    logo: '/images/brands/hitachi.svg',
  },
  {
    id: 'carrier',
    name: 'Carrier',
    logo: '/images/brands/carrier.svg',
  },
  {
    id: 'blue-star',
    name: 'Blue Star',
    logo: '/images/brands/blue-star.svg',
  },
  {
    id: 'whirlpool',
    name: 'Whirlpool',
    logo: '/images/brands/whirlpool.svg',
  },
  {
    id: 'panasonic',
    name: 'Panasonic',
    logo: '/images/brands/panasonic.svg',
  },
  {
    id: 'ogeneral',
    name: "O'General",
    logo: '/images/brands/ogeneral.svg',
  },
  {
    id: 'godrej',
    name: 'Godrej',
    logo: '/images/brands/godrej.svg',
  },
  {
    id: 'mitsubishi',
    name: 'Mitsubishi',
    logo: '/images/brands/mitsubishi.svg',
  },
] as const;

export type ACBrand = (typeof AC_BRANDS)[number]['id'];
