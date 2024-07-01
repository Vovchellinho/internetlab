import Button from "@UI/Button";
import Input from "@UI/Input";
import Checkbox from "@UI/Checkbox";
import {
	useCallback,
	useRef,
	useState,
	type FormEvent
} from "react";
import styles from "./style.module.css";
import type { TInputRef } from "@UI/Checkbox/Checkbox";

type TData = {
	name: string;
	phone: string;
}

const Form = () => {
	const [data, setData] = useState<TData>({
		name: '',
		phone: ''
	});
	const [checked, setChecked] = useState(false);

	const refAgree = useRef<TInputRef>(null);
	const refName = useRef<TInputRef>(null);
	const refPhone = useRef<TInputRef>(null);

	const handleNameChange = useCallback((name: string) => {
		setData((prev) => ({...prev, name}));
	}, []);

	const handlePhoneChange = useCallback((phone: string) => {
		setData((prev) => ({...prev, phone}));
	}, []);

	const fetchData = async (data: TData) => {
		// имитация запроса
		// try {
		// 	const response = await fetch('https://api.test.ru/form', {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 		},
		// 		body: JSON.stringify(data)
		// 	});
		// 	const result = await response.json();
		// } catch (error) {
		// 	console.error('Ошибка:', error);
		// };
		setData({ name: '', phone: ''});
		setChecked(false);
	}

	const submit = (e: FormEvent) => {
		e.preventDefault();
		let error = false;
		if (!checked) {
			if (refAgree.current) {
				refAgree.current.setError("Обязательно для заполнения!");
			}
			error = true;
		};
		if (data.name === '') {
			if (refName.current) {
				refName.current.setError("Обязательно для заполнения!");
			}
			error = true;
		}
		if (data.phone === '') {
			if (refPhone.current) {
				refPhone.current.setError("Обязательно для заполнения!");
			}
			error = true;
		}
		if (!error) {
			fetchData(data);
		}
	};

	return (
		<section className={styles.container} id="form-section">
			<div className="center-content">
				<h2>Отправь форму</h2>
				<form noValidate className={styles.form} onSubmit={submit}>
					<div className={styles.formRow}>
						<Input placeholder="Имя" value={data.name} onChangeText={handleNameChange} ref={refName} />
						<Input placeholder="Телефон" value={data.phone} onChangeText={handlePhoneChange} ref={refPhone} />
					</div>
					<div className={styles.formRow}>
						<Checkbox checked={checked} onChangeValue={setChecked} ref={refAgree}>Согласен, отказываюсь</Checkbox>
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