import React  from 'react';

export default function MobailMenu ({togler}) {
    let toglerMenu;
    if (togler){
        toglerMenu='block'
    } else{
        toglerMenu='hidden'   
    }
    return (
        <div className='w-[310px] bg-navy-blue z-10 absolute lg:top-22 lg:right-0 xs:top-14 right-[-320px]'>
        <nav className={toglerMenu}>
            <ul className='flex flex-col my-[30px]  gap-2'>
                <li className='border-2 rounded-[64px] border-main-blue w-[300px]  hover:bg-main-blue hover:duration-300 px-5 py-[13px] z-10'>
                    <a className='text-main-white font-normal text-lg leading-6'>About us</a>
                </li>
                <li className='border-2 rounded-[64px] border-main-blue w-[300px]  hover:bg-main-blue hover:duration-300 px-5 py-[13px] z-10'>
                    <a className='text-main-white font-normal text-lg leading-6'>Brands</a>
                </li>
                <li className='border-2 rounded-[64px] border-main-blue w-[300px]  hover:bg-main-blue hover:duration-300 px-5 py-[13px] z-10'>
                    <a className='text-main-white font-normal text-lg leading-6'>Commissions</a>
                </li>

                <li className='border-2 rounded-[64px] border-main-blue w-[300px]  hover:bg-main-blue hover:duration-300 px-5 py-[13px] z-10'>
                    <a className='text-main-white font-normal text-lg leading-6'>News</a>
                </li>

                <li className='border-2 rounded-[64px] border-main-blue  w-[300px]  hover:bg-main-blue hover:duration-300 px-5 py-[13px] z-10'>
                    <a className='text-main-white font-normal text-lg leading-6'>Contact us</a>
                </li>

                <li className='border-2 rounded-[64px] border-main-blue w-[300px]  hover:bg-main-blue hover:duration-300 px-5 py-[13px] z-10'>
                    <a className='text-main-white font-normal text-lg leading-6'>Careers</a>
                </li>
            </ul>
            <ul className='flex flex-col  gap-2 z-10'>
                <li className='border-2 rounded-[46px] border-main-blue-hover hover:border-main-blue hover:bg-main-blue hover:duration-300 w-[300px] px-5 py-[13px]'>
                    <a className='text-main-white font-normal text-lg leading-6 font-abc'>LOG IN</a>
                </li>

                <li className='border-2 rounded-[46px] border-main-blue-hover hover:border-main-blue hover:bg-main-blue hover:duration-300 w-[300px] px-5 py-[13px]'>
                    <a className='text-main-white font-normal text-lg leading-6 font-abc'>SIGN UP</a>
                </li>
            </ul>
        </nav>
        </div>
    )
    }