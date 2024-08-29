import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Footer = () => {
  const router = useRouter();
  const [isWobRoute, setIsWobRoute] = useState(false);

  useEffect(() => {
    if (router.asPath.startsWith("/wob")) {
      setIsWobRoute(true); // set it to true if you launch the website
    } else {
      setIsWobRoute(false);
    }
  }, [router.asPath]);

  return (
    <footer id="Contact">
      <div className="footer-2 bg-gradient-to-b from-[#ADD8E6] to-[#00008B] pt-6 md:pt-8">
        <div className="container px-4 mx-auto">
          <div className="md:flex md:flex-wrap justify-center md:-mx-4 py-6 md:pb-8">
            <div className="footer-info pt-10 lg:w-1/3 md:px-4">
              <Link href="https://gssoc.girlscript.tech/contact">
                <img
                  className="cursor-pointer"
                  src="/GS_Foundation_logo_Black.svg"
                  alt="logo"
                />
              </Link>
            </div>

            <div className="md:w-2/3 max-w-[144px] lg:w-1/3 justify-center mt-12 lg:mt-0">
              <div className="sm:flex">
                <div className="sm:flex-1">
                  <h6 className="text-lg font-bold text-white uppercase mt-4 md:mt-0 mb-4 hover:underline">
                    ABOUT GSSOC
                  </h6>
                  <div>
                    <Link href="/wobContact">
                      <span className="font-normal text-white py-1 hover:underline block cursor-pointer">
                        Contact Us
                      </span>
                    </Link>
                    <Link href="/wobCodeofConduct">
                      <a className="font-normal text-white py-1 block hover:underline">
                        Code of Conduct
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 max-w-[480px] md:px-4 md:text-left mt-12 lg:mt-0">
              <h5 className="text-base text-white font-normal mb-4">
                GirlScript is the fastest growing tech-community in India. It is
                a non-profit project brought to you by GirlScript Foundation to
                help beginners in technology. Be a part, spread knowledge &
                happiness.
              </h5>
              <a href="https://www.linkedin.com/company/girlscript-foundation/?originalSubdomain=in">
                <button className="bg-gradient-to-r from-[#ADD8E6] to-[#00008B] text-white rounded py-2 px-4 md:px-12">
                  Explore
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-solid border-gray-900 mt-4 py-4">
          <div className="container px-4 mx-auto">
            <div className="md:flex md:-mx-4 md:items-center">
              <div className="md:flex-1 md:px-4 text-center ">
                <p className="text-white">
                  &copy;{" "}
                  <strong>
                    2024 GirlScript Foundation. Made with 🖤️ by GirlScript
                    India. All rights reserved.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
