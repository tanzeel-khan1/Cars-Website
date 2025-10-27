'use client';

import Navbar from "./components/Navbar"
import Hero from "./pages/Hero"

function Home() {
  return(
    <>
   <div className="bg-black">
    <Navbar/>
    <Hero/>
   </div>
    </>
  )
}
export default Home