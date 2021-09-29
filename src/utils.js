export const getClassName = (...args) => args.filter(Boolean).join(' ');

export const getPagesList = (current, last) => {
  switch (last) {
    case 0: return [];
    case 1: return [];
    case 2: return [1, 2];
    case 3: return [1, 2, 3];
    default:
      if (current < 3) {
        return [1, 2, false, last];
      }
      if (current >= last - 1) {
        return [1, false, last - 1, last];
      }
      return [1, false, current, false, last];
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

