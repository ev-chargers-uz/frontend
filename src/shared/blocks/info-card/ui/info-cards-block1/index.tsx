import { Container } from "@shared/ui";
import { InfoCard } from "../info-card";
import styles from "./styles.module.scss";

export const InfoCardsBlock1 = () => {
	return (
		<Container>
			<section>
				<h3 class={styles.title}>We build ecosystem</h3>
				<div class={styles.cards}>
					<InfoCard
						image="/images/info01.png"
						title="CMS solution"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
					/>
					<InfoCard
						image="/images/info02.png"
						title="Mobile application"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
					/>
				</div>
			</section>
		</Container>
	)
}
