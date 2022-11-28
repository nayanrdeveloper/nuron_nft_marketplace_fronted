import React from "react";
import Image from "next/image";
import Link from "next/link";

function NavLogo() {
  return (
    <Link href="/">
      <div className="flex space-x-2 cursor-pointer">
        <Image width={120} height={30} src="/logo-white.png" alt="logo" />
      </div>
    </Link>
  );
}

export default NavLogo;
