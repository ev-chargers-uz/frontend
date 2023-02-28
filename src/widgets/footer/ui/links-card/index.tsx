import type { JSX } from "solid-js";
import styles from "./styles.module.scss";

export interface FooterLink {
	text: string | JSX.Element,
	link?: string,
	target?: "_blank" | "_self",
	icon?: string,
}

export interface LinksCardProps {
	title: string,
	links: FooterLink[],
}

export const LinksCard = (props: LinksCardProps) => {
	return (
		<div>
			<span class={styles.title}>{props.title}</span>
			<ul class={styles.list}>
				{
					props.links.map( (link) => {
						return (
							<li class={styles.link}>
								{link.icon && <img src={link.icon} alt="icon" /> }
								<a href={link.link} target={link.target} rel="noopener" class={styles.text}>{link.text}</a>
							</li>
						)
					})
				}
			</ul>
		</div>
	)
}
