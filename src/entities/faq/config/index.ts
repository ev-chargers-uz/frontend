import type { faqType } from "../api";

export interface faqConfigType {
	faqList: faqType[],
}

export const faqConfig: faqConfigType = {
	faqList: [
		{
			question: "I need help and guidance with EV charging, can you help?",
			answer: "",
		},
		{
			question: "I need help and guidance with EV charging, can you help?",
			answer: "",
		},
		{
			question: "I need help and guidance with EV charging, can you help?",
			answer: "",
		},
	],
}
