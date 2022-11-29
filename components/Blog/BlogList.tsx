import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CgTime } from "react-icons/cg";
import AOS from "aos";
import "aos/dist/aos.css";
import ClipLoader from "react-spinners/ClipLoader";
// import blogABI from "../../artifacts/contracts/blog.sol/Blog.json";
// import { ethers } from "ethers";
// import axios from "axios";
// import connectWallet from "../../walletConnect";
// import Loader from "../Loader/Loader";

function BlogList() {
  const [blogListData, setBlogListData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // getBlogs();
  }, []);

  // const getBlogs = async () => {
  //   setIsLoading(true);
  //   connectWallet.connectWallet();
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = await provider.getSigner();
  //   const blogSmartContract = new ethers.Contract(
  //     process.env.NEXT_PUBLIC_BLOG_CONTRACT_ADDRESS,
  //     blogABI.abi,
  //     signer
  //   );
  //   const blogData = await blogSmartContract.getAllBlogs();
  //   const data = await Promise.all(
  //     blogData.map(async (d) => {
  //       const meta = await axios.get(d._blogUrl);
  //       const blogId = d._blogId.toNumber();
  //       const imageUrl = `https://ipfs.io/ipfs/${meta.data.image.substr(7)}`;
  //       return {
  //         title: d._title,
  //         image: imageUrl,
  //         desc: meta.data.description,
  //         category: d._category,
  //         blogId: blogId,
  //       };
  //     })
  //   );
  //   setBlogListData(data);
  //   setIsLoading(false);
  // };
  const blogList = [
    {
      image: "/design2.webp",
      title: "Ayan Dog GIF",
      category: "NFTs",
      time: "2",
      blogId: 1
    },
    {
      image: "/design1.webp",
      title: "Decentraland and Meta Verse",
      category: "Marketing",
      time: "4",
      blogId: 2
    },
    {
      image: "/design4.webp",
      title: "Beeple Everydays The First 10 Days",
      category: "Design",
      time: "3",
      blogId: 3
    },
    {
      image: "/design7.jpg",
      title: "NFTs are too important for best artists",
      category: "NFTs",
      time: "2",
      blogId: 4
    },
  ];
  return (
    <article>
      <div className="container my-8">
        <div className="">
          <span className="text-white text-3xl font-bold">Blogs</span>
          <div
            className={`grid ${blogList ? "grid-cols-2" : ""} mt-8 gap-5`}
          >
            {blogList ? (
              blogList.map((blogData, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-2 p-5 bg-[#24243557] rounded-md"
                  >
                    <Image
                      src={blogData.image}
                      alt="design2"
                      className="transform transition duration-500 hover:scale-110"
                      width={350}
                      height={350}
                    />
                    <div className="flex justify-between">
                      <span className="text-[#00a3ff]">
                        {blogData.category}
                      </span>
                      <span className="flex gap-1 text-[#acacac]">
                        <CgTime className="my-auto" /> {blogData.time} min Read
                      </span>
                    </div>
                    <Link href={`blogs/${blogData.blogId}`}>
                      <div className="text-white text-2xl cursor-pointer">
                        {blogData.title}{" "}
                      </div>
                    </Link>
                  </div>
                );
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
    </article>
  );
}

export default BlogList;
