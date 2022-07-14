import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Product from '../products/Product'
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import productApi from '../../apis/ProductsApi'

TrendProduct.propTypes = {}

function TrendProduct(props) {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    (async () => {
      try {
        const response = await productApi.getAll()
        console.log(response)
        setProductList(response.filter((item) => item.rating / 20 > 4))
      } catch (err) {
        console.error(err)
      }
    })()
  }, [])
  return (
    <>
      <section className="h-t-products1 section-t-padding section-b-padding">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section-title">
                <h2>Trending products</h2>
              </div>
              <div className="trending-products owl-carousel owl-theme">
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
                  {productList.map((product) => product.rating / 20 > 4 ? (
                    <SwiperSlide className="home-slider">
                      <Product
                        key={product.id}
                        class="items"
                        firstImg={product.img}
                        secondImg={product.img2}
                        weight={product.weight}
                        name={product.name}
                        new={true}
                        newPrice={product.price}
                        oldPrice={''}
                        rate={product.rating / 20}
                      />
                    </SwiperSlide>
                  ) : null)}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TrendProduct
