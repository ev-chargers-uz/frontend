import { config } from "@shared/config";
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
						link: "/products",
					},
					{
						text: "Drivers",
						link: "/drivers",
					},
					{
						text: "Business",
						link: "/business",
					},
					{
						text: "Blog",
						link: "/blog",
					},
				]}
			/>
			<LinksCard
				title="Information"
				links={[
					{
						text: "Contact us",
						link: "/contacts",
					},
					{
						text: "About us",
						link: "/about",
					},
					{
						text: "Return & Refund policy",
						link: "/return-policy",
						target: "_blank",
					},
					{
						text: "Cookie policy",
						link: "/cookie-policy",
						target: "_blank",
					},
				]}
			/>
			<LinksCard
				title="Contacts"
				links={[
					{
						text: `${config.company.phone}`,
						link:`tel:${config.company.phone}`,
						target: "_blank",
					},
					{
						text: `${config.company.email}`,
						link: `mailto:${config.company.email}`,
						target: "_blank",
					},
					{
						text: <> 3876 Tashkent, Amir <br /> Temur st. 27, 3 </>,
					},
				]}
			/>
		</div>
	)
}
