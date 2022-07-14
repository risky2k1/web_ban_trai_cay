import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import { Grid, Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper'
import { useNavigate, useLocation, createSearchParams } from "react-router-dom";
import queryString from "query-string";
import productApi from '../../apis/ProductsApi'
import '../Effect/SlideIntro.css'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'


ListProduct.propTypes = {}

function ListProduct(props) {
  const [productList, setProductList] = useState([])
  // const location = useLocation();
  // const navigate = useNavigate();
  // const a = queryString.parse(location.search);

  useEffect(() => {
    (async () => {
      try {
        const response = await productApi.getAll()
        // console.log(response) 
        // ()console.log(a);
        setProductList(response)
      } catch (err) {
        console.error(err)
      }
    })()
  }, [])
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await productApi.getProductByFilter()
  //       // console.log(response)
  //       setProductList(response)
  //     } catch (err) {
  //       console.error(err)
  //     }
  //   })()
  // }, [])
  function handleChangCategory() {

  }
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        modules={[Grid, Keyboard, Pagination, Navigation]}
        className="mySwiper swiper"
      >
        {productList.map((product) => (
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
              rate={product.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
export default ListProduct
