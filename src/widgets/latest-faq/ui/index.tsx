import { FaqCard, faqConfig } from "@entities/faq";
import { Container } from "@shared/ui";
import styles from "./styles.module.scss";

export const LatestFaq = () => {
	return (
		<Container>
			<section>
				<h3 class={styles.title}>Frequently Asked Questions</h3>
				<div class={styles.faqs}>
					{
						faqConfig.faqList.slice(-3).map( (faq) => {
							return (
								<FaqCard
									question={faq.question}
									answer={faq.answer}
								/>
							)
						})
					}
				</div>
			</section>
		</Container>
	)
}
