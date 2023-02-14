import type { JSX } from "solid-js";

export interface MainHeaderProps {
	navbar?: JSX.Element;
}

export const MainHeader = (props: MainHeaderProps) => {
	return (
		<header>
			logo
			{props.navbar}
			buttons
		</header>
	)
}
