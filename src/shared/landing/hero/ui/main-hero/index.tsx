import { Container, LinkButton } from "@shared/ui";
import styles from "./styles.module.scss";

export const MainHero = () => {
	return (
		<section class={styles.section}>
			<Container>

			<div class={styles.wrapper}>
				<h1 class={styles.title}>Charge your car with us with faster and safe way</h1>
				<p class={styles.text}>Charge up faster with our home EV chargers easy to install, smart features, robust & reliable, and can charge all electric vehicles</p>
				<LinkButton>Learn more</LinkButton>
			</div>

			</Container>
		</section>
	)
}
