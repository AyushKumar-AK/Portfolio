import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Expense Tracker",
    description:
      "Expense Tracker is a web app that helps people in managing their finances and tracking their exact expenses through a user friendly dashboard.",
    image: "/expense_tracker.png",
    github: "https://github.com/AyushKumar-AK/Expense_Tracker",
    link: "https://github.com/AyushKumar-AK/Expense_Tracker",
  },
  {
    name: "Cryptonics",
    description: "This project is a front-end web application for Automatic Number Plate Recognition technology. It allows users to upload an image of a vehicle's license plate. The application also provides information on the make and model of the vehicle, as well as the time and location where the image was taken.",
    image: "/anpr.jpg",
    github: "https://github.com/AyushKumar-AK/Cryptonics",
    link: "https://cryptonics-anpr.netlify.app/",
  },
  {
    name: "Blogging Website",
    description: "A blog application built using Node.js and Express. The application allows users to view a list of blog posts, read individual posts, create new posts, and delete existing posts.",
    image: "/blog.png",
    github: "https://github.com/AyushKumar-AK/Blog_Website2",
    link: "https://github.com/AyushKumar-AK/Blog_Website2",
  },

]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
