import {
	useEffect,
	useRef,
	useState
} from "react";
import styles from "./style.module.css";
import ReviewItem from "../ReviewItem.tsx";
import { TReview } from "../ReviewItem.tsx/ReviewItem";
import Avatar1 from "@images/avatar1.png";
import Avatar2 from "@images/avatar2.png";
import Avatar3 from "@images/avatar3.png";
import ScrollPoints from "@components/ScrollPoints";

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
	},
	{
		id: 6,
		name: 'Иван Иванов',
		avatar: Avatar3,
		city: 'Санкт-Петербург, ИП Иванов',
		reviewText: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.'
	},
]

const ReviewBox = () => {
	const boxRef = useRef<HTMLDivElement>(null);
	const itemRef = useRef<HTMLLIElement>(null);
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const [extraActive, setExtraActive] = useState(0);
	const [maximum, setMaximum] = useState(0);
	const [active, setActive] = useState(0);

	const nextItem = () => {
		if (boxRef.current!.scrollLeft + boxRef.current!.clientWidth < boxRef.current!.scrollWidth - itemRef.current!.clientWidth / 2) {
			boxRef.current!.scrollLeft = boxRef.current!.scrollLeft + itemRef.current!.clientWidth;
			setExtraActive((prev) => prev + 1);
		} else {
			boxRef.current!.scrollLeft = 0;
			setExtraActive(0);
		}
	}

	const prevItem = () => {
		if (boxRef.current!.scrollLeft !== 0) {
			boxRef.current!.scrollLeft = boxRef.current!.scrollLeft - itemRef.current!.clientWidth;
			setExtraActive((prev) => prev - 1);
		} else {
			boxRef.current!.scrollLeft = boxRef.current!.scrollWidth;
			setExtraActive(maximum - 1);
		}
	};

	const rerenderPoints = () => {
		if(!boxRef.current) return;
		if (boxRef.current) {
			const scrollLeft = boxRef.current.scrollLeft;
			const itemWidth = boxRef.current.children[0].clientWidth;
			const newIndex = Math.round(scrollLeft / itemWidth);
			setExtraActive(newIndex);
		}
	}

	useEffect(() => {
		if (timerRef.current) {
			clearTimeout(timerRef.current);
		}

		timerRef.current = setTimeout(() => {
			setActive(extraActive);
		}, 50);
		
		return () => {
			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}
		}
	}, [extraActive]);

	useEffect(() => {
		const handleResize = () => {
			if (!boxRef.current || !itemRef.current) return;
			const start = Math.round(boxRef.current!.clientWidth / itemRef.current!.clientWidth);
			const numberOfPoints = reviews.length - start + 1;
			setMaximum(numberOfPoints);
		};

		const observerBox = new ResizeObserver(handleResize);

		const boxContainer = boxRef.current;
		
		if (boxContainer) {
			observerBox.observe(boxContainer);
		}

		return () => {
			if (boxContainer) {
				observerBox.unobserve(boxContainer);
			}
		};
	}, []);

	return(
		<div className={styles.containerReviewBox}>
			<div className={styles.containerArrow + ' ' + styles.leftArrow} onClick={prevItem}>
				<div className={styles.arrow} />
			</div>
			<div className={styles.container} ref={boxRef} onScroll={rerenderPoints}>
				{reviews.map((item) =>
					<li key={item.id} className={styles.itemReview} ref={itemRef} id={'review-' + item.id}>
						<ReviewItem {...item} />
					</li>
				)}
			</div>
			<div className={styles.containerArrow} onClick={nextItem}>
				<div className={styles.arrow} />
			</div>
			<div className={styles.scrollPoints}>
				<ScrollPoints maximum={maximum} active={active} />
			</div>
		</div>
	);
}

export default ReviewBox;
