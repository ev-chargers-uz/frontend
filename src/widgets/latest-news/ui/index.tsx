import { Container, LinkButton } from "@shared/ui";
import { NewsCard, newsConfig } from "@entities/news";
import styles from "./styles.module.scss";

export const LatestNews = () => {
	return (
		<Container>
			<section class={styles.section}>
				<h3 class={styles.title}>The latest news</h3>
				<div class={styles.news}>
					{
						newsConfig.news.slice(-3).map( (news) => {
							return (
								<NewsCard
									image={news.image}
									title={news.title}
									description={news.description}
									link={news.link}
								/>
							)
						})
					}
				</div>
				<LinkButton type="secondary">Learn more</LinkButton>
			</section>
		</Container>
	)
}
