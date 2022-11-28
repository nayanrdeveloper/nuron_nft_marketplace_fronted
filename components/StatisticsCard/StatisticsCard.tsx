import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface staticsStruct {
  count: string;
  title: string;
}

function StatisticsCard(staticsCardData: staticsStruct) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div data-aos="fade-down">
      <div className="bg-[#24243557] text-center my-auto p-20 rounded-md border border-[#ffffff14]">
        <span className="text-3xl font-bold text-[#00a3ff]">{staticsCardData.count}</span>
        <p className="text-white">{staticsCardData.title}</p>
      </div>
    </div>
  );
}

export default StatisticsCard;
