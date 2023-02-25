import styles from "./styles.module.scss";

export interface DetailsProps {
	question: string,
	answer: string,
}

export const Details = (props: DetailsProps) => {
	return (
		<details class={styles.details}>
			<summary class={styles.summary}>{props.question}</summary>
			{props.answer}
		</details>
	)
}
