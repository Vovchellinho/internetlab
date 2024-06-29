import ListItem from "./ListItem";
import Mobile from "@images/mobile.png";
import styles from "./style.module.css";

const HowItWorks = () => {
	return (
		<section>
			<div className="center-content">
				<h2 className={styles.header}>Как это работает</h2>
				<ul className={styles.listItems}>
					<ListItem mode="waiting" />
					<ListItem mode="deliveryTrack" />
					<ListItem mode="secure" />
					<ListItem mode="moneyBags" />
				</ul>
				<div className={styles.thirdBlock}>
					<div className={styles.textBlock}>
						<h3>Круто, ты дошел до третьего блока</h3>
						<p>63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.</p>
						<p>Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.</p>
					</div>
					<div className={styles.trackBlock}>
						<img src={Mobile} alt="Человек, опирающийся на большой смартфон" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;