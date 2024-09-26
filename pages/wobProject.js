import { Search2Icon } from "@chakra-ui/icons";
import { SimpleGrid, Spacer } from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import ProjectModal from "../components/ProjectModal";

const Project = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const getUsers = async (year) => {
    let url = `/WoB/projects/project${year}.json`;
    const response = await fetch(url);
    const projectData = await response.json();
    setData(projectData);
  };

  useEffect(() => {
    getUsers("2024");
  }, []);
  return (
    <>
      <Head>
        <title>
          Projects | Winter of Blockchain 2024 | GirlScript Foundation India
        </title>
        <meta name="description" content="Projects of Winter of Blockchain" />
        <link rel="icon" href="/WoB/Favicon.ico" />
      </Head>
      <section className="min-h-screen">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-24 w-full">
          <div className="flex flex-col md:flex-row wrap items-center justify-between w-full gap-2">
            <p className="text-primary_orange-0 dark:text-white font-sans text-3xl md:text-5xl text-center font-extrabold flex wrap justify-start flex-col md:flex-row">
              <h1 className="text-[#00008B]">Projects&nbsp;</h1>
            </p>
            <div className="flex border-b-2 items-center">
              <Search2Icon color={"black"} />
              <input
                className="px-3 py-1 bg-transparent outline-none dark:text-white text-black"
                type="search"
                placeholder="Search Projects....."
                name="search"
                id="search"
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
          </div>
        </div>
        <Spacer mt={16} />
        <div
          className="flex flex-row justify-center flex-wrap items-center 
        gap-x-10 gap-y-10 mt-9"
        >
          {data
            .sort(() => 0.5 - Math.random())
            .filter((curElem, i) => {
              if (searchTerm == "") return curElem;
              if (
                curElem.tags
                  .join(",")
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                curElem.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
                return curElem;
            })
            .map((curElem, i) => {
              return (
                <div
                  className="flex rounded-2xl relative bg-gradient-to-b from-[#00008B] to-[#85C6DC] items-center justify-between w-80"
                  key={i}
                  data-aos="flip-up"
                  data-aos-duration="800"
                >
                  <img className="absolute top-5 right-4 w-[66px] h-[63px]" src="./WoB/snow.png" />
                  <img className="absolute top-24 right-4 w-[51px] h-[44px]" src="./WoB/snow.png" />
                  <img className="absolute top-36 right-4 w-[34px] h-[34px]" src="./WoB/snow.png" />
                  <img className="absolute bottom-28 right-4 w-[25px] h-[25px]" src="./WoB/snow.png" />
                  <img className="absolute bottom-20 right-4 w-[19px] h-[17px]" src="./WoB/snow.png" />

                  <div className="shadow dark:bg-black rounded-lg">
                    <div
                      className="overflow-y-clip rounded-lg h-fit md:h-80 
                    w-80 flex flex-col justify-start 
                    shadow-lg shadow-black-200 relative"
                    >
                      <>
                        <div className="flex flex-col justify-start gap-2 px-5 py-3">
                          <div className="font-bold text-white md:text-xl">
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={curElem?.projectUrl}
                            >
                             {curElem.title}
                            </a>
                          </div>
                          <div className="mb-3 text-sm text-[#85C6DC] md:text-md md:mb-4">
                            By {curElem.name}
                          </div>
                        </div>
                        <SimpleGrid
                          columns={{ sm: 2, md: 3 }}
                          spacing={2}
                          margin={1}
                          className="px-2"
                        >
                          {curElem.tags
                            .sort((a, b) => a.length - b.length)
                            .map((techStk, k) => {
                              return (
                                techStk && (
                                  <button
                                    className="bg-[#E6F6FF]  rounded-tl-md rounded-br-md w-full py-1
                                      text-[#00008B] drop-shadow-md "
                                    key={k}
                                    onClick={() => {
                                      setSearchTerm(techStk.trim());
                                    }}
                                  >
                                    {techStk.trim()}
                                  </button>
                                )
                              );
                            })}
                        </SimpleGrid>
                      </>
                      <br />
                      <br />
                      <ProjectModal currProject={curElem} />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <Spacer mt={16} />
      </section>
    </>
  );
};

export default Project;
