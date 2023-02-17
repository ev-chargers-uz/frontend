import { AuthButton } from "@features/auth-button";
import { ChangeLang } from "@features/change-lang";
import { Container, Logo } from "@shared/ui";
import type { JSX } from "solid-js";
import styles from "./styles.module.scss";

export interface HeaderProps {
	navbar?: JSX.Element;
}

export const Header = (props: HeaderProps) => {
	return (
		<Container>
			<header class={styles.header}>

				<Logo image="./logo.svg" link="/" width={133} height={30} />

				<div class={styles.navbar}>
					{props.navbar}
				</div>

				<div class={styles.buttons}>
					<ChangeLang />
					<AuthButton />
				</div>

			</header>
		</Container>
	)
}
