import Image from "next/image";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons";
import Link from "next/link";

interface socialMediaListStruct {
  icon: IconType;
  url: string;
}

function FooterSocialMedia(socialMedia: socialMediaListStruct) {
  return (
    <Link href={socialMedia.url} target={"_blank"}>
      <div className="rounded-full p-2 text-2xl bg-[#242435] hover:bg-[#00a3ff] hover:text-white cursor-pointer">
        <socialMedia.icon />
      </div>
    </Link>
  );
}

export default FooterSocialMedia;
