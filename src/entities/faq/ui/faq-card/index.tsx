import { Details } from "@shared/ui";
import type { faqType } from "../../api";

export const FaqCard = (props: faqType) => {
	return (
		<Details
			question={props.question}
			answer={props.answer}
		/>
	)
}
