import React from "react";
import HeroSection from "../Pages/Hero/Hero";
import TechStack from "../Pages/TechStack/TechStack";
import Experience from "../Pages/Experience/Experience";
import Projects from "../Pages/Projects/Projects";
import ContactPage from "../Pages/Contact/ContactPage";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";

 export default function LandingPage() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <TechStack></TechStack>
      <Projects></Projects>

      <Experience></Experience>
      <ContactPage></ContactPage>
      <Footer></Footer>
    </>
  );
}
