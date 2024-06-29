import Button from "@UI/Button";
import styles from "./style.module.css";

const Header = () => {
	return (
		<header className={styles.headerContainer}>
			<div className="center-content">
				<nav className={styles.navigation}>
					<span>testLab</span>
					<ul className={styles.navigationLinks}>
						<li><a href="/">Как это работает</a></li>
						<li><a href="/">3-й блок</a></li>
						<li><a href="/">Вопросы и ответы</a></li>
						<li><a href="/">Формы</a></li>
					</ul>
				</nav>
				<div className={styles.content}>
					<div className={styles.textBlock}>
						<div className={styles.text}>
							<h1>Говорят, никогда не поздно сменить профессию</h1>
							<p>Сделай круто тестовое задание и у тебя получится</p>
						</div>
						<Button value="Проще простого!" type="button" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;