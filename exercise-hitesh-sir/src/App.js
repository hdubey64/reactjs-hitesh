import React from "react";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

import Header from "./Header";
import NavBar from "./NavBar";
import PortfolioSection from "./PortfolioSection";

const App = () => {
   return (
      <div>
         <h1 style={{ textAlign: "center " }}>Exercise-0.2 by Hitesh Sir</h1>
         <NavBar />
         <Header />
         <PortfolioSection />
         <AboutSection />
         <ContactSection />
         <Footer />
      </div>
   );
};

export default App;
