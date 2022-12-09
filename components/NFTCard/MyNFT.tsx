import React, { useEffect, useState } from "react";
import NFTCard from "../NFTCard/NFTCard";
import { ethers } from "ethers";
import myTokenAbi from "../../contractAbi/myTokenAbi";
import myNFTAbi from "../../contractAbi/myNFT";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useSigner } from "wagmi";
import { useProvider } from "wagmi";
import { RotatingLines } from "react-loader-spinner";

function MyNFT() {
  const { data: signer, isError } = useSigner();
  const provider = useProvider();
  const [NFTData, setNFTData] = useState<any>();
  const NFTCardList = [
    {
      title: "Orthogon#720",
      price: "0.668",
      likes: "028",
      image: "/design2.webp",
      tokenId: 5,
    },
    {
      title: "Orthogon#710",
      price: "0.668",
      likes: "253",
      image: "/design1.webp",
      tokenId: 6,
    },
    {
      title: "Orthogon#750",
      price: "0.668",
      likes: "120",
      image: "/design3.webp",
      tokenId: 7,
    },
    {
      title: "Orthogon#770",
      price: "0.668",
      likes: "207",
      image: "/design4.webp",
      tokenId: 8,
    },
    {
      title: "Orthogon#770",
      price: "0.668",
      likes: "207",
      image: "/design7.jpg",
      tokenId: 9,
    },
    {
      title: "Orthogon#770",
      price: "0.668",
      likes: "207",
      image: "/design8.webp",
      tokenId: 10,
    },
    {
      title: "Orthogon#770",
      price: "0.668",
      likes: "207",
      image: "/design10.jpg",
      tokenId: 11,
    },
  ];
  const getMyAllNFT = async () => {
    try {
      console.log(window.ethereum);

      let marketplaceContract = new ethers.Contract(
        process.env.NEXT_PUBLIC_MYNFT_ADDRESS || "",
        myNFTAbi,
        signer || provider
      );
      let tokenContract = new ethers.Contract(
        process.env.NEXT_PUBLIC_MYTOKEN_ADDRESS || "",
        myTokenAbi,
        signer || provider
      );
      const data = await marketplaceContract.getMyNFT();
      let newItems: any = await Promise.all(
        data.map(async (d: any) => {
          console.log(d);
          const tokenUri = await tokenContract.tokenURI(d._tokenId);
          console.log(tokenUri);
          const meta = await axios.get(tokenUri);
          const price = ethers.utils.formatUnits(d.price.toString(), "ether");
          const imageUrl = `https://ipfs.io/ipfs/${meta.data.image.substr(7)}`;
          return {
            price,
            tokenId: d._tokenId.toNumber(),
            seller: d.seller,
            owner: d.owner,
            image: imageUrl,
            title: meta.data.name,
            desc: meta.data.description,
          };
          // const tokenUri = await contract.tokenURI(d.tokenId);
        })
      );
      setNFTData(newItems);
      console.log(newItems);
    } catch (error) {
      toast.error(
        "Something to wrong so please check your wallet are connected",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  };
  useEffect(() => {
    getMyAllNFT();
  }, []);
  return (
    <div className="">
      <span className="text-white text-3xl font-bold">Our Product</span>
      <div>
        <div className={`grid ${NFTData ? "grid-cols-1 md:grid-cols-3" : ""} gap-3 md:gap-9 mt-8`}>
        {NFTData ? (
            NFTData.map((NFTCardData: any) => {
              return <NFTCard key={NFTCardData.tokenId} {...NFTCardData} />;
            })
          ) : (
            <span className="flex justify-center my-auto">
              {" "}
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
              />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyNFT;
