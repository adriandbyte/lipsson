import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import LipssonHero from "../components/LipssonHero";
import WavesPurpleHero from "../components/WavesPurpleHero";

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Lipsson</title>
      </Head>
      <div className="h-full bg-gradient-to-br from-[#3F1237] to-[#080815] px-2">
        <Header />
        <WavesPurpleHero />
        <div className="md:grid md:grid-cols-2 md:gap-4 z-20">
          <div className="grid grid-cols-1 mt-16 px-10 z-20 items-center">
            <div className="grid grid-cols-1">
              <div className="tracking-wide	font-gothamBold md:ml-16 text-white font-black text-5xl lg:text-[75px] z-20">
                Creamos
                <br /> experiencias
                <br /> memorables
              </div>
              <div className="text-gray-400 md:ml-16 text-2xl lg:text-[30px] font-gotham z-20 mt-8">
                A traves de los años descubrimos <br />
                <b className="font-gothamBold font-extrabold  text-white text-2xl  lg:text-[30px]">
                  algo asombroso!
                </b>
              </div>
            </div>
          </div>
          <div className="mt-[-3rem] md:mt-0 md:min-h-[600px] md:h-full md:w-full h-[400px] w-full relative ">
            <LipssonHero />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
