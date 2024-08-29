import Head from "next/head";
import React, { useState } from "react";
import { accordionData } from "./api/WOBFAQdata";
import DiabloAccordion from "../components/diabloAccordion";

function WobFaq() {
  const [data] = useState(accordionData);

  return (
    <>
      <Head>
        <title>
          FAQs | GirlScript Summer of Code 2024 | GirlScript Foundation India
        </title>
        <meta name="description" content="FAQs of GirlScript Summer of Code" />
      </Head>
      <>
        <div className="w-full flex items-center justify-center gap-[2px]">
          <div className="flex-grow pt-2 flex items-center justify-start">
            <div className="h-0 w-full rounded-md bg-gradient-to-r from-[#00008B] to-[#ADD8E6] p-[2px]" />
          </div>
          <h1 className="m-0 text-4xl sm:text-5xl font-semibold text-transparent bg-gradient-to-r from-[#00008B] to-[#ADD8E6] bg-clip-text">
          Frequently Asked Questions(FAQs)
          </h1>
          <div className="flex-grow flex pt-2 items-center justify-end">
            <div className="h-0 w-full rounded-md bg-gradient-to-r from-[#00008B] to-[#ADD8E6] p-[2px]" />
          </div>
        </div>

        <div className="flex flex-col w-full justify-center px-16 mt-20 mb-10">
          {data.map((curElem) => (
            <DiabloAccordion key={curElem.id} {...curElem} />
          ))}
        </div>
      </>
    </>
  );
}

export default WobFaq;
