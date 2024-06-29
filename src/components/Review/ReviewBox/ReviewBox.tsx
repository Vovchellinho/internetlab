import { useRef } from "react";
import styles from "./style.module.css";
import ReviewItem from "../ReviewItem.tsx";
import { TReview } from "../ReviewItem.tsx/ReviewItem";
import Avatar1 from "@images/avatar1.png";
import Avatar2 from "@images/avatar2.png";
import Avatar3 from "@images/avatar3.png";

const reviews: TReview[] = [
	{
		id: 1,
		name: 'Иван Иванов',
		avatar: Avatar1,
		city: 'Санкт-Петербург, ИП Иванов',
		reviewText: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.'
	},
	{
		id: 2,
		name: 'Иван Иванов',
		avatar: Avatar2,
		city: 'Санкт-Петербург',
		reviewText: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.'
	},
	{
		id: 3,
		name: 'Артем Корнилов',
		avatar: Avatar3,
		city: 'Самара',
		reviewText: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.'
	},
	{
		id: 4,
		name: 'Иван Иванов',
		avatar: Avatar1,
		city: 'Санкт-Петербург, ИП Иванов',
		reviewText: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.'
	},
	{
		id: 5,
		name: 'Иван Иванов',
		avatar: Avatar2,
		city: 'Санкт-Петербург',
		reviewText: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.'
	}	
]

const ReviewBox = () => {
	const boxRef = useRef<HTMLDivElement>(null);
	const itemRef = useRef<HTMLLIElement>(null);

	const nextItem = () => {
		if (boxRef.current!.scrollLeft + boxRef.current!.clientWidth  < boxRef.current!.scrollWidth - itemRef.current!.clientWidth) {
			boxRef.current!.scrollLeft = boxRef.current!.scrollLeft + itemRef.current!.clientWidth;
		} else {
			boxRef.current!.scrollLeft = 0;
		}
	}

	const prevItem = () => {
		if (boxRef.current!.scrollLeft !== 0) {
			boxRef.current!.scrollLeft = boxRef.current!.scrollLeft - itemRef.current!.clientWidth;
		} else {
			boxRef.current!.scrollLeft = boxRef.current!.scrollWidth;
		}
	};

	return(
		<div className={styles.containerReviewBox}>
			<div className={styles.containerArrow + ' ' + styles.leftArrow}>
				<div className={styles.arrow} onClick={prevItem} />
			</div>
			<div className={styles.container} ref={boxRef}>
				{reviews.map((item) =>
					<li key={item.id} className={styles.itemReview} ref={itemRef}>
						<ReviewItem {...item} />
					</li>

				)}
			</div>
			<div className={styles.containerArrow}>
				<div className={styles.arrow} onClick={nextItem} />
			</div>
		</div>

	);
}

export default ReviewBox;
