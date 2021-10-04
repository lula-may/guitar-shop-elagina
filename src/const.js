export const ESC_KEY = 'Escape';

export const GuitarOption = {
  acoustic: {
    type: 'акустическая гитара',
    urls: ['img/classic.png', 'img/classic@2x.png'],
    previews: ['img/classic-small.png', 'img/classic-small@2x.png'],
    strings: [6, 7, 12],
  },
  electro: {
    type: 'электрогитара',
    urls: ['img/electro.png', 'img/electro@2x.png'],
    previews: ['img/electro-small.png', 'img/electro-small@2x.png'],
    strings: [4, 6, 7],
  },
  ukulele: {
    type: 'укулеле',
    urls: ['img/ukulele.png', 'img/ukulele@2x.png'],
    previews: ['img/ukulele-small.png', 'img/ukulele-small@2x.png'],
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
