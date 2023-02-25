import { Container, LinkButton } from "@shared/ui";
import styles from "./styles.module.scss";

export const Section3 = () => {
	return (
		<section class={styles.section}>
			<Container>

				<div class={styles.wrapper}>
					<h2 class={styles.title}>App for customers</h2>
					<p class={styles.text}>Take control of your charging costs across all locations, monitor monthly charger usage, and every detail & stats of your EV charging needs in app <br /> All this, free of charge</p>
					<LinkButton>Download</LinkButton>
				</div>

			</Container>
		</section>
	)
}
