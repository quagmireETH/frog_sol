import Header from "./Header";
import Page2 from "./page2";
import Page3 from "./Page3";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center mt-20 h-full relative">
        <img
          className="absolute w-full h-screen -z-50"
          src="/frog_bg.jpg"
          alt=""
        />

        <div className="w-96 flex justify-center items-center flex-col">
          <div className="">
            <p className="bg-white rounded-md text-4xl px-2 py-0.5">
              THE <span className="text-green-500 font-bold">MEME COIN</span> OF
            </p>
            <p className="bg-white rounded-md mt-3 text-4xl flex items-center px-2 py-0.5">
              THE <span className="text-green-500 font-bold ml-2.5">CHAD CHAIN</span>
              <img className="w-8 mt-1 ml-2" src="/Solana_logo.png" alt="" />
            </p>
          </div>
          <div className="my-8 bg-white rounded-md py-1 px-2">
            <p className="text-lg">Get Some $COQ INU</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button class="button-50">Trader Joe</button>
            <button class="button-50">Dextools</button>
            <button class="button-50">Birdeye</button>
          </div>
          <div className="flex justify-evenly items-center mt-10">
            <div className="bg-purple-500 cursor-pointer mr-10 p-2 max-[700px]:w-14 max-[700px]:h-14 max-[415px]:w-12 max-[415px]:h-12 rounded-lg shadow-lg shadow-black hover:translate-y-2 hover:shadow-none duration-100">
              <img className="w-10" src="/solscan.png" alt="" />
            </div>

            <div className="bg-purple-500 cursor-pointer mr-10 p-3 max-[700px]:w-14 max-[700px]:h-14 max-[415px]:w-12 max-[415px]:h-12 rounded-lg shadow-lg shadow-black hover:translate-y-2 hover:shadow-none duration-100">
              <img className="w-10" src="/tgAsset_22.svg" alt="" />
            </div>

            <div className="bg-purple-500 cursor-pointer p-2 max-[700px]:w-14 max-[700px]:h-14 max-[415px]:w-12 max-[415px]:h-12 rounded-lg shadow-lg shadow-black hover:translate-y-2 hover:shadow-none duration-100">
              <img className="w-10" src="/twitter.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <Page2 />
      <Page3 />
    </div>
  );
}
