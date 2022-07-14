import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper'
// Import Swiper React components
import './SlideIntro.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import CategoryApi from '../../apis/CategoryApi'
Category.propTypes = {}

function Category(props) {
  const [categoryList, setCategoryList] = useState([])
  useEffect(() => {
    (async () => {
      try {
        const response = await CategoryApi.getAll()
        console.log('ll',response)
        setCategoryList(response)
      } catch (err) {
        console.error(err)
      }
    })()
  },[])
  return (
    <>
      <section class="category-img1 section-t-padding section-b-padding">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="section-title">
                <h2>Shop by category</h2>
              </div>
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                keyboard={{
                  enabled: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper slider home-category owl-carousel owl-theme"
              >
                 {categoryList.map((product) => (
                <SwiperSlide className="home-slider">
                  <div className="items">
                    <div className="h-cate">
                      <div className="c-img">
                        <a href="grid-list.html" className="home-cate-img">
                          <img
                            className="img-fluid"
                            src={product.img}
                            alt="cate-image"
                          />
                          <span className="cat-title">{product.name}</span>
                        </a>
                      </div>
                      <span className="cat-num">{product.count} Items</span>
                    </div>
                  </div>
                </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Category
