import { Container } from "@shared/ui";
import styles from "./styles.module.scss";

export const ChargersMap = () => {
	return (
		<Container>
			<section>
				<h3 class={styles.title}>Map with  our chargers</h3>
				<img src="/images/map01.png" alt="map" class={styles.map} />
			</section>
		</Container>
	)
}
