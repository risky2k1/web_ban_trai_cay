import React from 'react'
import PropTypes from 'prop-types'

feedback.propTypes = {}

function feedback(props) {
  return (
    <>
      <div className="items">
        <div className="blog-start">
          <div className="blog-image">
            <a href="blog-style-1-details.html">
              <img
                src="image/blog-image/blog-1.jpg"
                alt="blog-image"
                className="img-fluid"
              />
            </a>
          </div>
          <div className="blog-content">
            <div className="blog-title">
              <h6>
                <a href="blog-style-1-details.html">
                  Green onion knife and salad plased
                </a>
              </h6>
              <span className="blog-admin">
                By <span className="blog-editor">Andrew louise</span>
              </span>
            </div>
            <p className="blog-description">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli.
              aenean commodo ligula eget dolor...
            </p>
            <a href="blog-style-1-details.html" className="read-link">
              <span>Read more</span>
              <i className="ti-arrow-right" />
            </a>
            <div className="blog-date-comment">
              <span className="blog-date">8 Jan 2021</span>
              <a href="javascript:void(0)">6 Comment</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default feedback
