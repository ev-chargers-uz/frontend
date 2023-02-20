import { Container, LinkButton } from "@shared/ui";
import { NewsCard, newsConfig } from "@entities/news";
import styles from "./styles.module.scss";
import { For } from "solid-js";

export const LatestNews = () => {
	return (
		<Container>
			<section class={styles.section}>
				<h3 class={styles.title}>The latest news</h3>
				<div class={styles.news}>

					<For each={newsConfig.news.slice(-3)}>{ (news, index) =>
						<NewsCard
							image={news.image}
							title={news.title}
							description={news.description}
							link={news.link}
						/>
					}</For>

				</div>
				<LinkButton type="secondary">Learn more</LinkButton>
			</section>
		</Container>
	)
}
