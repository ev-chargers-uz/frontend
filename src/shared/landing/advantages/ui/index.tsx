import { Container } from "@shared/ui";
import { Advantage } from "./advantage";
import styles from "./styles.module.scss";

export const Advantages = () => {
	return (
		<section>
			<Container>

				<h3 class={styles.title}>Our advantages</h3>
				<div class={styles.advantages}>
					<Advantage
						icon="/icons/icon01.png"
						title="Over the country"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
					/>
					<Advantage
						icon="/icons/icon02.png"
						title="NFC Payment"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
					/>
					<Advantage
						icon="/icons/icon03.png"
						title="Super Fast Chargers"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
					/>
				</div>
				<button>Learn more</button>

			</Container>
		</section>
	)
}
