import { LinksCard } from "../links-card";
import styles from "./styles.module.scss";

export const FooterTop = () => {
	return (
		<div class={styles.footerTop}>
			<p class={styles.text}>Charge your car faster <br /> and cheaper with us</p>
			<LinksCard
				title="About"
				links={[
					{
						text: "Products",
					},
					{
						text: "Drivers",
					},
					{
						text: "Business",
					},
					{
						text: "Blog",
					},
				]}
			/>
			<LinksCard
				title="Information"
				links={[
					{
						text: "Contact us",
					},
					{
						text: "About us",
					},
					{
						text: "Return & Refund policy",
					},
					{
						text: "Cookie policy",
					},
				]}
			/>
			<LinksCard
				title="Contacts"
				links={[
					{
						text: "+998 92 452 29 29",
					},
					{
						text: "mail@gigawatt.com",
					},
					{
						text: "3876 Tashkent, Amir Temur st. 27, 3",
					},
				]}
			/>
		</div>
	)
}
