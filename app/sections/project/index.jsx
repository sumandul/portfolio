import { Suspense, useRef } from "react";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import Slider from "react-slick";
import Link from "next/link";
import useSWR from "swr";
import { HeadingDivider, Loader } from "components";
import { fetcher } from "utils/fetcher";
import Error from "../../error";
import { ErrorBoundary } from "react-error-boundary";
import { Projects } from "../../projects/components/Projects";
import { SITE_ROUTES } from "../../../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const url = `${process.env.NEXT_PUBLIC_SANITY_URL}${process.env.NEXT_PUBLIC_SANITY_LATEST_PROJECTS}`;

export function ProjectsSection() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    margin: 10,
    arrows: false,
    slidesToScroll: 1,
    nextArrow: false, // Remove the default next arrow
    prevArrow: false, // Remove the default prev arrow
    autoplay: true, // Add autoplay option
    autoplaySpeed: 3000, // Set the autoplay speed in milliseconds (adjust as needed)
    responsive: [
      {
        breakpoint: 768, // Set a breakpoint where you want to change the number of slides shown
        settings: {
          slidesToShow: 1, // Set the number of slides to show at this breakpoint
        },
      },
      // Add more breakpoints and settings as needed
    ],
  };

  const projects = [
    {
      title: "E-Commerce",
      src: "../s.png",
	  toolbar:["React","Next JS" ,"Redex JS","Tailwind"],
	  link:"https://www.salesberry.com.np/"
    },
    {
      title: "RealState",
      src: "../lal1.png",
	  toolbar:["React","Next JS" ,"Redex JS","CSS","Bootstrap"],
	  link:"https://lalpurja.vercel.app/"
    },
 
    {
      title: "FoodMenu",
      src: "../fo.png",
	  toolbar:["React","Next JS" ,"Redex JS","Tailwind"],
	  link:"https://food-hithub-io.vercel.app/"
    },
    {
      title: "IdeaForNepal",
      src: "../ide.png",
	  toolbar:["React","Next JS" ,"Redex JS","Tailwind"],
	  link:"https://ideafornepal.com/"
    }
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section id="projects" className="section">
        <HeadingDivider title="My Projects" />
        <div className="h-10 md:h-14" />

        <Slider {...settings}>
          {projects.map((item, i) => (
            <div key={i}>
              <div className="border-green-500 sm:mx-10 bg-[#2D2C3B] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden p-12 hover:bg-green-100 transform duration-300 shadow-2xl">
                <div className="bg-black">
                  <img src={item.src} alt={item.title} />
                </div>
                <h3 className="text-green-500 text-center font-bold text-2xl mt-10">
                  {item.title}
                </h3>
                <div className="flex justify-center my-10">
                  <div className="flex gap-4  flex-wrap">
					{
						item.toolbar.map((data,i)=> <span key={i} className="bg-[#484A59] p-2 rounded-lg">{data}</span>)
					}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex justify-center w-full">
                    <Link href={item.link}>
                      <button className="border-[2px] border-green-500 text-green-500 rounded-lg px-4 py-2 w-full">
                        Live Preview
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </LazyMotion>
  );
}
