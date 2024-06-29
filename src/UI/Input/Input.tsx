import type { InputHTMLAttributes } from "react";
import styles from "./style.module.css";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {};

const Input = ({placeholder, ...props}: IInputProps) => {
	return (
		<div className={styles.container}>
			<input type="text" id="username" autoComplete="off" autoFocus required {...props} />
			{ placeholder && <label className={styles.textLabel}>{placeholder}</label>}
		</div>
	);
};

export default Input;