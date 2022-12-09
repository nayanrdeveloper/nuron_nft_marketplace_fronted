import Link from "next/link";
import React from "react";
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";
// import walletConnect from "../../walletConnect";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Navbar() {
  const onConnectWallet = () => {
    // walletConnect.connectWallet();
  };
  interface navItemStruct {
    name: string;
    to: string;
  }
  const navItems: navItemStruct[] = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Sell NFT",
      to: "/createnft",
    },
    {
      name: "All NFT",
      to: "/allnft",
    },
    {
      name: "My NFT",
      to: "/mynft",
    },
    {
      name: "Blog Create",
      to: "/create_blog",
    },
    {
      name: "Blog",
      to: "/blogs",
    },
  ];
  return (
    <nav className="flex flex-col md:flex-row justify-between py-3 border-b border-[#ffffff14] backdrop-blur-[9px] p-3 md:p-5">
      <NavLogo />
      <ul className="flex flex-col md:flex-row md:my-auto md:ml-7">
        {navItems.map((item: navItemStruct) => {
          return (
            <span key={item.name}>
              <Link href={item.to}>
                <li className="text-[#acacac] px-4 text-center py-1 cursor-pointer">
                  {item.name}
                </li>
              </Link>
            </span>
          );
        })}
      </ul>
      <div className="flex">
        <ConnectButton />
        {/* <button
          onClick={onConnectWallet}
          className="bg-[#212e48] py-2 px-2 rounded-xl text-white hover:bg-[#00a3ff]"
        >
          Connect Wallet
        </button> */}
      </div>
    </nav>
  );
}

export default Navbar;
