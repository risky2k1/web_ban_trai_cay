import React from 'react'
import PropTypes from 'prop-types'

Icon.propTypes = {}

function Icon(props) {
  return (
    <>
      <li className="side-wrap wishlist-wrap">
        <a
          href="wishlist.html"
          className="header-wishlist"
          href="javascript:void(0)"
        >
          <span className="wishlist-icon">
            <i className={props.typeIcon} />
          </span>
          <span className="wishlist-counter">0</span>
        </a>
      </li>
    </>
  )
}

export default Icon
