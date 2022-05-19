import React from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
    return (
        <div className="bg-gradient-to-r from-[#3F1237] to-[#080815] w-screen h-screen">
            <Header />
            <Hero />
        </div>
    )
}

export default Home
