"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const BecomClient = () => {
  return (
    // <div className="h-screen bg-black flex items-center">
    <section className="mt-10 mb-10 bg-gradient-to-r from-violet-800 to-violet-900 w-full bg-cover bg-center py-32">
      <div className="container mx-auto text-center text-white">
        <h1 className="text-xl md:text-4xl font-medium mb-6">
          A B2B consultancy with expertise in
        </h1>
        <p className=" text-4xl md:text-8xl mb-12">
          <Typewriter
            words={[
              "PPC (PAY PER CLICK)",
              "Email Marketing",
              "Logo Design",
              "SEO",
              "Affiliate Marketing",
              "Competitor Analysis",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={150}
            deleteSpeed={100}
            delaySpeed={1000}
          />
        </p>
        <a
          href="#"
          className="bg-purple-600 text-white text-sm py-2 px-8 md:text-xl md:py-4 md:px-12 rounded-full hover:bg-purple-950"
        >
          Book A 30 Minute Free Consultation
        </a>
      </div>
    </section>
    // </div>
  );
};

export default BecomClient;
