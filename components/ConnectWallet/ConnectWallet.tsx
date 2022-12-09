import Image from "next/image";
import React from "react";
import { FaChargingStation, FaBox, FaAward, FaSuitcase } from "react-icons/fa";

function ConnectWallet() {
  return (
    <div className="container my-8">
      <div className="">
        <span className="text-white text-3xl font-bold">
          Make Your Payment Easier
        </span>
        <div className="flex flex-col gap-x-10 gap-y-4 mt-8">
          <h3 className="text-2xl font-bold text-white">Connect your wallet</h3>
          <div className="flex flex-col gap-3 md:gap-0 md:flex-row text-[#acacac]">
            <div>
              Connect with one of available wallet providers or create a new
              wallet.
            </div>
            <div>
              We do not own your private keys and cannot access your funds
              without your confirmation.
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="p-3 rounded-md bg-[#24243557]">
              <Image
                src="/connect-01.webp"
                alt="connect-01"
                height={400}
                width={400}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col gap-4 p-8 bg-[#24243557] rounded-md border border-[#ffffff14] hover:-translate-y-2 duration-300">
                  <FaChargingStation className="text-3xl text-[#00a3ff]" />
                  <h3 className="text-white text-2xl">BitCollect</h3>
                  <p className="text-[#acacac]">
                    I throw myself down among the tall.
                  </p>
                </div>
                <div className="flex flex-col gap-4 p-8 bg-[#24243557] rounded-md border border-[#ffffff14] hover:-translate-y-2 duration-300">
                  <FaBox className="text-3xl text-[purple]" />
                  <h3 className="text-white text-2xl">GrasCash</h3>
                  <p className="text-[#acacac]">
                    This is a great deals For cash transfer
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col gap-4 p-8 bg-[#24243557] rounded-md border border-[#ffffff14] hover:-translate-y-2 duration-300">
                  <FaAward className="text-3xl text-[pink]" />
                  <h3 className="text-white text-2xl">Import</h3>
                  <p className="text-[#acacac]">
                    Great oppertunity to reach them.
                  </p>
                </div>
                <div className="flex flex-col gap-4 p-8 bg-[#24243557] rounded-md border border-[#ffffff14] hover:-translate-y-2 duration-300">
                  <FaSuitcase className="text-3xl text-[yellow]" />
                  <h3 className="text-white text-2xl">TiOne</h3>
                  <p className="text-[#acacac]">
                    Built your bigger offers then me
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectWallet;
