import React from "react";
import heroImage from "../assets/hero1.png";
import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.jpg";
import Marquee from "react-fast-marquee";
import SummerTips from "../data/summertips.json";

export default function Hero() {
    return (
        <section
            className="relative w-full bg-cover bg-center text-white py-20 flex items-center justify-center" // added 'relative'
            style={{
                backgroundImage: `url(${heroImage.src})`,
                minHeight: "520px",
            }}
        >
            {/* center items */}
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-xl uppercase font-bold tracking-[0.3em] text-orange-500 ">PeakSummer</p>
        <h1 className="my-4 text-4xl text-green-800 font-bold md:text-5xl">Fresh Vibes, Hot Deals</h1>
        <p className="mx-auto max-w-2xl text-base sm:text-lg text-green-800">
          DISCOUNT UP TO 50% OFF
        </p>
        <p className="mx-auto mb-4 max-w-2xl text-base sm:text-lg text-orange-500 animate__heartBeat">
           🔥 Hot deals 🔥
        </p>
        <a href="/allproducts" className="btn btn-primary bg-green-800 text-white font-bold p-3 rounded-3xl hover:bg-transparent hover:border-green-800 border hover:text-green-800 ">Shop Now</a>
      </div>

            {/* summer tips */}
            <div
                id="marquee"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[90%] rounded-3xl bg-sky-400 px-4 py-4 text-center text-black font-bold shadow-xl border-2 border-white flex items-center"
            >
                <p className="mr-2 hidden sm:block">Top Brands</p>
                <span className="flex flex-row gap-3 mr-2 ">
                    
                    <div className="card h-[20px] justify-center bg-white rounded-2xl">
                        <a href="/"><img src={brand1.src} className="h-[20px]" alt="brand1" /></a>
                    </div>
                    <div className="card h-[20px] justify-center bg-white rounded-2xl">
                        <a href="/"><img src={brand2.src} className="h-[20px]" height="20px" alt="brand2" /></a>
                    </div>
                    <div className="card h-[20px] justify-center bg-white rounded-2xl">
                        <a href="/"><img src={brand3.src} className="h-[20px]" height="20px" alt="brand3" /></a>
                    </div>
                </span>
                <Marquee className="flex-1 px-4" pauseOnHover={true} gradient={false}>
                    {SummerTips.map((tip) => (
                        <span key={tip.id} className="mx-6 whitespace-nowrap cursor-pointer">
                            {tip.tip}
                        </span>
                    ))}
                </Marquee>
            </div>
        </section>
    );
}