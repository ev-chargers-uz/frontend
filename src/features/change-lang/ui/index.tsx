import styles from "./styles.module.scss";

export const ChangeLang = () => {
	return (
		<div class={styles.wrapper}>
			<img src="./icons/lang.svg" alt="icon" />
			<select class={styles.select}>
				<option value="en">Eng</option>
				<option value="ru">Rus</option>
				<option value="uz">Uzb</option>
			</select>
		</div>
	)
}
