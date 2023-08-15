import React from "react";
import Container from "../layout/Container";
import FadeIn from "../FadeIn";
import FadeInStagger from "../FadeIn";
import logo from "../../../public/clients/Casper-1.png";
import logo1 from "../../../public/clients/Dropbox.png";
import logo2 from "../../../public/clients/Bob_s-Red-Mill-gray.jpg";
import logo3 from "../../../public/clients/myfitnesspal_gray.jpg";
import logo4 from "../../../public/clients/PDM-Catalina-crunch.png";
import logo5 from "../../../public/clients/Peloton-logo-2000x1158-1-1400x811.jpg";
import logo6 from "../../../public/clients/lord-taylor-logo.png";
import logo7 from "../../../public/clients/Square.png";
import Image from "next/image";

const clients = [
  ["Casper", logo],
  ["Dropbox", logo1],
  ["Bobs Red Mill", logo2],
  ["Fitness Pal", logo3],
  ["Catalina", logo4],
  ["Peloton", logo5],
  ["Lord", logo6],
  ["Square", logo7],
];

const Clients = () => {
  return (
    <>
      <div className="mt-10  bg-neutral-200 py-20">
        <Container>
          <div>
            <FadeIn className="flex items-center gap-x-8">
              <h2 className="text-center text-sm font-semibold  tracking-wider">
                We Have Worked With Hundreds of Amazing People
              </h2>
              <div className="h-px flex-auto bg-neutral-700" />
            </FadeIn>
            <FadeInStagger faster>
              <ul
                role="list"
                className="mt-10 grid grid-cols-2 gap-x-8 lg:grid-cols-4 gap-10"
              >
                {clients.map(([client, logo]) => (
                  <li key={client}>
                    <FadeIn>
                      <Image src={logo} alt={client} unoptimized />
                    </FadeIn>
                  </li>
                ))}
              </ul>
            </FadeInStagger>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Clients;
