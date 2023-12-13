import React, { useState } from 'react';

import CaruselLeft from './components/caruselLeft';
import CaruselCentr from './components/caruselCenter';
import CaruselRight from './components/caruselRight';
import Blog from './components/blog';
import MobailMenu from './components/mobailMenu';
import HorizontalCentrCarusel from './components/horizontalCentrCarusel';
import HorizontalTopCarusel from './components/horizontalTopCarusel';
import HorizontalBottomCarusel from './components/horizontalBottomCarucel';

import twitter from './images/Twitter.png';
import facebook from './images/Facebook.png';
import instagram from './images/Instagram.png';
import linkedln from './images/LinkedIn.png';
import youtube from './images/YouTube.png';
import tiktok from './images/TikTok.png';
import telegram from './images/Telegram.png';
import vk from './images/VK.png';
import logo_horizontal from './images/logo_horizontal.png';
import logo_horizontalLitl from './images/logo_horizontalLitl.png';
import dotLight from './images/Dot Light.svg';

import './index.css'

export default function App() {
    const [togler, setTogler] = useState(false)
    const [leng, setLeng] = useState(false)

    const clickLeng=()=>{
         return leng?'RU':'EN'
        }

    return (<div className='flex-col flex items-center box-border  bg-navy-blue xs:px-[10px] relative overflow-hidden min-h-[1265px] max-w-[1920px]'>

        <div className='max-w-[1640px] mx-auto w-full'>
            <header className='flex items-center box-border  justify-around max-w-[1640px] h-24 lg:justify-between xs:h-14  border-4 sm:border-2 rounded-[64px]  xs:mb-[70px] border-main-blue bg-navy-blue'>
                <img src={logo_horizontal} className='h-8 w-72 xs:hidden pl-2' alt="image"></img>
                <img src={logo_horizontalLitl} className='hidden xs:block h-8 pl-2' alt="image"></img>
                {/* Menu */}
                <nav >
                    <ul className='flex gap-x-8 leading-5'>
                        <li className='text-base font-normal text-main-white leading-5 lg:hidden z-10'><a href='#'>About us</a></li>
                        <li className='text-base font-normal text-main-white leading-5 lg:hidden z-10'><a href='#'>Brands</a></li>
                        <li className='text-base font-normal text-main-white leading-5 lg:hidden z-10'><a href='#'>Commissions</a></li>
                        <li className='text-base font-normal text-main-white leading-5 lg:hidden z-10'><a href='#'>News</a></li>
                        <li className='text-base font-normal text-main-white leading-5 lg:hidden z-10'><a href='#'>Contact</a> us</li>
                        <li className='text-base font-normal text-main-white leading-5 lg:hidden z-10'><a href='#'>Careers</a></li>
                    </ul>
                </nav>

                {/* Actions */}
                <div className='flex gap-3.5 h-12 items-center'>
                    <a href='#' onClick={()=>setLeng(!leng)}  className='flex items-center border border-main-blue rounded-full p-3.5 sm:p-2.5 hover:bg-main-blue hover:duration-300 duration-300 z-50'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clip-path="url(#clip0_10781_272)">
                                <path d="M14.1692 3.71888C12.7989 1.84023 11.0012 0.775068 8.6355 0.5C9.74223 1.7817 10.5035 3.16875 10.9895 4.71966C12.0962 4.49141 13.1444 4.19294 14.1692 3.71888Z" fill="#9DADF2" />
                                <path d="M4.25006 5.52288C3.83001 5.41303 3.42197 5.30631 3.01989 5.18202C2.66058 5.06606 2.30606 4.93336 1.95173 4.80073C1.7517 4.72586 1.55173 4.65102 1.35101 4.57922C0.162292 6.66856 0.273551 9.63579 1.34515 11.3857C1.94399 11.1975 2.53794 11.0093 3.13731 10.8194L3.1384 10.8191C3.67559 10.6489 4.21745 10.4772 4.77076 10.303C4.45455 8.78132 4.4604 7.21285 4.77661 5.66193C4.59874 5.61407 4.42337 5.5682 4.25006 5.52288Z" fill="#9DADF2" />
                                <path d="M12.9458 5.15847C12.3749 5.33989 11.8035 5.52147 11.2297 5.70289C11.5459 7.23625 11.5342 8.79301 11.2297 10.2971C12.3891 10.6658 13.5193 11.0228 14.6612 11.3798C15.7855 9.45435 15.7737 6.52809 14.6612 4.61432C14.0874 4.7957 13.5166 4.97709 12.9458 5.15847Z" fill="#9DADF2" />
                                <path d="M5.7194 10.2269C5.39148 8.74034 5.40319 7.28307 5.70183 5.82579C5.94061 5.83983 6.17518 5.8565 6.40679 5.87296C6.9476 5.91139 7.47255 5.94869 7.99728 5.94869C8.52199 5.94869 9.0467 5.91141 9.58748 5.87298C9.81907 5.85652 10.054 5.83983 10.2927 5.82579C10.6148 7.25966 10.6031 8.72864 10.2869 10.221C8.75267 10.022 7.2536 10.0103 5.7194 10.2269Z" fill="#9DADF2" />
                                <path d="M14.1693 12.2753C12.8107 14.1539 11.0072 15.2132 8.64145 15.5C9.73062 14.2242 10.5094 12.843 10.9837 11.2862C12.0846 11.4969 13.1269 11.8129 14.1693 12.2753Z" fill="#9DADF2" />
                                <path d="M7.35894 0.5C4.99322 0.780921 3.18965 1.84608 1.78428 3.78326C2.88515 4.12271 3.92162 4.44459 4.99322 4.77819C5.49096 3.15704 6.26391 1.7817 7.35894 0.5Z" fill="#9DADF2" />
                                <path d="M7.35894 15.5C4.99907 15.2191 3.20136 14.1598 1.78428 12.2167C2.13525 12.1085 2.47968 12.0021 2.82079 11.8967L2.82228 11.8962C3.55057 11.6711 4.26377 11.4508 4.99322 11.2277C5.49096 12.8312 6.2522 14.2183 7.35894 15.5Z" fill="#9DADF2" />
                                <path d="M10.0408 4.86013C9.60158 3.48479 8.92817 2.28503 7.99711 1.19646C7.06019 2.30258 6.38093 3.4965 5.95931 4.86013C7.33541 5.04156 8.67052 5.04741 10.0408 4.86013Z" fill="#9DADF2" />
                                <path d="M8.00297 14.8035C7.07191 13.7208 6.39849 12.521 5.95931 11.1457C7.3237 10.9526 8.65881 10.9584 10.0466 11.1399C9.60744 12.5093 8.93403 13.7033 8.00297 14.8035Z" fill="#9DADF2" />
                            </g>
                            <defs>
                                <clipPath id="clip0_10781_272">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span className='text-base font-normal text-main-white pl-2 sm:hidden z-10' >{clickLeng()}</span></a>

                    <a href='#' className='mx-3.5text-base font-normal text-main-white border border-main-blue rounded-full p-3.5  hover:bg-main-blue hover:duration-300 duration-300 lg:hidden z-10'>LOG IN</a>
                    <a href='#' className=' text-base font-normal text-main-white border border-main-blue rounded-full p-3.5 hover:bg-main-blue hover:duration-300 duration-300 lg:hidden z-10'>SIGN UP</a>

                    {/* Burger */}
                    <button onClick={() => setTogler(!togler)}
                        className={`${togler ? 'active' : ''} 
                  group hidden relative h-7 w-7 mr-5 lg:block z-10`}

                    >
                        <span className='absolute h-[1px] top-0 w-full bg-main-white duration-100 group-[.active]:translate-y-3.5 group-[.active]:rotate-45 left-0 group-[.active]:duration-100'></span>
                        <span className='absolute h-[1px] top-1/2 w-full bg-main-white duration-100 group-[.active]:opacity-0 left-0 group-[.active]:duration-100'></span>
                        <span className='absolute h-[1px] bottom-0 w-full bg-main-white duration-100 group-[.active]:-translate-y-[13px] group-[.active]:-rotate-45 left-0 group-[.active]:duration-100'></span>
                    </button>

                </div>
            </header>

            {/* Menu mobail*/}
            <MobailMenu togler={togler} />

            {/*Banner*/}
            <main className='flex w-full justify-between xlg:flex-col xlg:items-center '>
                <div className=' flex-col flex justify-center pr-20 xlg:p-0 xlg:items-center '>
                    <h1 className='text-main-white text-8xl font-medium leading-[96px] xs:text-[46px] xs:leading-[50px]'>HOUSE OF</h1>
                    <h1 className='text-main-blue text-8xl font-medium leading-[96px] mb-6 xs:text-[46px] xs:leading-[50px]'>GAMBLING</h1>
                    <p className='text-transp-white-white-60 text-[32px] leading-8 font-medium mb-12 xs:text-xl xs:leading-[26px] xs:text-center xs:mb-6 '>Raise your ROI with direct advertiser</p>
                    <button className=' text-main-white max-w-[393px] xs:w-[300px] py-5 px-[72px] xs:py-[15px] xs:px-4 bg-main-blue rounded-full uppercase text-2xl xs:text-lg leading-8 font-semibold mb-[66px] xlg:mb-8 hover:bg-main-blue hover:duration-300 duration-300 '>Become a Partner</button>
                </div>

                {/*Carusel*/}
                <div className='flex gap-4 relative xlg:rotate-[-90deg] xlg:hidden'>
                    <CaruselLeft />
                    <CaruselCentr />
                    <CaruselRight />
                    <div className='absolute h-full w-full bg-gradient-to-t from-[rgb(17,10,29,70)] to-[rgb(17,10,29,0)]'></div>
                </div>
                {/*Carusel Mobail*/}
                <div className='hidden w-full xlg:flex flex-col gap-4'>
                    <HorizontalTopCarusel />
                    <HorizontalCentrCarusel />
                    <HorizontalBottomCarusel />
                </div>
                {/*Blog*/}
                <div className='h-[800px] pt-[140px] flex flex-col items-center xlg:pt-[32px] '>
                    <h4 className='text-main-white text-[40px] font-semibold leading-10 mb-6 xs:text-[32px] xs:mb-[18px]'>BLOG</h4>
                    <Blog />
                </div>
                {/*glows*/}
                <div className='flex-wrap  w-[574px] h-[574px]  absolute bottom-0 left-[80%] rounded-[574px] bg-gradient-to-l from-[#478BF9] from-[0%]  to-[#9DADF2] to-[100%] opacity-70 rotate-[256deg] blur-[325px] '></div>
                <img className='absolute left-0 top-0 xlg:top-[-10%] xs:top-[0%] ' src={dotLight} alt="image"></img>

            </main>
        </div>

        <footer className='min-h-[130px] w-full border-4 border-main-blue rounded-t-[64px] 
        flex justify-between pb-6 lg:flex-col bottom-0  bg-dep-blue'>

            <ul className='flex gap-10 ml-[140px] items-end mt-5 lg:ml-5 xs:flex-col xs:gap-0 xs:items-start'>
                <li className='text-base font-normal text-main-white leading-5 relative after:absolute after:h-[1px] after:w-full after:left-0 after:bottom-0 after:bg-main-blue after:duration-300 duration-300 hover:text-main-blue  after:scale-0 hover:after:scale-100 after:transition-transform'><a href='#'>Terms & Conditions</a></li>
                <li className='text-base font-normal text-main-white leading-5 relative after:absolute after:h-[1px] after:w-full after:left-0 after:bottom-0 after:bg-main-blue after:duration-300 duration-300 hover:text-main-blue  after:scale-0 hover:after:scale-100 after:transition-transform'><a href='#'>Cookies</a></li>
                <li className='text-base font-normal text-main-white leading-5 relative after:absolute after:h-[1px] after:w-full after:left-0 after:bottom-0 after:bg-main-blue after:duration-300 duration-300 hover:text-main-blue  after:scale-0 hover:after:scale-100 after:transition-transform'><a href='#'>Contacts</a></li>
                <li className='text-base font-normal text-main-white leading-5 relative after:absolute after:h-[1px] after:w-full after:left-0 after:bottom-0 after:bg-main-blue after:duration-300 duration-300 hover:text-main-blue  after:scale-0 hover:after:scale-100 after:transition-transform'><a href='#'>Careers</a></li>
                <li className='text-base font-normal text-main-white leading-5 relative after:absolute after:h-[1px] after:w-full after:left-0 after:bottom-0 after:bg-main-blue after:duration-300 duration-300 hover:text-main-blue  after:scale-0 hover:after:scale-100 after:transition-transform'><a href='#'>Brand Guide</a></li>
            </ul>
            <div className='mr-[140px] ml-5 xs:mr-0'>
                <div className='text-base font-normal text-main-white leading-5 text-right mt-10 mb-3.5 lg:text-left'>Our social media:</div>
                <ul className='flex gap-2'>
                    <li className="bg-vector w-8 h-8 bg-no-repeat bg-contain  hover:bg-vector-grad  hover:bg-no-repeat hover:bg-contain flex justify-center items-center duration-200 hover:duration-200"><a href='#'><img src={twitter} alt="image"></img></a></li>
                    <li className="bg-vector w-8 h-8 bg-no-repeat bg-contain  hover:bg-vector-grad  hover:bg-no-repeat hover:bg-contain flex justify-center items-center duration-200 hover:duration-200"><a href='#'><img src={facebook} alt="image"></img></a></li>
                    <li className="bg-vector w-8 h-8 bg-no-repeat bg-contain  hover:bg-vector-grad  hover:bg-no-repeat hover:bg-contain flex justify-center items-center duration-200 hover:duration-200"><a href='#'><img src={instagram} alt="image"></img></a></li>
                    <li className="bg-vector w-8 h-8 bg-no-repeat bg-contain  hover:bg-vector-grad  hover:bg-no-repeat hover:bg-contain flex justify-center items-center duration-200 hover:duration-200"><a href='#'><img src={linkedln} alt="image"></img></a></li>
                    <li className="bg-vector w-8 h-8 bg-no-repeat bg-contain  hover:bg-vector-grad  hover:bg-no-repeat hover:bg-contain flex justify-center items-center duration-200 hover:duration-200"><a href='#'><img src={youtube} alt="image"></img></a></li>
                    <li className="bg-vector w-8 h-8 bg-no-repeat bg-contain  hover:bg-vector-grad  hover:bg-no-repeat hover:bg-contain flex justify-center items-center duration-200 hover:duration-200"><a href='#'><img src={tiktok} alt="image"></img></a></li>
                    <li className="bg-vector w-8 h-8 bg-no-repeat bg-contain  hover:bg-vector-grad  hover:bg-no-repeat hover:bg-contain flex justify-center items-center duration-200 hover:duration-200"><a href='#'><img src={telegram} alt="image"></img></a></li>
                    <li className="bg-vector w-8 h-8 bg-no-repeat bg-contain  hover:bg-vector-grad  hover:bg-no-repeat hover:bg-contain flex justify-center items-center duration-200 hover:duration-200"><a href='#'><img src={vk} alt="image"></img ></a></li>
                </ul>
            </div>
        </footer>
    </div>
    )
}
