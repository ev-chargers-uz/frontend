import type { JSX } from "solid-js";

export interface ContainerProps {
	children: JSX.Element | JSX.Element[],
}

export const Container = (props: ContainerProps) => {
	return (
		<div>
			{props.children}
		</div>
	)
}
