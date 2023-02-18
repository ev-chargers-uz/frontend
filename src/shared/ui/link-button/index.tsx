import { mergeProps } from "solid-js";
import styles from "./styles.module.scss";

export interface LinkButtonProps {
	children: string,
	link?: string,
	target?: "_blank" | "_self",
	type?: "primary" | "secondary",
}

export const LinkButton = (props: LinkButtonProps) => {
	const merged = mergeProps( {target: "_self", type: "primary"}, props );

	if (merged.type === "primary") return (
		<a href={props.link} target={merged.target} rel="noopener" class={styles.linkButtonPrimary}>
			{props.children}
		</a>
	);

	if (merged.type === "secondary") return (
		<a href={props.link} target={merged.target} rel="noopener" class={styles.linkButtonSecondary}>
			{props.children}
		</a>
	);
}
