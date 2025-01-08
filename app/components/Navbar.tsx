import Image from "next/image";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 w-[80%] mx-auto bg-white/70 px-4 py-2 my-4 rounded-full shadow-md z-50 block">
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
        <ul className="hidden lg:flex justify-center space-x-8 text-black">
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
        
        {/* Mobile Navigation Menu */}
        <RiMenu3Fill className="md:hidden text-2xl cursor-pointer" />
      </div>
    </nav>
  );
}
