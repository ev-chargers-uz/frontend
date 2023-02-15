import { mergeProps } from "solid-js"

export interface LogoProps {
	width?: number,
	height?: number,
	image: string,
	link?: string,
	target?: "_blank" | "_self",
}

export const Logo = (props: LogoProps) => {
	const merged = mergeProps( {target: "_self"}, props );

	return (
		<a href={props.link} target={merged.target} rel="noopener">
			<img
				src={props.image}
				width={props.width}
				height={props.height}
				alt="logo"
			/>
		</a>
	)
}
