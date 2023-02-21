import styles from "./styles.module.scss";

export interface AdvantageProps {
	icon: string,
	title: string,
	text: string,
}

export const Advantage = (props: AdvantageProps) => {
	return (
		<div class={styles.advantage}>
			<img src={props.icon} alt="icon" class={styles.icon} />
			<h4 class={styles.title}>{props.title}</h4>
			<p class={styles.text}>{props.text}</p>
		</div>
	)
}
