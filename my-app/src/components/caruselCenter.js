import React from 'react';

import '../index.css';

//import images

import icon2_1 from '../images/M_2_1.svg';
import icon2_2 from '../images/Timer_2_2.svg';
import icon2_3 from '../images/Crown_2_3.svg';
import icon2_4 from '../images/World_2_4.svg';



export default function CaruselCentr() {


  return (
    <>
      <div className='w-[99px] max-h-[1026px] xlg:max-h-[1510px] flex flex-col xlg:flex-row overflow-hidden'>
        <div className='flex-col  animate-centr h-[1272px] content-around '>
          <span className='h-full block'>
            <img src={icon2_1} class='mb-[29px]' alt="image" ></img>
            <img src={icon2_2} class='mb-[29px]' alt="image" ></img>
            <img src={icon2_3} class='mb-[29px]' alt="image" ></img>
            <img src={icon2_4} class='mb-[30px]' alt="image"></img>
            <img src={icon2_1} class='mb-[30px]' alt="image"></img>
            <img src={icon2_2} class='mb-[30px]' alt="image"></img>
            <img src={icon2_3} class='mb-[30px]' alt="image"></img>
            <img src={icon2_4} class='mb-[0px]' alt="image"></img>
          </span>
          <span className='h-full block'>
            <img src={icon2_1} class='mb-[29px]' alt="image"></img>
            <img src={icon2_2} class='mb-[29px]' alt="image"></img>
            <img src={icon2_3} class='mb-[29px]' alt="image"></img>
            <img src={icon2_4} class='mb-[30px]' alt="image"></img>
            <img src={icon2_1} class='mb-[30px]' alt="image"></img>
            <img src={icon2_2} class='mb-[30px]' alt="image"></img>
            <img src={icon2_3} class='mb-[30px]' alt="image"></img>
            <img src={icon2_4} class='mb-[0px]' alt="image"></img>
          </span>
        </div>
      </div>


    </>
  )
}