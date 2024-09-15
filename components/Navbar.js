import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Tooltip } from "@chakra-ui/react";
import MoreMenu from "./MoreMenu";
import ThemeChanger from "./Toggler";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const gssocLink = "https://gssoc.girlscript.tech";

  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <nav className="flex items-center justify-between transition-colors flex-wrap bg-white drop-shadow-xl p-1 mb-10 dark:bg-black dark:text-white dark:transition-colors sticky top-0 z-10">
        <div className="flex items-center p-1.5 ml-5">
          <Link href="/wob">
            <a className="inline-flex items-center">
              <span className="text-xl font-bold uppercase tracking-wide">
                {theme === "light" ? (
                  <img
                    style={{ width: "200px", height: "60px" }}
                    id="Learn_more"
                    src="/WoB/WOB_Black.png"
                    alt="GSSoC logo light"
                  />
                ) : (
                  <img
                    style={{ width: "200px" }}
                    id="Learn_more"
                    src="/WoB/WOB_White.png"
                    alt="GSSoC logo dark"
                  />
                )}
              </span>
            </a>
          </Link>
        </div>
        <button
          className="inline-flex p-2.5 hover:bg-[#00008B] rounded lg:hidden text-grey-700 dark:text-white"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? " " : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto text-center`}
        >
          <div className="flex flex-col lg:flex-row lg:ml-auto lg:w-auto items-center mr-6">
            <Link href="/wob#about-wob">
              <a
                onClick={handleClick}
                className="lg:inline-flex lg:w-auto w-full px-2 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-[#00008B] dark:hover:text-[#00008B] hover:text-lg transition-all link link-underline link-underline-black-wob"
              >
                ABOUT
              </a>
            </Link>
            <a
              onClick={handleClick}
              href={`${gssocLink}/`}
              className="lg:inline-flex lg:w-auto w-full px-2 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-[#00008B] dark:hover:text-[#00008B] hover:text-lg transition-all link link-underline link-underline-black-wob"
            >
              GSSoC
            </a>
            <Link href="/wobProject">
              <a
                onClick={handleClick}
                className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-[#00008B] dark:hover:text-[#00008B] hover:text-lg transition-all link link-underline link-underline-black-wob"
              >
                PROJECT
              </a>
            </Link>
            <Link href="/wobLeaderboard">
              <a
                onClick={handleClick}
                className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-[#00008B] dark:hover:text-[#00008B] hover:text-lg transition-all link link-underline link-underline-black-wob"
              >
                LEADERBOARD
              </a>
            </Link>
            <Link href="/wobTeam">
              <a
                onClick={handleClick}
                className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-[#00008B] dark:hover:text-[#00008B] hover:text-lg transition-all link link-underline link-underline-black-wob"
              >
                TEAM
              </a>
            </Link>
            <Link href="/wobJobfair">
              <a className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-[#00008B] dark:hover:text-[#00008B] hover:text-lg transition-all link link-underline link-underline-black-wob cursor-pointer">
                JOB FAIR
              </a>
            </Link>
            <Link href="/wobFaq">
              <a className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-[#00008B] dark:hover:text-[#00008B] hover:text-lg transition-all link link-underline link-underline-black-wob cursor-pointer">
                FAQ
              </a>
            </Link>
            <a
              onClick={handleClick}
              className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-[#00008B] dark:hover:text-[#00008B] hover:text-lg transition-all link link-underline link-underline-black-wob cursor-pointer"
            >
              BLOG
            </a>
            <a
              onClick={handleClick}
              href="/wobContact"
              className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-[#00008B] dark:hover:text-[#00008B] hover:text-lg transition-all link link-underline link-underline-black-wob cursor-pointer"
            >
              CONTACT
            </a>
            <div className="lg:inline-flex lg:w-auto w-full px-2 text-center rounded">
              <MoreMenu handleClick={handleClick} />
            </div>
            <div className="hidden lg:block">
              <Tooltip label="Change Theme" placement="bottom">
                <div>
                  <ThemeChanger />
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
