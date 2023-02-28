import { config } from "@shared/config";
import styles from "./styles.module.scss";

export const FooterBottom = () => {
	return (
		<div class={styles.footerBottom}>
			<p class={styles.text}>EV ON. {new Date().getFullYear()}</p>
			<div class={styles.logosWrapper}>
				<a href={config.company.facebook} target="_blank" rel="noopener"><img src="/icons/facebook.svg" alt="icon" class={styles.logo} /></a>
				<a href={config.company.youtube} target="_blank" rel="noopener"><img src="/icons/youtube.svg" alt="icon" class={styles.logo} /></a>
				<a href={config.company.instagram} target="_blank" rel="noopener"><img src="/icons/instagram.svg" alt="icon" class={styles.logo} /></a>
				<a href={config.company.twitter} target="_blank" rel="noopener"><img src="/icons/twitter.svg" alt="icon" class={styles.logo} /></a>
			</div>
		</div>
	)
}
