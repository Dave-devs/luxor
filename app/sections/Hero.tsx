import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Hero() {
    return (
        <section
            className="relative h-screen bg-cover bg-center"
            style={{
                backgroundImage: "url('/hero-bg.jpg')",
            }}
        >
            <Navbar />
            {/* Header Text */}
            <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-opacity-90 text-center z-30">
                <h1 className="text-4xl md:text-5xl font-bold">
                    Turning Houses into Homes, <br /> One Design at a Time
                </h1>
                <p className="mt-4 text-sm md:text-lg md:max-w-2xl mx-auto">
                    With every project we undertake, we are committed to turning houses
                    into homes, one design at a time.
                </p>
                {/* Button */}
                <div className="mt-6 flex justify-center">
                    <button className="flex flex-row items-center justify-center px-6 py-3 space-x-2 text-white bg-primary rounded-full">
                        <span>Explore Our Projects</span>
                        <Image src="/arrow.png" width={18} height={18} alt="arrow" />
                    </button>
                </div>
            </div>
        </section>
    );
}
