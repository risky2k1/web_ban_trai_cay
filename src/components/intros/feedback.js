import React from 'react'
import PropTypes from 'prop-types'

feedback.propTypes = {}

function feedback(props) {
  return (
    <>
      <div className="items feeditem">
        <div className="testimonial-area">
          <span className="tsti-title">Frendly support</span>
          <p>
            I love your store! there is the largest selection of products of the
            exceptional quality and the lowest prices like in no other store.
          </p>
          <div className="testi-name">
            <h6>Williamson</h6>
            <span>
              <i className="fa fa-star e-star" />
              <i className="fa fa-star e-star" />
              <i className="fa fa-star e-star" />
              <i className="fa fa-star e-star" />
              <i className="fa fa-star e-star" />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default feedback
