import { Container, LinkButton } from "@shared/ui";
import styles from "./styles.module.scss";

export const Block1 = () => {
	return (
		<section class={styles.section}>
			<Container>

				<div class={styles.wrapper}>
					<h2 class={styles.title}>Personal Use</h2>
					<p class={styles.text}>Charge up faster with our home EV chargers easy to install, smart features, robust & reliable, and can charge all electric vehicles</p>
					<p class={styles.text}>Installation + support included</p>
					<LinkButton>Shop now</LinkButton>
				</div>

			</Container>
		</section>
	)
}
