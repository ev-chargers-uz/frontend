import type { faqType } from "../api";

export interface faqConfigType {
	faqList: faqType[],
}

export const faqConfig: faqConfigType = {
	faqList: [
		{
			question: "I need help and guidance with EV charging, can you help?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		},
		{
			question: "I need help and guidance with EV charging, can you help?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		},
		{
			question: "I need help and guidance with EV charging, can you help?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		},
	],
}
