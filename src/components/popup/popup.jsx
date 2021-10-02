import React, {useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import ModalAdd from '../modal-add/modal-add';
import ModalDelete from '../modal-delete/modal-delete';
import ModalSuccess from '../modal-success/modal-success';
import { PRODUCT } from '../props';
import { ESC_KEY, PopupType } from '../../const';
import {getBodyScrollTop, isVerticalScroll } from '../../utils';

const OVERLAY_CLASS = 'overlay';

export default function Popup(props) {
  const {
    onAddToCartClick,
    onDeleteFromCartClick,
    onPopupClose,
    product,
    type,
  } = props;

  const pageTopPosition = getBodyScrollTop();
  const pageLeftPosition = document.body.offsetLeft;

  const handleEscKeyDown = useCallback((evt) => {
    if (evt.key === ESC_KEY) {
      onPopupClose();
    }
  }, [onPopupClose]);

  const handleOverlayClick = useCallback((evt) => {
    if (evt.target.className === OVERLAY_CLASS) {
      onPopupClose();
    }
  }, [onPopupClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleEscKeyDown);
    return () => document.removeEventListener('keydown', handleEscKeyDown);
  }, [handleEscKeyDown]);

  useEffect(() => {
    if (isVerticalScroll()) {
      document.body.style.top = `-${pageTopPosition}px`;
      document.body.classList.add('page--lock');
    }

    return () => {
      if (isVerticalScroll()) {
        document.body.classList.remove('page--lock');
        document.body.style = void 0;
        window.scrollTo(0, pageTopPosition);
      }
    };
  }, [pageLeftPosition, pageTopPosition]);


  const renderModal = () => {
    switch (type) {
      case PopupType.ADD:
        return (
          <ModalAdd
            product={product}
            onAddToCartClick={onAddToCartClick}
            onPopupClose={onPopupClose}
          />
        );
      case PopupType.DELETE:
        return (
          <ModalDelete
            product={product}
            onDeleteFromCartClick={onDeleteFromCartClick}
            onPopupClose={onPopupClose}
          />
        );
      case PopupType.SUCCESS:
        return (
          <ModalSuccess onPopupClose={onPopupClose} />
        );
      default: return null;
    }
  };

  return (
    <div className={OVERLAY_CLASS} onClick={handleOverlayClick}>
      {renderModal()}
    </div>
  );
}

Popup.propTypes = {
  onAddToCartClick: PropTypes.func.isRequired,
  onDeleteFromCartClick: PropTypes.func.isRequired,
  onPopupClose: PropTypes.func.isRequired,
  product: PRODUCT,
  type: PropTypes.string.isRequired,
};
