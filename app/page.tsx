"use client";

import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import New from "./pages/New";

function Home() {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <Hero />
        <New />
      </div>
    </>
  );
}
export default Home;
