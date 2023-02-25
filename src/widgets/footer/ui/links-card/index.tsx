import { JSX, mergeProps } from "solid-js";
import styles from "./styles.module.scss";

export interface FooterLink {
	text: string | JSX.Element,
	link?: string,
	target?: "_blank" | "_self",
}

export interface LinksCardProps {
	title: string,
	links: FooterLink[],
}

export const LinksCard = (props: LinksCardProps) => {
	const merged = mergeProps( {target: "_self"}, props );

	return (
		<div>
			<span class={styles.title}>{props.title}</span>
			<ul class={styles.list}>
				{
					props.links.map( (link) => {
						return (
							<li>
								<a href={link.link} target={merged.target} rel="noopener" class={styles.text}>{link.text}</a>
							</li>
						)
					})
				}
			</ul>
		</div>
	)
}
