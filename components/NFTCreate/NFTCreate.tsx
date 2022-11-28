import React, { useEffect, useState } from "react";
import { FaFileUpload } from "react-icons/fa";
// import { NFTStorage, File } from "nft.storage";
import { ToastContainer, toast } from "react-toastify";
// import connectWallet from "../walletConnect";
// import { ethers } from "ethers";
// import NFTTOkenABI from "../artifacts/contracts/myToken.sol/MyToken.json";
// import NFTMarketplaceABI from "../artifacts/contracts/myNFT.sol/MyNFT.json";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ClipLoader from "react-spinners/ClipLoader";

function NFTCreate() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  interface productStruct {
    name: string;
    price: string;
    desc: string;
    imageUrl: string;
  }
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    desc: "",
    imageUrl: "",
  });
  const [NFTImage, setNFTImage] = useState();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onchangeProductInput = (event: any) => {
    setProductData({
      ...productData,
      [event.target.name]: event.target.value,
    });
  };

  // const onSubmitProduct = async (event) => {
  //   event.preventDefault();
  //   setIsLoading(true);
  //   console.log("Start");
  //   console.log(event.target.file.files[0]);
  //   const imageFile = event.target.file.files[0];
  //   if (!productData.name || !productData.desc || !productData.price) {
  //     toast.error("All Fields are required!!!", {
  //       position: "top-right",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   } else {
  //     const nftStorage = new NFTStorage({
  //       token: process.env.NEXT_PUBLIC_NFT_STORAGE_KEY,
  //     });
  //     const link = await nftStorage.store({
  //       image: imageFile,
  //       name: productData.name,
  //       description: productData.desc,
  //       price: productData.price,
  //     });
  //     const ipfsURL = `https://ipfs.io/ipfs/${link.url.substr(7)}`;
  //     connectWallet.connectWallet();
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = await provider.getSigner();

  //     let tokenContract = new ethers.Contract(
  //       process.env.NEXT_PUBLIC_NFTTOKN_CONTRACT_ADDRESS,
  //       NFTTOkenABI.abi,
  //       signer
  //     );
  //     let traction = await tokenContract.createToken(ipfsURL);
  //     let tx = await traction.wait();
  //     let event = tx.events[0];
  //     let value = event.args[2];
  //     let tokenId = value.toNumber();

  //     const NFTMarketplaceContract = new ethers.Contract(
  //       process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT_ADDRESS,
  //       NFTMarketplaceABI.abi,
  //       signer
  //     );
  //     const price = await ethers.utils.parseUnits(productData.price, "ether");
  //     let listingPrice = await NFTMarketplaceContract.getListedPrice();
  //     let newlistingPrice = await listingPrice.toString();
  //     let NFTTranction = await NFTMarketplaceContract.createToken(
  //       process.env.NEXT_PUBLIC_NFTTOKN_CONTRACT_ADDRESS,
  //       tokenId,
  //       price,
  //       {
  //         value: newlistingPrice,
  //       }
  //     );
  //     await NFTTranction.wait();
  //     setIsLoading(false);
  //     toast.success("Product are Upload Successfully", {
  //       position: "top-right",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //     console.log(NFTTranction);
  //   }
  // };
  return (
    <div>
      <ToastContainer theme="dark" />
      <div className="">
        <span className="text-white text-3xl font-bold">Create New NFT</span>
        <form>
          <div className="flex gap-x-10 mt-8">
            <div className="justify-center my-auto" data-aos="fade-right">
              <p className="text-white">Upload file</p>
              <div className="py-6 mt-7 flex justify-center text-center my-auto flex-col border-2 border-dashed border-[#575767]">
                <input
                  type="file"
                  name="file"
                  className="w-full h-full opacity-0"
                />
                <FaFileUpload className="mx-auto text-3xl text-[#00a3ff]" />
                <p className="text-[#acacac]">Choose a File</p>
                <p className="text-[#acacac]">PNG, WEBP, MP4, or MP3.</p>
                <p className="text-[#acacac]">MAx 1Gb.</p>
              </div>
            </div>
            <div
              className="flex flex-col border border-[#ffffff14] p-10 bg-[#24243557] rounded-lg gap-4 w-full"
              data-aos="fade-left"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[#acacac]">
                  Product Name
                </label>
                <input
                  type="text"
                  onChange={onchangeProductInput}
                  name="name"
                  value={productData.name}
                  required
                  id="name"
                  placeholder=" e.g. Digital Awesome NFT"
                  className="h-12 w-full bg-[#242435] border-2 border-[#ffffff14] text-white rounded-md focus:border focus:border-[#00a3ff]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="desc" className="text-[#acacac]">
                  Description
                </label>
                <textarea
                  id="desc"
                  onChange={onchangeProductInput}
                  value={productData.desc}
                  name="desc"
                  placeholder=" Enter NFT Description"
                  className="h-36 w-full bg-[#242435] border-2 border-[#ffffff14] text-white rounded-md focus:border focus:border-[#00a3ff]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="price" className="text-[#acacac]">
                  Product Price
                </label>
                <input
                  type="number"
                  onChange={onchangeProductInput}
                  value={productData.price}
                  id="price"
                  name="price"
                  placeholder=" e.g. 20"
                  className="h-12 w-full bg-[#242435] border-2 border-[#ffffff14] text-white rounded-md focus:border focus:border-[#00a3ff]"
                />
              </div>
              <button
                // onClick={onSubmitProduct}
                type="submit"
                className={`flex py-4 px-6 bg-[#00a3ff] hover:bg-[#212e48] text-white rounded-md ${
                  isLoading ? "w-44" : "w-36"
                }`}
              >
                {isLoading && <ClipLoader color="white" className="mr-2" />}
                Submit Item
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NFTCreate;
