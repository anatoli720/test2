import React from 'react';

import '../index.css';

//import images
import icon3_1 from '../images/Crown_long.svg';
import icon3_2 from '../images/M_3_2.svg';
import icon3_3 from '../images/Shield_3_3.svg';
import icon3_4 from '../images/Soccer_3_4.svg';
import icon3_6 from '../images/Crown_3_6.svg';

export default function CaruselRight() {
  return (
    <>
      <div className='w-[99px] max-h-[1026px] xlg:max-h-[1510px] flex flex-col xlg:flex-row overflow-hidden '>
        <div className='flex-col  animate-wiggle h-[1790px] content-around '>
          <span className='h-full block'>
            <img src={icon3_1} className='mb-[30px]' alt="image"></img>
            <img src={icon3_2} className='mb-[30px]' alt="image"></img>
            <img src={icon3_3} className='mb-[30px]' alt="image"></img>
            <img src={icon3_4} className='mb-[30px]' alt="image"></img>
            <img src={icon3_3} className='mb-[30px]' alt="image"></img>
            <img src={icon3_6} className='mb-[30px]' alt="image"></img>
            <img src={icon3_1} className='mb-[30px]' alt="image"></img>
            <img src={icon3_2} className='mb-[30px]' alt="image"></img>
            <img src={icon3_3} className='mb-[30px]' alt="image"></img>
            <img src={icon3_4} className='mb-[30px]' alt="image"></img>
            <img src={icon3_3} className='mb-[30px]' alt="image"></img>
            <img src={icon3_6} className='mb-[0px]' alt="image"></img>
          </span>
          <span className='h-full block'>
            <img src={icon3_1} className='mb-[30px]' alt="image"></img>
            <img src={icon3_2} className='mb-[30px]' alt="image"></img>
            <img src={icon3_3} className='mb-[30px]' alt="image"></img>
            <img src={icon3_4} className='mb-[30px]' alt="image"></img>
            <img src={icon3_3} className='mb-[30px]' alt="image"></img>
            <img src={icon3_6} className='mb-[30px]' alt="image"></img>
            <img src={icon3_1} className='mb-[30px]' alt="image"></img>
            <img src={icon3_2} className='mb-[30px]' alt="image"></img>
            <img src={icon3_3} className='mb-[30px]' alt="image"></img>
            <img src={icon3_4} className='mb-[30px]' alt="image"></img>
            <img src={icon3_3} className='mb-[30px]' alt="image"></img>
            <img src={icon3_6} className='mb-[30px]' alt="image"></img>
          </span>
        </div>
      </div>
    </>
  );
}
