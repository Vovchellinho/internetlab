import type { TAnswerQuestion } from "./InteractiveAnswer/InteractiveAnswer";
import InteractiveAnswer from "./InteractiveAnswer";
import styles from "./style.module.css";

const QAA: TAnswerQuestion[] = [
	{
		question: 'Подтверждено: сознание наших соотечественников не замутнено пропагандой?',
		answer: 'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.'
	},
	{
		question: 'Прототип нового сервиса - это как трубный призыв?',
		answer: 'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.'
	},
	{
		question: 'Частокол на границе продолжает удивлять?',
		answer: 'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.'
	},
	{
		question: 'Очевидцы сообщают, что слышали грохот грома градущих изменений?',
		answer: 'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.'
	},
	{
		question: 'И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?',
		answer: 'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.'
	},
	{
		question: 'Нынче никто не может себе позволить инициировать треск разлетающихся скреп?',
		answer: 'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.'
	},
	{
		question: 'Высококачественный прототип будущего проекта обнадёживает?',
		answer: 'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.'
	}
];

const AnswerAndQuestions = () => {
	return (
		<section className={styles.container} id="answer-and-questions-section">
			<div className="center-content">
				<h2>Вопросы и ответы</h2>
				<ul className={styles.questionsList}>
					{QAA.map((item, index) => <li key={'answer-and-question-' + index} className={styles.listItem}>
						<InteractiveAnswer question={item.question} answer={item.answer} />
					</li>)}
				</ul>
			</div>
		</section>
	);
};

export default AnswerAndQuestions;