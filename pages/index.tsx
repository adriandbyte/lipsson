import type { NextPage } from 'next'
import Head from 'next/head'
import Carrousel from '../components/Carrousel'
import Header from '../components/Header'
import LipssonHero from '../components/LipssonHero'
import PrimaryButton from '../components/PrimaryButton'
import WavesPurpleHero from '../components/WavesPurpleHero'
import SecondaryButton from '../components/SecondaryButton'

const Home: NextPage = () => {
  return (
    <div className="h-full w-full overflow-hidden">
      <Head>
        <title>Lipsson</title>
      </Head>
      <div className="h-full bg-gradient-to-br from-[#3F1237] to-[#080815] px-2">
        <Header />
        <WavesPurpleHero />
        <div className="z-20 md:grid md:grid-cols-2">
          <div className="z-20 mt-16 grid grid-cols-1 items-center">
            <div className="m-auto grid grid-cols-1 md:w-8/12">
              <div className="z-20 font-gothamBold text-5xl font-black  tracking-wide text-white md:m-auto md:text-5xl lg:text-[75px]">
                Creamos
                <br /> experiencias
                <br /> memorables
              </div>
              <div className="z-20 mt-8 font-gotham text-xl text-gray-400 md:m-auto md:mt-16 md:text-4xl lg:text-[30px]">
                A traves de los años descubrimos <br />
                <div className="mt-2">
                  <b className="font-gothamBold text-xl font-extrabold text-white md:text-4xl lg:text-[30px]">
                    algo asombroso!
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="relative m-auto  w-10/12 sm:w-7/12  md:w-10/12 lg:m-0 xl:w-9/12 ">
            <LipssonHero />
          </div>
          <div className="m-auto w-screen p-10 md:p-20 lg:p-32">
            <Carrousel />
          </div>
        </div>
        <section className="carousel text-md  min-h-[200px] font-gotham text-gray-400 lg:text-[32px]">
          <div className="m-auto w-10/12 sm:w-9/12">
            Descubrimos que los eventos son un viaje lleno de{' '}
            <b className="text-md font-gothamBold  font-extrabold text-white lg:text-[32px]">
              pequeñas experiencias
            </b>{' '}
            que empiezan desde una propuesta, un nacimiento, una carta de
            aceptación a la universidad o cualquier momento importante en la
            vida de una persona.
          </div>
        </section>
        <section className="main-2 m-auto p-10 sm:mt-0 md:w-10/12 lg:mt-24">
          <div className="sm:grid-cols-2 sm:gap-10 md:grid md:gap-20 lg:gap-20 xl:gap-40">
            <div className="">
              <img
                className="rounded-2xl"
                src="/images/pic1.jpeg"
                alt="lipsson dj, party, events"
              />
            </div>
            <div className="mt-8 block min-h-[200px]  self-center font-gotham  text-gray-400 sm:text-[17px] md:mt-0 lg:text-[25px]">
              <p>
                y esta experiencia sigue con la planeación y despues de una
                mañana agitada, por fin las personas que mas quieres aparecen,
                se encuentran con amigos y ellos con otros, y los pequeños
                grupos se juntan para celebrar contigo.
              </p>
              <div className="mt-12 text-center">
                <PrimaryButton label="continuar" />
              </div>
            </div>
          </div>
        </section>
        {/* <section className="instagram">
          <CarrouselList />
        </section> */}
        <section className="main-3 m-auto p-10 sm:mt-0 md:w-10/12 lg:mt-24">
          <div className="mt-8 block min-h-[200px]  self-center font-gotham  text-gray-400 sm:text-[17px] md:mt-0 lg:text-[25px]">
            <p>
              Lo mas{' '}
              <b className="text-md font-gothamBold  font-extrabold text-white lg:text-[24px]">
                asombroso
              </b>{' '}
              es que siempre llega ese momento en esta experiencia que has
              preparado para celebrar y que es inevitable,
              <b className="text-md font-gothamBold  font-extrabold text-white lg:text-[24px]">
                {' '}
                el momento que todos comparten una pista y un mismo ritmo
              </b>{' '}
              para seguir creando esos pequenos momentos que hacen de tu
              celebracion...
            </p>
          </div>
          <div className="z-20 mt-16 flex text-right font-gotham text-xl text-gray-400 md:m-auto md:mt-2 md:text-4xl lg:text-[30px]">
            <div className="z-20 font-gothamBold text-5xl font-black  tracking-wide text-white md:m-auto md:text-5xl lg:text-[75px]">
              Un evento que jamas olvidaran.
            </div>
          </div>
          <div className="mt-36 flex justify-evenly">
            <SecondaryButton label="¿Como lo logran?" />
            <PrimaryButton label="Crear experiencia" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
