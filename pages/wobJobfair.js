import Head from "next/head";
import React from "react";
import SocialFollow from "../components/homepage/SocialFollow";

function WobJobfair() {
  return (
    <>
      <Head>
        <title>
          Job Fair | GirlScript Winter of Blockchain | GirlScript Foundation
          India
        </title>
        <meta
          name="description"
          content="GirlScript Winter of Blockchain Job Fair"
        />
      </Head>
      <SocialFollow />

      <section className="flex flex-col mb-24 items-center">
        <div className="w-3/4 flex justify-between items-center rounded-2xl flex-wrap mb-24">
          <div className="rounded-2xl basis-full bg-[#121E42] p-6 md:basis-6/12 md:order-last lg:basis-1/2 lg:order-last relative">
            <div className="text-white font-semibold text-4xl 2.25rem 3rem mb-5 font-sans">
              About{" "}
              <span className="text-transparent bg-gradient-to-r from-[#2371CD] to-[#56AAC5] bg-clip-text">
                WOB 2024{" "}
              </span>
              Job Fair
            </div>
            <p className="text-white font-serif text-1xl p-2">
              At WOB 2024 Job Fair, we believe in inclusivity and diversity.
              That&apos;s why the event is open to all students from different
              academic backgrounds. Whether you&apos;re a tech nerd, a creative
              genius, a marketing maven, or a business aficionado, there are
              opportunities waiting for you. Don&apos;t miss this extraordinary
              opportunity to kickstart your career in the technology world.
              
            </p>
            <p className="text-white font-serif font-bold text-1xl p-2">
            Register for the WOB 2024 Job Fair and open doors to limitless
            possibilities.
            </p>

            <button className="mt-10">
              <a href="">
                <button
                  id="CTA-button-wob"
                  data-aos="fade-down"
                  className="bg-gradient-to-r from-[#00008B] to-[#85C6DC] text-md text-white font-semibold px-4 py-4 rounded-[8px] md:text-2xl md:py-2"
                >
                  Register Here
                </button>
              </a>
            </button>
          </div>

          <div
            className="rounded shadow-lg shadow-[#00008B]"
            data-aos="flip-left"
            data-aos-duration="700"
          >
            <img
              src="https://github.com/nawed2611/nawed2611/assets/83456083/be3532cf-368b-425e-8c23-1e81243b8ead"
              width={500}
              height={500}
              alt="GirlScript Job Fair Photo"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center px-3 mb-10" id="Sponsors">
          <div className="sponsors__wrapper flex flex-col">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="400"
              className="bg-gradient-to-r from-[#00008B] to-[#85C6DC] other__sponsors px-9 py-9 shadow-xl rounded flex flex-col justify-center items-center"
            >
              <h3 className="text-white font-sans font-semibold text-3xl mt-10  mb-5 place-content-center">
                Hiring Partners
              </h3>

              <div className="flex flex-col sm:flex-row flex-wrap gap-x-28 justify-center items-center mb-5">
                {/* <a href="">
                  <img
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="h-16"
                    src=""
                    alt=""
                  />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WobJobfair;
