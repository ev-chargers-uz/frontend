import styles from "./styles.module.scss";

export const Navbar = () => {
	return (
		<nav>
			<ul class={styles.navList}>
				<li class={styles.listItem}>
					<a href="/products" class={styles.link}>Products</a>
				</li>
				<li class={styles.listItem}>
					<a href="/drivers" class={styles.link}>Drivers</a>
				</li>
				<li class={styles.listItem}>
					<a href="/business" class={styles.link}>Business</a>
				</li>
				<li class={styles.listItem}>
					<a href="/about" class={styles.link}>About us</a>
				</li>
				<li class={styles.listItem}>
					<a href="/blog" class={styles.link}>Blog</a>
				</li>
			</ul>
		</nav>
	)
}
