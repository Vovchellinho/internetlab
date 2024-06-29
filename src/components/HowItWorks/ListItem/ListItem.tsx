import styles from "./style.module.css";
import DeliveryTrack from "@icons/delivery-truck.png";
import Secure from "@icons/secure.png";
import Waiting from "@icons/waiting.png";
import MoneyBags from "@icons/money-bags.png";

interface IListItemProps {
	mode: TMode;
}

type TMode = 'waiting' | 'deliveryTrack' | 'secure' | 'moneyBags';

type TValueByMode = Record<TMode, string>;

const images: TValueByMode = {
	waiting: Waiting,
	deliveryTrack: DeliveryTrack,
	secure: Secure,
	moneyBags: MoneyBags
}

const headers: TValueByMode = {
	waiting: 'Прочитай задание внимательно',
	deliveryTrack: 'Изучи весь макет заранее',
	secure: 'Сделай хорошо',
	moneyBags: 'Получи предложение'
}

const texts: TValueByMode = {
	waiting: 'Думаю у тебя не займет это больше двух-трех минут',
	deliveryTrack: 'Подумай как это будет работать на разных разрешениях и при скролле',
	secure: 'Чтобы мы могли тебе доверить подобные задачи в будущем',
	moneyBags: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))'
}

const alts: TValueByMode = {
	waiting: 'Стрелка курсора и часы, ассоциирующиеся с изучением макета',
	deliveryTrack: 'Грузовик, ассоциирующийся с перемещениями по всему макету с целью изучения и планирования верстки',
	secure: 'Стрелка вверх, отображающий будущие задачи, и синий щит с галкой, который ассоцируется с тем, что будущие задачи под защитой',
	moneyBags: 'Мешочки с ценностями, которые ассоциируются с полученным предложением'
}

const ListItem = ({mode}: IListItemProps) => {
	return (
		<li className={styles.container}>
			<img src={images[mode]} alt={alts[mode]} />
			<div className={styles.textBlock}>
				<h3>{headers[mode]}</h3>
				<p>{texts[mode]}</p>
			</div>
		</li>
	);
};

export default ListItem;