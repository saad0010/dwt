import React from "react";
import FadeIn from "@/components/FadeIn";
import Container from "@/components/layout/Container";
import Title from "@/components/title/Title";

import { notFound } from "next/navigation";
import Link from "next/link";
import { Image } from "next/image";
const Cards = (props) => {
  const carddata = props.carddata;
  const data = [
    {
      id: 1,
      title: "Facebook Marketing",
      desc: "Facebook is an influential marketing platform with over 2 billion active users. Our experts use the most advanced Facebook advertising techniques to reach your goals. We are specialized in managing Facebook profiles, scheduling and posting regular content, optimizing ads, and engaging with your customers so your brand’s voice can stand out.",
    },
    {
      id: 2,
      title: "LinkedIn Marketing",
      desc: "LinkedIn Marketing is the ultimate way to establish your professional reputation and scale up your business. Shyft Digitally can help take care of everything from managing your company profile, posting informational and audience-centric content, and connecting and spreading your network across industrial leaders and pioneers.",
    },
    {
      id: 3,
      title: "Twitter Marketing",
      desc: "With its viral potential Twitter fuels the perfect platform for instant engagement, real-time trends, and unlimited brand exposure. Our social media marketing experts create regular posts to boost your engagement. Amidst all the Social Media Marketing Companies in Toronto, Shyft is your answer to organic and paid Twitter marketing strategies that actually work.",
    },
  ];
  return (
    <div className="min-h-screen bg-black flex justify-center items-center py-20">
      <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-4 md:space-y-0">
        {carddata.map((item) => (
          <div
            key={item.id}
            className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform  hover:scale-105 transition duration-800 hover:shadow-purple-950 hover:border-purple-950 group  hover:bg-gradient-to-r from-purple-500 to-indigo-900 hover:border-solid"
          >
            <h3 className="mb-3 text-2xl font-bold text-indigo-600 group-hover:text-white ">
              {item.title}
            </h3>

            <h1 className="mt-4 text-gray-800 text-xl font-semibold cursor-pointer group-hover:text-white">
              {item.desc}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cards;
