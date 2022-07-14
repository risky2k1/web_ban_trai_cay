import React from 'react'
import PropTypes from 'prop-types'
import ItemCart from './ItemCart'
MiniCart.propTypes = {}

function MiniCart(props) {
  return (
    <>
      <div className="mini-cart">
        <a href="javascript:void(0)" className="shopping-cart-close">
          <i className="ion-close-round" />
        </a>
        <div className="cart-item-title">
          <p>
            <span className="cart-count-desc">There are</span>
            <span className="cart-count-item bigcounter">4</span>
            <span className="cart-count-desc">Products</span>
          </p>
        </div>
        <ul className="cart-item-loop">
          <ItemCart />
          <ItemCart />
          <ItemCart />
          <ItemCart />
        </ul>
        <ul className="subtotal-title-area">
          <li className="subtotal-info">
            <div className="subtotal-titles">
              <h6>Sub total:</h6>
              <span className="subtotal-price">$750.00 USD</span>
            </div>
          </li>
          <li className="mini-cart-btns">
            <div className="cart-btns">
              <a href="cart.html" className="btn btn-style2">
                View cart
              </a>
              <a href="checkout.html" className="btn btn-style2">
                checkout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default MiniCart
