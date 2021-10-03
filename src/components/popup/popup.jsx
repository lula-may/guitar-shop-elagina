import React, {useCallback, useEffect, useState} from 'react';
import './style.scss';

import ModalAdd from '../modal-add/modal-add';
import ModalDelete from '../modal-delete/modal-delete';
import ModalSuccess from '../modal-success/modal-success';
import { ESC_KEY, PopupType } from '../../const';
import {getBodyScrollTop, isVerticalScroll } from '../../utils';
import { useSelector } from 'react-redux';
import { getCurrentProduct, getPopup } from '../../store/page/selectors';
import { useDispatch } from 'react-redux';
import { addProduct, deletePopup, deleteProduct, setPopup, updateCartProduct } from '../../store/actions';
import { getCartList } from '../../store/cart/selectors';

const OVERLAY_CLASS = 'overlay';

export default function Popup() {
  const type = useSelector(getPopup);
  const product = useSelector(getCurrentProduct);
  const dispatch = useDispatch();
  const productsInCart = useSelector(getCartList);

  const [pageTopPosition, setYPosition] = useState(getBodyScrollTop());
  const [pageLeftPosition, setXPosition] = useState(document.body.offsetLeft);

  const closePopup = useCallback(() => {
    dispatch(deletePopup());
  }, [dispatch]);

  const onAddToCartClick = useCallback(() => {
    const cartElement = productsInCart.find(({product: cartProduct}) => product.id === cartProduct.id);
    if (cartElement) {
      const {counter} = cartElement;
      dispatch(updateCartProduct({product, counter: counter + 1}));
    } else {
      dispatch(addProduct({product, counter: 1}));
    }
    dispatch(deletePopup());
    dispatch(setPopup(PopupType.SUCCESS));
  }, [dispatch, product, productsInCart]);

  const onDeleteFromCartClick = useCallback(() => {
    dispatch(deleteProduct(product));
    dispatch(deletePopup());
  }, [dispatch, product]);

  const onCloseButtonClick = useCallback(() => closePopup(), [closePopup]);

  const handleEscKeyDown = useCallback((evt) => {
    if (evt.key === ESC_KEY) {
      closePopup();
    }
  }, [closePopup]);

  const handleOverlayClick = useCallback((evt) => {
    if (evt.target.className === OVERLAY_CLASS) {
      closePopup();
    }
  }, [closePopup]);

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
        setXPosition(0);
        setYPosition(0);
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
            onPopupClose={onCloseButtonClick}
          />
        );
      case PopupType.DELETE:
        return (
          <ModalDelete
            product={product}
            onDeleteFromCartClick={onDeleteFromCartClick}
            onPopupClose={onCloseButtonClick}
          />
        );
      case PopupType.SUCCESS:
        return (
          <ModalSuccess onPopupClose={onCloseButtonClick} />
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
