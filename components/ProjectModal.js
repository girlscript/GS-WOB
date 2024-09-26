import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";
import { faGitAlt, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const ProjectModal = ({ currProject }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  const btnRef = React.useRef();
  return (
    <div className="w-full absolute bottom-0">
      <button ref={btnRef} onClick={onOpen}
        className=" bg-[#00008B] bg-opacity-80 text-lg text-white dark:text-black font-medium py-1 hover:bg-opacity-100 rounded-b-2xl w-full"
      >
        👉🏻 Project Details
      </button>
      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior="inside"
        size="4xl"
      >
        <ModalOverlay />
        <ModalContent className="dark:bg-darkmode_gray-0 h-96">
          <ModalHeader className="flex items-center ">
            <a
              target="_blank"
              className="text-transparent bg-gradient-to-b from-[#66BFE6] to-[#00008B] bg-clip-text"
              rel="noreferrer"
              href={currProject.projectUrl}>
              {currProject.title}
            </a>
            <p className="ml-4 text-base text-[#00008B]">
              By {currProject.name}
            </p>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={15} /> */}
            <div className="flex flex-row justify-between px-6">
              <a
                target="_blank"
                rel="noreferrer"
                href={currProject.projectUrl}
              >
                <div className="flex items-center bg-[#B9EEFF] px-2 rounded-md ">
                  <img
                    className="w-5 h-5"
                    src="./WoB/gitlogo.png"
                  />
                  <p className="ml-2 font-serif font-medium text-base text-justify text-[#00008B]">
                    Repository Link
                  </p>
                </div>
              </a>
              <div>
                <ModalCloseButton color="#00008B" />
              </div>
            </div>
            <div className="flex flex-col px-6 mt-5">
              <p className="text-[#00008B] font-semibold font-serif text-lg">
                Description
              </p>
              <p className="font-serif mt-4 text-base text-[#2371CD]">
                {currProject.description}
              </p>
            </div>
            {/* <p className="text-primary_orange-0 px-6 mt-5 font-semibold font-serif text-lg">
              Mentors
            </p>
            <div className="flex flex-row flex-wrap px-6 space-x-5 mt-5">
              {currProject.mentors_id.map((mentor, j) => {
                return (
                  <a target="_blank" rel="noreferrer" href={mentor.github} key={j}>
                    <Button
                      key={j}
                      size="sm"
                      colorScheme="black"
                      variant="outline"
                      className="mb-2"
                    >
                      <FontAwesomeIcon
                        className="w-5 h-5 text-black dark:text-white"
                        icon={faGithub}
                        size="2x"
                      />
                      <p className="font-serif text-black font-light dark:text-white">
                        {mentor.name}
                      </p>
                    </Button>
                  </a>
                );
              })}
            </div> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProjectModal;
