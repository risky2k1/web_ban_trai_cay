import React from 'react'
import PropTypes from 'prop-types'
import StarRatings from "react-star-ratings";
Product.propTypes = {}

function Product(props) {
  return (
    // pro-img-1.jpg
    <>
      <div className={props.class}>
        <div className="tred-pro">
          <div className="tr-pro-img">
            <a href="product.html">
              <img
                className="img-fluid"
                src={props.firstImg}
                alt="pro-img1"
              />
              <img
                className="img-fluid additional-image"
                src={props.secondImg}
                alt="additional image"
              />
            </a>
          </div>
          <div className="Pro-lable">
            {props.new ? <span className="p-text">New</span> : ''}
            {props.discount ? (
              <span className="p-discount">-{props.discount}%</span>
            ) : (
              ''
            )}
          </div>
          <div className="pro-icn">
            <a href="wishlist.html" className="w-c-q-icn">
              <i className="fa fa-heart" />
            </a>
            <a href="cart.html" className="w-c-q-icn">
              <i className="fa fa-shopping-bag" />
            </a>
            <a
              href="javascript:void(0)"
              className="w-c-q-icn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="fa fa-eye" />
            </a>
          </div>
        </div>
        <div className="caption">
          <h3>
            <a href="product.html">
              {props.name} {props.weight}
            </a>
          </h3>
          <div className="rating">
          <StarRatings rating={props.rate} starRatedColor='gold' numberOfStars={5} name='rating' starDimension='20px' />
          </div>
          <div className="pro-price">
            <span className="new-price">{props.newPrice}</span>
            {props.oldPrice ? (
              <span className="old-price">
                <del>{props.oldPrice}</del>
              </span>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
