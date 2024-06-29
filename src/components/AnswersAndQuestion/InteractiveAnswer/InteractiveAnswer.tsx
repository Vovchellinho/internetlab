import { useRef } from "react";
import Plus from "@icons/plus.png";
import styles from "./style.module.css";

export type TAnswerQuestion = {
	question: string;
	answer: string;
}

interface IInteractiveAnswerProps extends TAnswerQuestion {};

const InteractiveAnswer = ({question, answer}: IInteractiveAnswerProps) => {
	const questionRef = useRef<HTMLDivElement>(null);

	const toggleOpen = () => {
		if (!questionRef.current) return;
		questionRef.current.classList.toggle(styles.opened);

	};

	return (
		<div className={styles.container}>
			<div className={styles.questionContainer} onClick={toggleOpen} ref={questionRef}>
				<h3>{question}</h3>
				<div className={styles.status}>
					<img src={Plus} alt="Плюс для раскрытия и скрытия ответа" />
				</div>
			</div>
			<p className={styles.answer}>{answer}</p>
		</div>
	);
};

export default InteractiveAnswer;