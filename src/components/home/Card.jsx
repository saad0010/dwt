import React from "react";
import FadeIn from "@/components/FadeIn";
import Container from "@/components/layout/Container";
import Title from "@/components/title/Title";

import { notFound } from "next/navigation";
import Link from "next/link";
import { Image } from "next/image";

const Card = (props) => {
  const cardData = props.cardData;

  return (
    <Container>
      <div className="min-h-screen bg-gradient-to-r from-purple-500 to-violet-900 flex justify-center  items-center py-20">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-4 md:space-y-0">
          {cardData?.map((item) => (
            <div
              key={item.id}
              className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform  hover:scale-105 transition duration-500 hover:shadow-purple-950 hover:border-solid"
            >
              <h3 className="mb-3 text-xl font-bold text-indigo-600">
                {item.title}
              </h3>
              <div className="relative">
                <img
                  className="w-full h-60 rounded-xl"
                  src={item.image}
                  alt="Colors"
                />
              </div>
              <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
                {item.desc}
              </h1>
              <div className="my-4">
                <div className="flex space-x-1 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600 mb-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <p>{item.label}</p>
                </div>
                <div className="flex space-x-1 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600 mb-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <p>{item.label1}</p>
                </div>
                <div className="flex space-x-1 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-600 mb-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </span>
                  <p>{item.label2}</p>
                </div>
                <Link href={`/services/${item.slug}`}>
                  {" "}
                  <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                    LEARN MORE
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Card;
