export const ESC_KEY = 'Escape';

export const GuitarOption = {
  acoustic: {
    type: 'акустическая гитара',
    url: 'img/classic.png',
    preview: 'img/classic-small.png',
    strings: [6, 7, 12],
  },
  electro: {
    type: 'электрогитара',
    url: 'img/electro.png',
    preview: 'img/electro-small.png',
    strings: [4, 6, 7],
  },
  ukulele: {
    type: 'укулеле',
    url: 'img/ukulele.png',
    preview: 'img/ukulele-small.png',
    strings: [4],
  },
};

export const GuitarType = {
  ACOUSTIC: 'acoustic',
  ELECTRO: 'electro',
  UKULELE: 'ukulele',
};

export const PopupType = {
  ADD: 'add',
  DELETE: 'delete',
  SUCCESS: 'success',
};

export const PRODUCTS_PER_PAGE = 9;

export const SortType = {
  PRICE: 'price',
  REVIEWS: 'reviews',
};

export const SortDirection = {
  DOWN: 'down',
  UP: 'up',
};

export const STRING_COUNTS = [4, 6, 7, 12];
