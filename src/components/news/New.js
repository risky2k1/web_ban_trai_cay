import React from 'react'
import PropTypes from 'prop-types'
import ItemNew from './ItemNew'
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
New.propTypes = {}

function New(props) {
  return (
    <>
      <section className="section-tb-padding blog1">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section-title">
                <h2>Recent news</h2>
              </div>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                keyboard={{
                  enabled: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className={`home-blog`}
              >
                <SwiperSlide className="home-slider">
                  <ItemNew />
                </SwiperSlide>
                <SwiperSlide className="home-slider">
                  <ItemNew />
                </SwiperSlide>
                <SwiperSlide className="home-slider">
                  <ItemNew />
                </SwiperSlide>
                <SwiperSlide className="home-slider">
                  <ItemNew />
                </SwiperSlide>
                <SwiperSlide className="home-slider">
                  <ItemNew />
                </SwiperSlide>
                <SwiperSlide className="home-slider">
                  <ItemNew />
                </SwiperSlide>
                <SwiperSlide className="home-slider">
                  <ItemNew />
                </SwiperSlide>
              </Swiper>
              <div className="all-blog">
                <a href="blog-style-1-3-grid.html" className="btn btn-style1">
                  View all
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default New
