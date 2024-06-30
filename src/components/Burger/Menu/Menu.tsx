import Logo from "@components/Logo";
import styles from "./style.module.css";
import { useDrawer } from "@components/Drawer";

const Menu = () => {
	const { hide } = useDrawer();

	return (
		<div className={styles.container}>
			<div className={styles.logoContainer}>
				<Logo mode="burger" />
			</div>
			<ul className={styles.navigationLinks}>
				<li onClick={hide}><a href="#how-it-works-section">Как это работает</a></li>
				<li onClick={hide}><a href="#review-section">3-й блок</a></li>
				<li onClick={hide}><a href="#answer-and-questions-section">Вопросы и ответы</a></li>
				<li onClick={hide}><a href="#form-section">Форма</a></li>
			</ul>
			
		</div>
	);
};

export default Menu;