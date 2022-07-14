import React from 'react'
import PropTypes from 'prop-types'

ItemSupplier.propTypes = {}

function ItemSupplier(props) {
  return (
    <>
      <div className="items">
        <div className="brand-img">
          <a href="javascript:void(0)">
            <img
              src={`image/brand/${props.img}`}
              alt="home brand"
              className="img-fluid"
            />
          </a>
        </div>
      </div>
    </>
  )
}

export default ItemSupplier
