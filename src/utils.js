const removeElementByIndex = (items, index) => {
  if (index === -1) {
    return items;
  }
  return [...items.slice(0, index), ...items.slice(index + 1)];
};

export const deleteElement = (items, element) => {
  const index = items.indexOf(element);
  return removeElementByIndex(items, index);
};

export const deleteProductById = (items, elementId) => {
  const index = items.findIndex(({product}) => product.id === elementId);
  return removeElementByIndex(items, index);
};

export const replaceCartElement = (elements, element) => {
  const index = elements.findIndex(({product}) => product.id === element.product.id);
  if (index === -1) {
    return elements;
  }
  return [...elements.slice(0, index), element, ...elements.slice(index + 1)];
};

export const getElementById = (elements, elementId) => elements.find(({id}) => id === elementId);

export const filterProductsByPrice = (items, min=0, max=1000000) => items.filter(({price}) => (price >= min) && (price <= max));

export const getBodyScrollTop = () => window.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);

export const isVerticalScroll = () =>  document.body.offsetHeight > window.innerHeight;

export const getClassName = (...args) => args.filter(Boolean).join(' ');

export const getPagesList = (current, last) => {
  switch (last) {
    case 0: return [];
    case 1: return [];
    case 2: return [1, 2];
    case 3: return [1, 2, 3];
    default:
      if (current < 3) {
        return [1, 2, 'dot-1', last];
      }
      if (current >= last - 1) {
        return [1, 'dot-1', last - 1, last];
      }
      return [1, 'dot-1', current, 'dot-2', last];
  }
};

const Sort = {
  down: (a, b) => (b - a),
  up: (a, b) => (a - b),
};

export const sortProductsByFeature = (items, feature, direction) => {
  if (!feature) {
    return items;
  }
  return items.slice().sort((left, right) => Sort[direction](left[feature], right[feature]));
};

export const PromoCode = {
  GITARAHIT: (price) => price * 0.9,
  SUPERGITARA: (price) => price - 700,
  GITARA2020: (price) => (3000 / price > 0.3) ? price * 0.7 : price - 3000,
};
