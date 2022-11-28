import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HeroSection from '../components/HeroSection/HeroSection'
import NFTItems from '../components/NFTCard/NFTItems'
import NFTStep from '../components/NFTStep/NFTStep'
import Slider from '../components/Slider/Slider'

const Home: NextPage = () => {
  return (
    <div>
      <HeroSection />
      <Slider />
      <NFTStep />
      <NFTItems />
   </div>
  )
}

export default Home
