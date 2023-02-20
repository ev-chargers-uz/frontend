import type { newsType } from "../../api";
import styles from "./styles.module.scss";

export interface NewsCardProps extends newsType {}

export const NewsCard = (props: NewsCardProps) => {
	return (
		<div class={styles.card}>
			<img src={props.image} alt="cover" class={styles.image} />
			<h4 class={styles.title}>{props.title}</h4>
			<p class={styles.text}>{props.description}</p>
			<a href={props.link} target="_blank" rel="noopener" class={styles.link}>Read more</a>
		</div>
	)
}
