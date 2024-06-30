import Button from "@UI/Button";
import styles from "./style.module.css";

const Header = () => {
	return (
		<header className={styles.headerContainer}>
			<div className="center-content">
				<nav className={styles.navigation}>
					<div className={styles.logoContainer}>
						<div className={styles.logo}>
							<span className={styles.blue}/>
							<span className={styles.white}/>
						</div>
						<span>testLab</span>
					</div>
					<ul className={styles.navigationLinks}>
						<li><a href="#how-it-works-section">Как это работает</a></li>
						<li><a href="#review-section">3-й блок</a></li>
						<li><a href="#answer-and-questions-section">Вопросы и ответы</a></li>
						<li><a href="#form-section">Форма</a></li>
					</ul>
					<div className={styles.drawerButton}>
						<div />
						<div />
					</div>
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