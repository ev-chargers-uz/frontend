import { Advantage } from "./advantage";
import styles from "./styles.module.scss";

export const Advantages = () => {
	return (
		<section>

			<h3 class={styles.title}>Our advantages</h3>
			<div class={styles.advantages}>
				<Advantage />
				<Advantage />
				<Advantage />
			</div>
			<button>Learn more</button>

		</section>
	)
}
