import { mergeProps } from "solid-js";
import styles from "./styles.module.scss";

export interface LinkButtonProps {
	children: string,
	link?: string,
	target?: "_blank" | "_self";
}

export const LinkButton = (props: LinkButtonProps) => {
	const merged = mergeProps( {target: "_self"}, props );

	return (
		<a href={props.link} target={merged.target} rel="noopener" class={styles.linkButton}>
			{props.children}
		</a>
	)
}
