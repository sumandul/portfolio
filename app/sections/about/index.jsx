"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			{/* <section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							My name is Vasile. I successfully graduated Technical University of Moldova, computer
							science faculty.
						</p>
						<p>
							During my university years, I developed a deep passion for web programming, and I
							consistently engaged in learning new concepts and techniques in this field.
						</p>
						<p>So, officially, my programming journey began in 2017 as a WordPress developer.</p>
						<p className="my-3.5">
							I enjoy learning technologies that interest me, which is why I dedicated a significant
							amount of time to working with WordPress.
						</p>
						<p>
							One day, I decided to try something new, and I started learning React. I was so
							excited to see how fast I can build a website with it, and how easy it is to maintain
							it. Consequently, I quickly learnt Next.js and I used it to build some company
							projects working in a team with a backend dev.
						</p>
						<p className="my-3.5">
							In december 2023, I had an opportunity to start working as a React developer for a
							company with the possibility of transitioning to mobile development. I was skeptical
							about it at first, but I decided to give it a try, and I don&lsquo;t regret it. Now, I
							thoroughly enjoy working with Flutter and Dart.
						</p>
					</div>
				</div>

				<TimeLine />
			</section> */}
			<div className="  grid grid-cols-2">
				<div className=" border-l-[2px]  px-8   border-[#44B24A]">
					<div>
						<h2 className="  font-bold text-2xl">My Experience</h2>
						<div className=" mt-5 border-l-[2px] px-5   border-[#44B24A]">

							<h3 className=" text-xl  font-semibold">

								Web development Training
							</h3>
							<span className=" text-sm  text-green-200">		Brodway Infosys / April 2020 - Aug 2020</span>

						</div>
						<div className=" mt-5 border-l-[2px] px-5   border-[#44B24A]">

							<h3 className=" text-xl  font-semibold">

								Front-End Developer
							</h3>
							<span className=" text-sm  text-green-200">		Supreme IT Solution Pvt Ltd / Jan 2021 - April 2022</span>

						</div>
						<div className=" mt-5 border-l-[2px] px-5   border-[#44B24A]">

<h3 className=" text-xl  font-semibold">

	React /Next JS Developer
</h3>
<span className=" text-sm  text-green-200">Zapp Services Pvt Ltd / Jun 2022  - Present</span>

</div>
					</div>
				</div>

				<div className=" border-l-[2px] h-[5rem] px-8   border-[#44B24A]">
					<div>
						<h2 className="  font-bold text-2xl">My Educatiom</h2>
						<div className=" mt-5 border-l-[2px] h-[5rem] px-5   border-[#44B24A]">

							<h3 className=" text-xl  font-semibold">

								Bachlor in Computer Science and Information Technology(Bsc CSIT)
							</h3>
							<span className=" text-sm  text-green-200">		Patan Multipal Campus / 2018 - 2022</span>

						</div>
					</div>
				</div>
				<div>

				</div>
			</div>
		</LazyMotion>
	);
}
