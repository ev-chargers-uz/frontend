import type { JSX } from "solid-js";
import styles from "./styles.module.scss";

export interface ContainerProps {
	children: JSX.Element | JSX.Element[],
}

export const Container = (props: ContainerProps) => {
	return (
		<div class={styles.container}>
			{props.children}
		</div>
	)
}
