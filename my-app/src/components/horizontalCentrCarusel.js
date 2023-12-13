import React from 'react';
import '../index.css';

//import images

import icon4_1 from '../images/M_2_1.svg';
import icon4_2 from '../images/Timer_2_2.svg';
import icon4_3 from '../images/Crown_2_3.svg';
import icon4_4 from '../images/WorldHorizontal.svg';

export default function HorizontalCentrCarusel (){
    return (
        <>
          <div className='h-[99px] xs:h-[49px] w-full  overflow-hidden  '>
            <div className='flex animate-centrHorizontal w-[2542px] content-around '>
              <span className='w-full flex gap-[30px] xs:gap-[15px]'>
                <img src={icon4_1} className='xs:h-[49px]'  alt="image" ></img>
                <img src={icon4_2} className='xs:h-[49px]' alt="image" ></img>
                <img src={icon4_3} className='xs:h-[49px]' alt="image" ></img>
                <img src={icon4_4} className='h-[99px] xs:h-[49px]'  alt="image"></img>
                <img src={icon4_1} className='xs:h-[49px]' alt="image"></img>
                <img src={icon4_2} className='xs:h-[49px]' alt="image"></img>
                <img src={icon4_3} className='xs:h-[49px]' alt="image"></img>
                <img src={icon4_4} className='h-[99px] xs:h-[49px]' alt="image"></img>
                <img src={icon4_1} className='xs:h-[49px]' alt="image" ></img>
                <img src={icon4_2} className='xs:h-[49px]' alt="image" ></img>
                <img src={icon4_3} className='xs:h-[49px]' alt="image" ></img>
                <img src={icon4_4} className='h-[99px] xs:h-[49px]'  alt="image"></img>
                <img src={icon4_1} className='xs:h-[49px]' alt="image"></img>
                <img src={icon4_2} className='xs:h-[49px]' alt="image"></img>
                <img src={icon4_3} className='xs:h-[49px]' alt="image"></img>
                <img src={icon4_4} className='h-[99px] xs:h-[49px]' alt="image"></img>
              </span>
r            <span className='w-full flex gap-[30px] xs:gap-[15px]'>
                <img src={icon4_1} className='ml-[2px] xs:h-[49px]' alt="image" ></img>
                <img src={icon4_2} className='xs:h-[49px]' alt="image" ></img>
                <img src={icon4_3} className='xs:h-[49px]' alt="image" ></img>
                <img src={icon4_4} className='h-[99px] xs:h-[49px]'  alt="image"></img>
                <img src={icon4_1} className='xs:h-[49px]' alt="image"></img>
                <img src={icon4_2} className='xs:h-[49px]' alt="image"></img>
                <img src={icon4_3} className='xs:h-[49px]' alt="image"></img>
                <img src={icon4_4} className='h-[99px] xs:h-[49px]' alt="image"></img>
                <img src={icon4_1} className='xs:h-[49px]' alt="image" ></img>
                <img src={icon4_2} className='xs:h-[49px]' alt="image" ></img>
                <img src={icon4_3} className='xs:h-[49px]' alt="image" ></img>
                <img src={icon4_4} className='h-[99px] xs:h-[49px]'  alt="image"></img>
                <img src={icon4_1} className='xs:h-[49px]' alt="image"></img>
                <img src={icon4_2} className='xs:h-[49px]' alt="image"></img>
                <img src={icon4_3} className='xs:h-[49px]' alt="image"></img>
                <img src={icon4_4} className='h-[99px] xs:h-[49px]' alt="image"></img>
              </span>
r             
            </div>
          </div>
    
    
        </>
    )
}