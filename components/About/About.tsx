import Link from "next/link";
import React, { useEffect } from "react";
import StatisticsCard from "../StatisticsCard/StatisticsCard";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  interface staticsStruct {
    count: string;
    title: string;
  }
  const statisticsList: staticsStruct[] = [
    {
      count: "100",
      title: "Nuron All NFTs",
    },
    {
      count: "130",
      title: "All Creators",
    },
    {
      count: "507+",
      title: "Nuron Earning",
    },
    {
      count: "130",
      title: "Level One Seller",
    },
  ];
  return (
    <div>
      <div className="flex flex-col">
        <span className="text-white text-3xl font-bold">Direct Teams.</span>
        <span className="text-white text-3xl font-bold">
          For Your Dadicated Dreams
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-9 mt-8">
          <div
            className="p-6 flex flex-col gap-2 md:gap-5 border border-[#ffffff14] rounded-sm bg-[#242435]"
            data-aos="fade-right"
          >
            <h4 className="font-bold text-3xl text-white">Why We Do This</h4>
            <p className="text-[#acacac]">
              NFTs are virtual tokens that represent ownership of something
              inherently distinct and scarce, whether it be a physical or
              digital item, such as artwork, a soundtrack, a collectible, an
              in-game item or real estate. Unlike regular cryptocurrencies like
              bitcoin or fiat money like the U.S.
            </p>
            <button className="inline w-56 bg-[#13131d] py-3 px-1 rounded-xl text-white hover:bg-[#00a3ff]">
              <Link href="/blogs">See Our Blog </Link>
            </button>
          </div>
          <div
            className="p-6 flex flex-col gap-5 border border-[#ffffff14] rounded-sm"
            data-aos="fade-left"
          >
            <h4 className="font-bold text-3xl text-white">
              Helping You Grow In Every Stage.
            </h4>
            <p className="text-[#acacac]">
              NFTs are virtual tokens that represent ownership of something
              inherently distinct and scarce, whether it be a physical or
              digital item, such as artwork, a soundtrack, a collectible, an
              in-game item or real estate. Unlike regular cryptocurrencies like
              bitcoin or fiat money like the U.S.
            </p>
          </div>
          <div className="p-6 flex flex-col" data-aos="fade-right">
            <p className="text-center text-3xl text-white font-bold">
              Create, Sell well and Collect your Wonderful NFTs at Nuron Very
              Fast
            </p>
          </div>
          <div
            className="p-6 flex flex-col gap-5 border border-[#ffffff14] rounded-sm"
            data-aos="fade-left"
          >
            <p className="text-[#acacac]">
              The NFTs is a one-trick pony that climbed the ladders of success
              in recent years. The growth NFTs is tremendous, and according to
              Pymnts.com, the total sales volume of NFTs has nearly crossed $2.5
              billion in the last six months of 2021. Surprisingly, the total
              sales volume of NFTs was $13.7 million in 2020. On comparing both
              the values,
            </p>
          </div>
        </div>
      </div>
      <div className="my-8">
        <p className="text-center text-white text-3xl font-bold">
          Nuron Statistics
        </p>
        <div className="px-5 md:px-40 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto justify-center">
            {statisticsList.map((staticsCardData: staticsStruct) => {
              return (
                <StatisticsCard
                  key={staticsCardData.title}
                  {...staticsCardData}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
