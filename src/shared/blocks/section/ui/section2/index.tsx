import { Container, LinkButton } from "@shared/ui";
import styles from "./styles.module.scss";

export const Section2 = () => {
	return (
		<section class={styles.section}>
			<Container>

				<div class={styles.wrapper}>
					<h2 class={styles.title}>Business solutions</h2>
					<p class={styles.text}>Our chargers are intelligent, durable, and quietly charging electric vehicles for decades to come. We offer a full range of deployment configurations and integrated management platform</p>
					<LinkButton>Learn more</LinkButton>
				</div>

			</Container>
		</section>
	)
}
