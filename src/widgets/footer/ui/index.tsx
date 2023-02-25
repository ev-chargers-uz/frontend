import { Container } from "@shared/ui";
import { FooterBottom } from "./footer-bottom";
import { FooterTop } from "./footer-top";

export const Footer = () => {
	return (
		<Container>
			<footer>
				<FooterTop />
				<FooterBottom />
			</footer>
		</Container>
	)
}
