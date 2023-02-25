import styles from "./styles.module.scss";

export interface InfoCardProps {
	image: string,
	title: string,
	text: string,
}

export const InfoCard = (props: InfoCardProps) => {
	return (
		<div class={styles.card}>
			<img src={props.image} alt="cover" class={styles.image} />
			<h4 class={styles.title}>{props.title}</h4>
			<p class={styles.text}>{props.text}</p>
		</div>
	)
}
