import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

import '../styles.css';

// import required modules
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';

export default function Blog() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={'auto'}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
        
          <a className='element-blog' href='https://www.figma.com/file/MjghGAE9sRj82TFoBd95R6/Untitled?type=design&node-id=0-1&mode=design&t=mvFfCI01LoEQQcvX-0'>
            <p className='text-blog'>
              Payment methods: Skrill, Neteller, webmoney, Bank transfer
            </p>
            <span className='blog-date'>10.02.2023</span>
          </a>
          <div className='element-blog'>
            <p className='text-blog'>
              Payment methods: Skrill, Neteller, webmoney, Bank transfer
            </p>
            <span className='blog-date'>10.02.2023</span>
          </div>
          <div className='element-blog'>
            <p className='text-blog'>
              Payment methods: Skrill, Neteller, webmoney, Bank transfer
            </p>
            <span className='blog-date'>10.02.2023</span>
          </div>
          <div className='element-blog'>
            <p className='text-blog'>
              Payment methods: Skrill, Neteller, webmoney, Bank transfer
            </p>
            <span className='blog-date'>10.02.2023</span>
          </div>
          <div className='element-blog'>
            <p className='text-blog'>
              Payment methods: Skrill, Neteller, webmoney, Bank transfer
            </p>
            <span className='blog-date'>10.02.2023</span>
          </div>  
        </SwiperSlide>
      </Swiper>
    </>
  );
}
