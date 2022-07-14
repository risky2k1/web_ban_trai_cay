import React from 'react'
import PropTypes from 'prop-types'
import Feedback from './feedback'
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
Testimonial.propTypes = {}

function Testimonial(props) {
  return (
    <>
      <section className="section-tb-padding testimonial-bg1">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section-title">
                <h2>Our customer say</h2>
              </div>
              {/* <div class="testi-m owl-carousel owl-theme"> */}
              <Swiper
                slidesPerView={2}
                spaceBetween={30}
                keyboard={{
                  enabled: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className={`testi-m`}
              >
                <SwiperSlide className="home-slider">
                  <Feedback title={''} content={''} />
                </SwiperSlide>
                <SwiperSlide className="home-slider">
                  <Feedback title={''} content={''} />
                </SwiperSlide>
                <SwiperSlide className="home-slider">
                  <Feedback title={''} content={''} />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial
