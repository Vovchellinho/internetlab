import type { ButtonHTMLAttributes } from "react";
import styles from "./style.module.css";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	mode?: 'light' | 'blue';
};

const Button = ({mode = 'light', ...props}: IButtonProps) => {
	return (
		<button {...props} className={styles.buttonContainer + (mode === 'blue' ? (' ' + styles.blueButton) : '')}>
			<span>{props.value}</span>
		</button>
	);
};

export default Button;