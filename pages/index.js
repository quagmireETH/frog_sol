import Header from "./Header";
import Page2 from "./page2";
import Page3 from "./Page3";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center mt-20 h-full">
        <div className="w-96 flex justify-center items-center flex-col mr-20">
          <div className="">
            <p className="bg-purple-500 text-4xl">THE <span className="text-green-500 font-bold">MEME COIN</span> OF</p>
            <p className="bg-purple-500 mt-3 text-4xl">THE <span className="text-green-500 font-bold">CHAD CHAIN</span></p>
          </div>
          <div className="my-6">
            <p>Get Some $COQ INU</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button class="relative overflow-hidden text-black px-6 py-2 font-bold uppercase transition-transform duration-300 ease-in-out border-2 border-black mb-5">
              Buy Now
            </button>
            <button class="relative overflow-hidden text-black px-6 py-2 font-bold uppercase transition-transform duration-300 ease-in-out border-2 border-black mb-5">
              Buy Now
            </button>
            <button class="relative overflow-hidden text-black px-6 py-2 font-bold uppercase transition-transform duration-300 ease-in-out border-2 border-black mb-5">
              Buy Now
            </button>
          </div>
          <div className="flex justify-evenly items-center mt-2">
            <img className="w-10" src="/solscan.png" alt="" />
            <img className="w-10 mx-6" src="/tgAsset_22.svg" alt="" />
            <img className="w-10" src="/twitter.svg" alt="" />
          </div>
        </div>
        <div>
          <img className="w-[450px]" src="/frog1.jpg" alt="" />
        </div>
      </div>

      <Page2 />
      <Page3 />
    </div>
  );
}
