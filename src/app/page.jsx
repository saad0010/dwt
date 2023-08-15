import Banner from "@/components/banner/Banner";
import Clients from "@/components/clients/Clients";
import Card from "@/components/home/Card";
import SecHero from "@/components/service/SecHero";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    title: "SEO",
    slug: "seo",
    desc: "GET THE BEST ORGANIC SEO SERVICES",
    label: "SCHEDULE A CALL",
    label1: "TAILORED SEO STRATEGY",
    label2: "HIGHER RANKINGS!",
    image:
      "https://img.freepik.com/free-vector/seo-analytics-team-concept-illustration_114360-9205.jpg?w=740&t=st=1691185201~exp=1691185801~hmac=16a5f3990d8d9336726c2a7aa937e07db629ff392478c49f1edd447482c1e93f",
  },
  {
    id: 2,
    title: "WEB DESIGN",
    slug: "webdesign",
    desc: "STUNNING WEB DESIGN & DEVELOPMENT SERVICES",
    label: "User Friendly Web Design",
    label1: "Complete Website Development",
    label2: "E-commerce",
    image:
      "https://img.freepik.com/free-psd/american-food-website-app-template_23-2148477329.jpg?w=996&t=st=1691185236~exp=1691185836~hmac=205da32db6c87d25a6e79348ad390a3e3316072766b97dc1bf0c4807893527ed",
  },
  {
    id: 3,
    title: "SOCIAL MEDIA MARKETING",
    slug: "social",
    desc: "Grow Your Business by Social Media Engagement",
    label: "Connect, Engage, Succeed",
    label1: "Igniting Your Social Media Presence",
    label2: "Art of Social Media Solutions",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-illustration-people-with-smartphone-marketing_52683-66659.jpg?size=626&ext=jpg&ga=GA1.2.2027385377.1690631469&semt=ais",
  },
  // {
  //   id: 4,
  //   title: "PPC (PAY PER CLICK)",
  //   slug: "ppc",
  //   desc: "CLICK , CONVERT & CONQUER WITH PPC",
  //   label: "INCREASE QUALITY LEADS",
  //   label1: "MORE INBOUND PHONE CALLS",
  //   label2: "GROW YOUR SALES",
  //   image:
  //     "https://img.freepik.com/free-vector/pay-per-click-computer-desktop-with-cursor_107791-1835.jpg?size=626&ext=jpg&ga=GA1.2.2027385377.1690631469&semt=sph",
  // },
  // {
  //   id: 5,
  //   title: "AFFILIATE MARKETING",
  //   slug: "affiliate",
  //   desc: "DIGITAL MARKETING THAT DRIVES REVENUE",
  //   label: "Get In Touch With Your Client",
  //   label1: "Get Full Sales Supports",
  //   label2: "Leave It To Us",
  //   image:
  //     "https://img.freepik.com/free-vector/hand-drawn-flat-design-affiliate-marketing-infographic_23-2149322238.jpg?size=626&ext=jpg&ga=GA1.2.2027385377.1690631469&semt=ais",
  // },
  // {
  //   id: 6,
  //   title: "EMAIL MARKETING",
  //   slug: "email",
  //   desc: "Powerful Results with Our Email Marketing Services!",
  //   label: "Campaign Creation",
  //   label1: "Placement Testing",
  //   label2: "Split Testing",
  //   image:
  //     "https://img.freepik.com/free-vector/administrative-staff-sends-emails-company-s-customers-online-with-their-smartphones_1150-65547.jpg?size=626&ext=jpg&ga=GA1.2.2027385377.1690631469&semt=ais",
  // },
];

const image =
  "https://img.freepik.com/free-photo/business-meeting-about-seo_53876-94826.jpg?size=626&ext=jpg&ga=GA1.2.2027385377.1690631469&semt=sph";
export default function Home() {
  return (
    <main className="bg-black">
      <Banner />

      <Card cardData={cardData} />

      <SecHero
        heading="SEO Strategies That Work"
        description="As the best digital marketing agency, we have decoded and found all the ways that actually work to rank your website. Our organic SEO services are dedicated to providing you with strategic value-added content and technical optimizations that will skyrocket your website to the top of Google’s search results. SEO is the #1 marketing solution for increasing organic traffic to your website, and we know how to make it work for you."
        image={image}
      />
      <Clients />
    </main>
  );
}
