"use client";

import Navbar from "./components/Navbar";
import Cars from "./pages/Cars";
import Hero from "./pages/Hero";
import New from "./pages/New";
import Page from "./pricing/page"
function Home() {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <Hero />
        <New />
        <Page />
        <Cars/>
      </div>
    </>
  );
}
export default Home;
