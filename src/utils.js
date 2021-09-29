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
