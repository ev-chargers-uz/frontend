import type { newsType } from "../api";

export interface newsConfigType {
	news: newsType[],
}

export const newsConfig: newsConfigType = {
	news: [
		{
			image: "/images/news/news01.png",
			title: "News name",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
			link: "/"
		},
		{
			image: "/images/news/news02.png",
			title: "News name",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
			link: "/"
		},
		{
			image: "/images/news/news03.png",
			title: "News name",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
			link: "/"
		}
	],
}
