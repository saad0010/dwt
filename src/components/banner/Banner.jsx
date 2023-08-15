"use client";
import React from "react";
import Container from "../layout/Container";
import { motion } from "framer-motion";
import Image from "next/image";
import bannerOne from "../../../public/bannerOne.webp";
import bannerTwo from "../../../public/bannerTwo.webp";
import bannerThree from "../../../public/bannerThree.webp";
import FadeIn from "../FadeIn";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-900 to-purple-600 w-full  px-4 relative">
        <Container>
          <div className="text-white grid md:grid-cols-2 gap-20 place-items-center">
            {/* left */}
            <div className="flex flex-col gap-6 xl:gap-10">
              <FadeIn>
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold">
                  LET US INTRODUCE YOU TO THE WORLD DIGITALLY
                </h1>
              </FadeIn>
              <FadeIn>
                <p className="text-sm tracking-wide">
                  Our digital marketing services are trusted by business owners
                  and entrepreneurs across Canada and North America. We can help
                  you drive relevant traffic, achieve accurate positioning,
                  generate better leads, boost sales & maximize ROI. Find out
                  how Shyft can take your enterprise off the ground and make it
                  stand out in the digital marketplace.
                </p>
              </FadeIn>
              <FadeIn>
                <div className="w-full p-6 xl:p-10 bg-white rounded-3xl flex flex-col lg:flex-row text-black justify-between gap-5">
                  {/* <Link
                    // className="w-full h-12 justify-center  rounded-xl   bg-black text-white uppercase font-medium hover:bg-green-950 cursor-pointer duration-300"
                    href={"/contact"}
                  >
                    <h3 className="items-center"> WORK WITH US</h3>
                  </Link> */}
                  <Link href={"/contact"} className="w-full">
                    {" "}
                    <button className="w-full px-4   h-12 rounded-xl bg-purple-700 text-white uppercase font-medium hover:bg-black cursor-pointer duration-300">
                      WORK WITH US
                    </button>
                  </Link>
                </div>
              </FadeIn>
            </div>
            {/* Right */}
            <div className="w-full relative flex justify-center items-center gap-6">
              <motion.div
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
              >
                <Image
                  src={bannerOne}
                  alt="bannerImg"
                  className="w-52 rounded-2xl object-cover"
                />
              </motion.div>
              <div className="flex flex-col gap-7 ">
                <motion.div
                  initial={{ y: 300 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={bannerTwo}
                    alt="bannerImg"
                    className="w-52 rounded-2xl object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 200 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={bannerThree}
                    alt="bannerImg"
                    className="w-52 rounded-2xl object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
