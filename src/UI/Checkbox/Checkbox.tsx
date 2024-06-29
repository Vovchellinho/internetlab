import type {
	InputHTMLAttributes,
	ReactNode
} from "react";
import styles from "./style.module.css";

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	children?: ReactNode | string;
};

const Checkbox = ({children, ...props}: ICheckboxProps) => {
	return (
		<label className={styles.checkboxContainer}>
			<input type="checkbox" {...props} className={styles.inputContainer} />
			{children && <span className={styles.labelText}>{children}</span>}
		</label>
	);
};

export default Checkbox;