import type { NextPage } from "next";
import Head from "next/head";
import Carrousel from "../components/Carrousel";
import Header from "../components/Header";
import LipssonHero from "../components/LipssonHero";
import PrimaryButton from "../components/PrimaryButton";
import WavesPurpleHero from "../components/WavesPurpleHero";

const Home: NextPage = () => {
  return (
    <div className="h-max">
      <Head>
        <title>Lipsson</title>
      </Head>
      <div className="h-full bg-gradient-to-br from-[#3F1237] to-[#080815] px-2">
        <Header />
        <WavesPurpleHero />
        <div className="md:grid md:grid-cols-2 z-20">
          <div className="grid grid-cols-1 mt-16 z-20 items-center">
            <div className="m-auto w-8/12 grid grid-cols-1">
              <div className="tracking-wide font-gothamBold text-white font-black  text-5xl md:m-auto md:text-5xl lg:text-[75px] z-20">
                Creamos
                <br /> experiencias
                <br /> memorables
              </div>
              <div className="mt-8 text-gray-400 text-xl font-gotham z-20 md:text-4xl md:m-auto md:mt-16 lg:text-[30px]">
                A traves de los años descubrimos <br />
                <div className="mt-2">
                  <b className="font-gothamBold font-extrabold text-white text-xl md:text-4xl lg:text-[30px]">
                    algo asombroso!
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="m-auto w-10/12  relative sm:w-7/12  md:w-10/12 lg:m-0 xl:w-9/12 ">
            <LipssonHero />
          </div>
          <div className="m-auto w-screen p-10 md:p-20 lg:p-32">
            <Carrousel />
          </div>
        </div>
        <section className="carousel text-gray-400  text-md lg:text-[32px] font-gotham min-h-[200px]">
          <div className="w-10/12 m-auto sm:w-9/12">
            Descubrimos que los eventos son un viaje lleno de{" "}
            <b className="font-gothamBold font-extrabold  text-white text-md lg:text-[32px]">
              pequeñas experiencias
            </b>{" "}
            que empiezan desde una propuesta, un nacimiento, una carta de
            aceptación a la universidad o cualquier momento importante en la
            vida de una persona.
          </div>
        </section>
        <section className="main-2 p-10 sm:mt-0 lg:mt-24 md:w-10/12 m-auto">
          <div className="md:grid sm:grid-cols-2 sm:gap-10 md:gap-20 lg:gap-20 xl:gap-40">
            <div className="">
              <img className="rounded-2xl" src="/images/pic1.jpeg" />
            </div>
            <div className="mt-8 sm:text-[17px] md:mt-0  lg:text-[25px] text-gray-400  font-gotham min-h-[200px] self-center block">
              <p>
                y esta experiencia sigue con la planeación y despues de una
                mañana agitada, por fin las personas que mas quieres aparecen,
                se encuentran con amigos y ellos con otros, y los pequeños
                grupos se juntan para celebrar contigo.
              </p>
              <div className="text-center mt-12">
                <PrimaryButton label="continuar" />
              </div>
            </div>
          </div>
        </section>
        <section className="instagram"></section>
      </div>
    </div>
  );
};

export default Home;
