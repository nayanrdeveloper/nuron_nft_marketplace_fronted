import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import axios from "axios";
import blogAbi from "../../contractAbi/blogAbi";
import { RotatingLines } from "react-loader-spinner";
import { useSigner } from "wagmi";
import { useProvider } from "wagmi";

function BlogDetail() {
  const router = useRouter();
  const { blogId } = router.query;
  const [blogData, setBlogData] = useState<any>("");
  const [isLoading, setIsLoading] = useState(false);
  const { data: signer, isError } = useSigner();
  const provider = useProvider();
  const getBlogData = async () => {
    setIsLoading(true);
    const blogContract = new ethers.Contract(
      process.env.NEXT_PUBLIC_BLOG_ADDRESS || "",
      blogAbi,
      signer || provider
    );
    const blogData = await blogContract.getBlogById(blogId);
    const meta = await axios.get(blogData._blogUrl);
    const imageUrl = `https://ipfs.io/ipfs/${meta.data.image.substr(7)}`;
    const data = {
      title: blogData._title,
      desc: meta.data.description,
      image: imageUrl,
      category: blogData._category,
      blogId: blogData._blogId.toNumber(),
    };
    setBlogData(data);
    setIsLoading(false);
  };
  useEffect(() => {
    if (blogId) {
      getBlogData();
    }
  }, [blogId]);
  return (
    <div>
      {blogData ? (
        <div className="">
          <span className="text-white text-3xl font-bold">Blog Details</span>
          <div className="flex flex-col gap-x-10 gap-y-4 mt-8">
            <p className="text-white text-3xl font-extrabold">
              {blogData.title}
            </p>
            <time className="text-[#acacac]">10 may, 2021</time>
            <Image
              src={blogData.image}
              alt="design_7"
              height={400}
              width={400}
            />
            <p className="text-[#acacac]">{blogData.desc}</p>
          </div>
        </div>
      ) : (
        <span className="flex justify-center my-auto">
          {" "}
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />{" "}
        </span>
      )}
    </div>
  );
}

export default BlogDetail;
