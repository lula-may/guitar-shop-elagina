import PropTypes from 'prop-types';

export const PRODUCT = PropTypes.shape({
  article: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  strings: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
});
