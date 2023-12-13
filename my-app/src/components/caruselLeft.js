import React from 'react';
import '../index.css';

import img1_1 from '../images/Shield_1_1.svg';
import img1_2 from '../images/$_1_2.svg';
import img1_3 from '../images/Soccer_1_3.svg';
import img1_4 from '../images/M_1_4.svg';

export default function CaruselLeft() {


  return (
    <>
      <div className='w-[99px] max-h-[1026px] xlg:max-h-[1510px] flex flex-col xlg:flex-row overflow-hidden opacity-20'>
        <div className='flex-col  animate-wiggle h-[1272px] content-around '>
          <span className='h-full block'>
            <img src={img1_1} className='mb-[30px]' ></img>
            <img src={img1_2} className='mb-[30px]' ></img>
            <img src={img1_3} className='mb-[30px]' ></img>
            <img src={img1_4} className='mb-[30px]' ></img>
            <img src={img1_1} className='mb-[30px]' ></img>
            <img src={img1_2} className='mb-[30px]' ></img>
            <img src={img1_3} className='mb-[30px]' ></img>
            <img src={img1_4} className='mb-[0px]' ></img>
          </span>
          <span className='h-full block'>
            <img src={img1_1} className='mb-[30px]' alt="image"></img>
            <img src={img1_2} className='mb-[30px]' alt="image"></img>
            <img src={img1_3} className='mb-[30px]' alt="image"></img>
            <img src={img1_4} className='mb-[30px]' alt="image"></img>
            <img src={img1_1} className='mb-[30px]' alt="image"></img>
            <img src={img1_2} className='mb-[30px]' alt="image"></img>
            <img src={img1_3} className='mb-[30px]' alt="image"></img>
            <img src={img1_4} className='mb-[0px]' alt="image"></img>
          </span>
        </div>
      </div>
  

    </>
  )
}
