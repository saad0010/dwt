import FadeIn from "@/components/FadeIn";
import Container from "@/components/layout/Container";
import Hero from "@/components/service/Hero.jsx";

import React from "react";
import { items } from "./data.js";
import { notFound } from "next/navigation";
import Cards from "@/components/service/Cards.jsx";
import SecHero from "@/components/service/SecHero.jsx";

const getData = (service) => {
  const data = items[service];

  if (data) {
    return data;
  }

  return notFound();
};

const Service = ({ params }) => {
  const data = getData(params.service);
  const dat =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum laboriosam, nulla ea vero sequi obcaecati, tempora amet nisi repudiandae libero reprehenderit sapiente alias cupiditate voluptate. At, distinctio tenetur. Veritatis id asperiores aut architecto ab cumque totam at nulla similique laborum, error sunt reprehenderit facilis dolorum non reiciendis minus corporis.";

  const carddata = [
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
      title: "Twitte2r Marketing",
      desc: "With its viral potential Twitter fuels the perfect platform for instant engagement, real-time trends, and unlimited brand exposure. Our social media marketing experts create regular posts to boost your engagement. Amidst all the Social Media Marketing Companies in Toronto, Shyft is your answer to organic and paid Twitter marketing strategies that actually work.",
    },
  ];
  return (
    <Container>
      {data.map((item) => (
        <div className="gap-12" key={item.id}>
          <Hero heading={item.title} description={dat} image={item.image} />
          <Cards carddata={item.kpoint} />
          <SecHero heading={item.title} description={dat} image={item.image} />
       
        </div>
      ))}
    </Container>
  );
};

export default Service;
