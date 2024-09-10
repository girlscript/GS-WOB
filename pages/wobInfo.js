import Head from "next/head";

function WobInfo() {
  return (
    <div>
      <Head>
        <title>
          How WoB Works? | GirlScript Winter of Blockchain 2024 | GirlScript
          Foundation India
        </title>
        <meta
          name="description"
          content="GirlScript Winter of Blockchain Working"
        />
      </Head>
      <div className="container transition-colors grid lg:grid-cols-2 mx-auto mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-12 lg:px-20 2xl:px-50 dark:bg-darkmode_gray-0 dark:transition-colors ">
        <div>
          <h1 className="bg-gradient-to-r from-[#00008B] to-[#ADD8E6] bg-clip-text text-center lg:pt-20 text-transparent dark:text-white text-6xl font-sans font-semibold mb-10">
            How WOB Works!
          </h1>
        </div>
        <div className="img__container">
          <img src={"./WoB/howHero.png"} alt="hero-image" />
        </div>
      </div>

      <div className="flex flex-row justify-around flex-wrap sm:flex-wrap mb-28">
        <div className="flex flex-col justify-around align-center items-center sm:flex-col">
          <div className="flex flex-col text-white dark:text-gray-800 text-2xl font-bold text-center bg-gradient-to-b from-[#ADD8E6] to-[#00008B] p-4 rounded-lg max-w-[29rem] w-full">
            Contributors
          </div>
          <div className="flex" data-aos="flip-left" data-aos-duration="700">
            <img src="/WoB/howContributor.png" alt="Rectangle light" />
          </div>
        </div>
        <div className="flex flex-col justify-evenly align-center items-center sm:flex-col mt-5">
          <div className="flex m-auto flex-col text-white dark:text-gray-800 text-2xl font-bold text-center bg-gradient-to-b from-[#ADD8E6] to-[#00008B] p-4 mb-6 rounded-lg max-w-[29rem] w-full">
            Mentors
          </div>
          <div className="flex" data-aos="flip-left" data-aos-duration="700">
            <img src="/WoB/howMentor.png" alt="Rectangle light" />
          </div>
          <div className="flex flex-col text-white dark:text-gray-800 text-2xl font-bold text-center bg-gradient-to-b from-[#ADD8E6] to-[#00008B] p-4 mb-6 rounded-lg max-w-[29rem] w-full">
            Project Admin
          </div>
          <div className="flex" data-aos="flip-left" data-aos-duration="700">
            <img
              className="h-0 w-0 dark:h-full dark:w-full invisible dark:visible"
              src="/WoB/howPA.png"
              alt="Rectangle light"
            />
            <img
              className="dark:hidden"
              src="/WoB/howPA.png"
              alt="Rectangle light"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WobInfo;
