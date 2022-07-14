import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y,Keyboard } from 'swiper';
// Import Swiper React components
import './SlideIntro.css'
import { Swiper, SwiperSlide } from 'swiper/react';
function SlideIntro(props) {
    return (
        <>
       <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper slider"
      >
        <SwiperSlide className='home-slider'> 
          <div className="items">
            <div className="img-back" style={{backgroundImage: 'url(image/slider2.jpg)'}}>
              <div className="h-s-content slide-c-r">
                <span>Organic indian masala</span>
                <h1>Prod of indian<br />100% pacaging</h1>
                <a href="grid-list.html" className="btn btn-style1">Shop now</a>
              </div>
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide className='home-slider'>
          <div className="items">
            <div className="img-back" style={{backgroundImage: 'url(image/slider3.jpg)'}}>
              <div className="h-s-content slide-c-c">
                <span>Top selling!</span>
                <h1>Fresh for your health</h1>
                <a href="grid-list.html" className="btn btn-style1">Shop now</a>
              </div>
            </div>
          </div>
          </SwiperSlide>
      </Swiper>
        </>
    );
}

export default SlideIntro;