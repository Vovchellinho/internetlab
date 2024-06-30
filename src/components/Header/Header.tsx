import Button from "@UI/Button";
import Logo from "@components/Logo";
import Burger from "@components/Burger";
import styles from "./style.module.css";

const Header = () => {
	return (
		<header className={styles.headerContainer}>
			<div className="center-content">
				<nav className={styles.navigation}>
					<Logo />
					<ul className={styles.navigationLinks}>
						<li><a href="#how-it-works-section">Как это работает</a></li>
						<li><a href="#review-section">3-й блок</a></li>
						<li><a href="#answer-and-questions-section">Вопросы и ответы</a></li>
						<li><a href="#form-section">Форма</a></li>
					</ul>
					<Burger />
				</nav>
				<div className={styles.content}>
					<div className={styles.textBlock}>
						<div className={styles.text}>
							<h1>Говорят, никогда не поздно сменить профессию</h1>
							<p>Сделай круто тестовое задание и у тебя получится</p>
						</div>
						<div className={styles.buttonContainer}>
							<Button value="Проще простого!" type="button" />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;