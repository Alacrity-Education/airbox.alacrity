import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";


export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    </>
  );
}
