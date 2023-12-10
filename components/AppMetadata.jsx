const author = "suman dulal";
const description =
	"Software developer  who loves to develop beautiful websites, single page applications, customer relationship management or code from scratch using React and Next.js";
const url = "https://portfolio-sumandul.vercel.app/";
export const AppMetadata = {
	metadataBase: new URL("hhttps://portfolio-sumandul.vercel.app/"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"suman dulal",
		"suman dulal- software developer",
		"Frontend developer",
		"Full Stack developer",
		"Portfolio website",
		"Frontend Developer Portfolio",
		"Next JS Developer",
		"React JS Developer",
		"Node JS",
		"Express JS Developer",
		"Web Developer",
		"ApI Developer",
		"Backend Developer"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "https://portfolio-sumandul.vercel.app/sss.png",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "https://portfolio-sumandul.vercel.app/sss.png",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
