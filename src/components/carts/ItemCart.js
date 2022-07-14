import React from 'react'
import PropTypes from 'prop-types'

ItemCart.propTypes = {}

function ItemCart(props) {
  return (
    <>
      {' '}
      <li className="cart-item">
        <div className="cart-img">
          <a href="product.html">
            <img
              src="image/cart-img.jpg"
              alt="cart-image"
              className="img-fluid"
            />
          </a>
        </div>
        <div className="cart-title">
          <h6>
            <a href="product.html">Fresh apple 5kg</a>
          </h6>
          <div className="cart-pro-info">
            <div className="cart-qty-price">
              <span className="quantity">1 x </span>
              <span className="price-box">$250.00 USD</span>
            </div>
            <div className="delete-item-cart">
              <a href="empty-cart.html">
                <i className="icon-trash icons" />
              </a>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}

export default ItemCart
