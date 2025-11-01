// "use client";

// import Navbar from "./components/Navbar";
// import Hero from "./pages/Hero";
// import New from "./pages/New";
// import Page from "./pricing/page"
// import Cars from "./pages/Cars";
// import Slast from "./pages/Slast";
// import Footer from "./pages/Footer";

// function Home() {
//   return (
//     <>
//       <div className="bg-black">
//         <Navbar />
//         <Hero />
//         <New />
//         <Page />
//         <Cars />
//         <Slast/>
//         <Footer/>
//       </div>
//     </>
//   );
// }
// export default Home;
"use client";

import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import New from "./pages/New";
import Page from "./pricing/page";
import Cars from "./pages/Cars";
import Slast from "./pages/Slast";
import Footer from "./pages/Footer";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <New />
      <Page />
      <Cars />
      <Slast />
      <Footer />
    </div>
  );
}
