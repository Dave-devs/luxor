import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="hidden md:block fixed inset-x-0 w-[80%] mx-auto bg-opacity-70 bg-white p-2 my-4 rounded-full shadow-md z-50">
      <div className="flex justify-between items-center px-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href={"/"}>
            <Image src={"/logo.png"} width={24} height={24} alt="logo" />
          </Link>
          <Link href={"/"}>
            <h1 className="text-2xl font-bold text-black">Luxor</h1>
          </Link>
        </div>
        {/* Navigation */}
        <ul className="flex justify-center space-x-8 text-black">
          <Link href={"#/"}></Link>
          <Link href={"#about"}>About</Link>
          <Link href={"#services"}>Services</Link>
          <Link href={"#gallery"}>Gallery</Link>
          <Link href={"#pricing"}>Pricing</Link>
        </ul>
        {/* Contact Button */}
        <Link href={"#contact"}>
          <button className="hidden md:block px-6 py-2 text-white bg-primary rounded-full">
            Contact Us
          </button>
        </Link>
      </div>
    </nav>
  );
}
