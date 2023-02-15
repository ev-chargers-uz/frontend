import type { JSX } from "solid-js";

export interface HeaderProps {
	navbar?: JSX.Element;
}

export const Header = (props: HeaderProps) => {
	return (
		<header>
			logo
			{props.navbar}
			buttons
		</header>
	)
}
