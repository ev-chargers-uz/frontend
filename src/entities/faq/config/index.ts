import type { faqType } from "../api";

export interface faqConfigType {
	faqList: faqType[],
}

export const faqConfig: faqConfigType = {
	faqList: [
		{
			question: "1 I need help and guidance with EV charging, can you help?",
			answer: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		},
		{
			question: "2 I need help and guidance with EV charging, can you help?",
			answer: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		},
		{
			question: "3 I need help and guidance with EV charging, can you help?",
			answer: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		},
	],
}
