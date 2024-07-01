import {
	forwardRef,
	useImperativeHandle,
	memo,
	type ChangeEvent,
	type InputHTMLAttributes,
	useState
} from "react";
import type { TInputRef } from "@UI/Checkbox/Checkbox";
import styles from "./style.module.css";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	onChangeText?: (value: string) => void;
};

const Input = forwardRef<TInputRef, IInputProps>(({placeholder, onChangeText, ...props}, ref) => {
	const [error, setError] = useState('');
	
	const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
		setError('');
		if (typeof onChangeText === 'function') {
			onChangeText(e.target.value);
		}
	}

	useImperativeHandle(ref, () => ({
		setError
	}), []);

	return (
		<div className={styles.container + (error ? (' ' + styles.hasError) : '')}>
			<input type="text" id="username" autoComplete="off" required onChange={onChangeValue} {...props} />
			{ placeholder && <label className={styles.textLabel}>{placeholder}</label>}
			<span className={styles.error}>{error}</span>
		</div>
	);
});

export default memo(Input);