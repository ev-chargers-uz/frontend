import type { faqType } from "../../api";

export const FaqCard = (props: faqType) => {
	return (
		<details>
			<summary>{props.question}</summary>
			{props.answer}
		</details>
	)
}
