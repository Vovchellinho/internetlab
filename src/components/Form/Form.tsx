import Button from "@UI/Button";
import styles from "./style.module.css";
import Input from "@UI/Input";

const Form = () => {
	return (
		<section className={styles.container}>
			<div className="center-content">
				<h2>Отправь форму</h2>
				<form className={styles.form}>
					<div className={styles.formRow}>
						<Input placeholder="Имя"/>
						<Input placeholder="Телефон"/>
					</div>
					<div className={styles.formRow}>
						<Input type="checkbox" value="Согласен, отказываюсь" />
						<div>
							<Button mode="blue" value="Отправить" />
						</div>
					</div>
					
				</form>
			</div>
		</section>
	);
};

export default Form;