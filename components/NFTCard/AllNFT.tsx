import React, { useEffect, useState } from "react";
import NFTCard from "../NFTCard/NFTCard";
// import { ethers } from "ethers";
// import NFTTOkenABI from "../artifacts/contracts/myToken.sol/MyToken.json";
// import NFTMarketplaceABI from "../artifacts/contracts/myNFT.sol/MyNFT.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import Loader from "../components/Loader/Loader";
// import connectWallet from "../walletConnect";


function AllNFT() {
    const [NFTData, setNFTData] = useState();
    const NFTCardList = [
        {
          title: "Orthogon#720",
          price: "0.668",
          likes: "028",
          image: "/design2.webp",
          tokenId: 5

        },
        {
          title: "Orthogon#710",
          price: "0.668",
          likes: "253",
          image: "/design1.webp",
          tokenId: 6
        },
        {
          title: "Orthogon#750",
          price: "0.668",
          likes: "120",
          image: "/design3.webp",
          tokenId: 7
        },
        {
          title: "Orthogon#770",
          price: "0.668",
          likes: "207",
          image: "/design4.webp",
          tokenId: 8
        },
        {
          title: "Orthogon#770",
          price: "0.668",
          likes: "207",
          image: "/design7.jpg",
          tokenId: 9
        },
        {
          title: "Orthogon#770",
          price: "0.668",
          likes: "207",
          image: "/design8.webp",
          tokenId: 10
        },
        {
          title: "Orthogon#770",
          price: "0.668",
          likes: "207",
          image: "/design10.jpg",
          tokenId: 11
        },
      ];
    //   const getItems = async () => {
    //     try {
    //       await connectWallet.connectWallet();
    //       console.log(window.ethereum);
    //       const provider = new ethers.providers.Web3Provider(window.ethereum);
    //       const signer = await provider.getSigner();
    //       let marketplaceContract = new ethers.Contract(
    //         process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT_ADDRESS,
    //         NFTMarketplaceABI.abi,
    //         signer
    //       );
    //       let tokenContract = new ethers.Contract(
    //         process.env.NEXT_PUBLIC_NFTTOKN_CONTRACT_ADDRESS,
    //         NFTTOkenABI.abi,
    //         signer
    //       );
    //       const data = await marketplaceContract.getAllNFTs();
    //       let newItems = await Promise.all(
    //         data.map(async (d) => {
    //           console.log(d);
    //           const tokenUri = await tokenContract.tokenURI(d._tokenId);
    //           console.log(tokenUri);
    //           const meta = await axios.get(tokenUri);
    //           const price = ethers.utils.formatUnits(d.price.toString(), "ether");
    //           const imageUrl = `https://ipfs.io/ipfs/${meta.data.image.substr(7)}`;
    //           return {
    //             price,
    //             tokenId: d._tokenId.toNumber(),
    //             seller: d.seller,
    //             owner: d.owner,
    //             image: imageUrl,
    //             name: meta.data.name,
    //             desc: meta.data.description,
    //           };
    //           // const tokenUri = await contract.tokenURI(d.tokenId);
    //         })
    //       );
    //       setNFTData(newItems);
    //       console.log(newItems);
    //     } catch (error) {
    //       toast.error(
    //         "Something to wrong so please check your wallet are connected",
    //         {
    //           position: "top-right",
    //           autoClose: 3000,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //         }
    //       );
    //     }
    //   };
  return (
    <div className="">
        <span className="text-white text-3xl font-bold">Our Product</span>
        <div>
          <div className={`grid ${NFTCardList ? "grid-cols-3" : ""} gap-9 mt-8`}>
            {NFTCardList ? (
              NFTCardList.map((NFTCardData) => {
                return <NFTCard key={NFTCardData.tokenId} {...NFTCardData} />;
              })
            ) : (
              <span className="flex justify-center my-auto">
                {" "}
                {/* <Loader />{" "} */}
              </span>
            )}
          </div>
        </div>
      </div>
  )
}

export default AllNFT