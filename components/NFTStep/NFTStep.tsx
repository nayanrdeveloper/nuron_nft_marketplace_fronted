import React from 'react'
import NFTStepCard from './NFTStepCard'

function NFTStep() {
    interface NFTStepStruct{
        step: string;
        title: string;
        desc: string;
        image: string;
    }
    const NFTStepList : NFTStepStruct[]= [
        {
            step: '01',
            title: "Set up your Wallet",
            desc: "Powerful features and inclusions, which makes Nuron standout, easily customizable and scalable.",
            image: "/shape-7.png"
        },
        {
            step: '02',
            title: "Create your collection",
            desc: "A great collection of beautiful website templates for your need. Choose the best suitable template.",
            image: "/shape-1.png"
        },
        {
            step: '03',
            title: "Add your NFT's",
            desc: "We've made the template fully responsive, so it looks great on all devices: desktop, tablets and.",
            image: "/shape-5.png"
        },
        {
            step: '04',
            title: "Sell Your NFT's",
            desc: "I throw myself down among the tall grass by the stream as I lie close to the earth NFT's.",
            image: "/shape-6.png"
        },
    ] 
  return (
    <div className='container'>
        <h3 className='text-white text-3xl'>Create and sell your NFTs</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-10 gap-6'>
            {
                NFTStepList.map((NFTStep: NFTStepStruct) => {
                    return <NFTStepCard key={NFTStep.title} {...NFTStep} />
                })
            }
        </div>
        
    </div>
  )
}

export default NFTStep