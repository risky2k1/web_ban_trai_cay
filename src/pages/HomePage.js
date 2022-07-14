import React from 'react'
import SlideIntro from '../components/Effect/SlideIntro'
import Intro from '../components/Effect/Intro'
import Category from '../components/Effect/Category'
import TrendProduct from '../components/TrenddingProduct/TrendProduct'
import CountDown from '../components/countdown/CountDown'
import ListProduct from '../components/products/ListProduct'
import Testimonial from '../components/intros/Testimonial'
import New from '../components/news/New'
import GetInfo from '../components/intros/GetInfo'
import Suppliers from '../components/supplier/Suppliers'
function HomePage(props) {
  return (
    <>
      <SlideIntro />
      <Intro />
      <Category />
      <TrendProduct />
      <CountDown />
      <ListProduct />
      <Testimonial />
      <New />
      <GetInfo />
      <Suppliers />
    </>
  )
}

export default HomePage
