import React, { useEffect } from "react";
import { FaBeer, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface NFTStepStruct{
  step: string;
  title: string;
  desc: string;
  image: string;
}
function NFTStepCard(data: NFTStepStruct) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  })
  return (
    <div className="flex flex-col gap-6 bg-[#24243557] px-3 py-6 rounded-xl hover:-translate-y-2 duration-300" data-aos="fade-down">
      <div className="flex justify-between gap-2">
        <h4 className="text-[#acacac] my-auto text-2xl">STEP-{data.step}</h4>
        <Image
          src={data.image}
          alt="shape"
          width={"100"}
          height={"100"}
          className=""
        />
      </div>

      <h5 className="text-2xl text-white">{data.title}</h5>
      <p className="text-[#acacac]">{data.desc}</p>
      <span className="text-[#acacac]">
        <FaArrowRight />
      </span>
    </div>
  );
}

export default NFTStepCard;
