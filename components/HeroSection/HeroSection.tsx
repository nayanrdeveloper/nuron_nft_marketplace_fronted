import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';

function HeroSection() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  })
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 container py-3 md:py-16'>
        <div className='flex flex-col gap-6' data-aos="fade-right">
            <h2 className='text-white text-5xl leading-normal'>Discover Digital Art, Collect and Sell Your Specific NFTs.</h2>
            <p className='text-2xl text-[#acacac]'>Partner with one of the worlds largest retailers to showcase your brand and products.</p>
            <div className='flex space-x-3'>
                <Link href="/connect_wallet"><button className='py-4 px-6 bg-[#00a3ff] hover:bg-[#212e48] text-white rounded-md w-40 duration-300'>Get Started </button></Link>
                <Link href="/createnft"><button className='py-4 px-6 bg-[#212e48] hover:bg-[#00a3ff] text-white rounded-md w-40 duration-300'>Create </button></Link>
            </div>
        </div>
        <div className='' data-aos="fade-left">
            <Image width={500} height={500}  src="/slider12.webp" alt='slider' /> 
        </div>
    </section>
  )
}

export default HeroSection