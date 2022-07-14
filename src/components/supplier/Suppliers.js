import React from 'react'
import PropTypes from 'prop-types'
import ItemSupplier from './ItemSupplier'
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
} from 'swiper'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
Suppliers.propTypes = {}

function Suppliers(props) {
  return (
    <>
      <section className="section-tb-padding home-brand1">
        <div className="container">
          <div className="row">
            <div className="col">
              <Swiper
                slidesPerView={6}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 500,
                  disableOnInteraction: false,
                }}
                keyboard={{
                  enabled: true,
                }}
                navigation={true}
                modules={[Autoplay, Keyboard, Pagination, Navigation]}
                className={`brand-carousel`}
              >
                <SwiperSlide className="home-slider">
                  <ItemSupplier img={'home-123/l1.png'} />
                </SwiperSlide>
                <SwiperSlide className="home-slider">
                  <ItemSupplier img={'home-123/l2.png'} />
                </SwiperSlide>
                <SwiperSlide className="home-slider">
                  <ItemSupplier img={'home-123/l3.png'} />
                </SwiperSlide>
                <SwiperSlide className="home-slider">
                  <ItemSupplier img={'home-123/l4.png'} />
                </SwiperSlide>
                <SwiperSlide className="home-slider">
                  <ItemSupplier img={'home-123/l5.png'} />
                </SwiperSlide>
                <SwiperSlide className="home-slider">
                  <ItemSupplier img={'home-123/l6.png'} />
                </SwiperSlide>
                <SwiperSlide className="home-slider">
                  <ItemSupplier img={'home-123/l7.png'} />
                </SwiperSlide>
                <SwiperSlide className="home-slider">
                  <ItemSupplier img={'home-123/l8.png'} />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Suppliers
