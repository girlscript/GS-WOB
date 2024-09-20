import { Search2Icon } from "@chakra-ui/icons";
import { Spacer } from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getUsers = async (year) => {
    let url = `/WoB/projects/project${year}.json`;
    const response = await fetch(url);
    const projectData = await response.json();
    setProjects(projectData);
    setFilteredProjects(projectData); // Initialize filtered projects
  };

  useEffect(() => {
    getUsers("2024");
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = projects.filter((project) => {
      const titleMatch = project.title?.toLowerCase().includes(query);
      const tagsMatch = project.tags.some((tag) =>
        tag.toLowerCase().includes(query)
      );
      return titleMatch || tagsMatch;
    });

    setFilteredProjects(filtered);
  };

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
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearch}
                name="search"
                id="search"
              />
            </div>
          </div>
        </div>
        <Spacer mt={16} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%] m-auto md:px-24">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="relative w-full max-w-[537px] h-[550px] bg-cover hover:shadow-xl hover:shadow-[#23A3CD] rounded-[50px] bg-center text-white"
              style={{ backgroundImage: "url('/WoB/projects_card.png')" }}
            >
              <a href={project.projectUrl}>
                <div className="absolute inset-0 rounded-[50px] bg-black bg-opacity-5 flex items-center justify-center">
                  <div className="p-4 text-left w-[90%] m-auto text-[#00008B]">
                    <div className="m-auto h-1/2">
                      <h2 className="text-2xl text-center md:text-4xl my-6 font-bold">
                        {project.title?.slice(0, 17)}
                        {project.title[18] && "..."}
                      </h2>
                      <p className="text-lg md:text-xl mt-20 font-semibold">
                        Project Admin:{" "}
                        <span className="font-medium">
                          {project.name?.slice(0, 15)}
                          {project.name[15] && "..."}
                        </span>
                      </p>
                      <p className="text-base md:text-lg mt-4 font-normal">
                        {project.description?.slice(0, 120)}
                        {project.description[121] && "..."}
                      </p>
                    </div>
                    <div className="grid w-[95%] min-w-[235px] overflow-hidden m-auto grid-cols-2 md:grid-cols-3 gap-4 mt-5">
                      {project.tags.map(
                        (tag, idx) =>
                          idx < 6 && (
                            <p
                              key={idx}
                              className="w-[110px] h-[40px] text-center pt-[8px] text-white text-sm bg-[#00008B] rounded-tl-full rounded-br-full"
                            >
                              {tag.split(" ")[0]}
                            </p>
                          )
                      )}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <Spacer mt={16} />
      </section>
    </>
  );
};

export default Project;
