import { Logo } from "@entities/company";
import { AuthButton } from "@features/auth-button";
import { ChangeLang } from "@features/change-lang";
import type { JSX } from "solid-js";
import styles from "./styles.module.scss";

export interface HeaderProps {
	navbar?: JSX.Element;
}

export const Header = (props: HeaderProps) => {
	return (
		<header class={styles.header}>
			<Logo />
			{props.navbar}
			<ChangeLang />
			<AuthButton />
		</header>
	)
}