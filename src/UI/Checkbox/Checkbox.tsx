import {
	forwardRef,
	useImperativeHandle,
	useState,
	memo,
	type ChangeEvent,
	type InputHTMLAttributes,
	type ReactNode
} from "react";
import styles from "./style.module.css";

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	children?: ReactNode | string;
	onChangeValue?: (value: boolean) => void;
};

export type TInputRef = {
	setError: (error: string) => void;
}

const Checkbox = forwardRef<TInputRef, ICheckboxProps>(({children, onChangeValue, ...props}, ref) => {
	const [error, setError] = useState('');

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setError('');
		if (typeof onChangeValue === 'function') {
			onChangeValue(e.target.checked);
		}
	}

	useImperativeHandle(ref, () => ({
		setError
	}), []);

	return (
		<label className={styles.checkboxContainer + (error ? (' ' + styles.hasError) : '')}>
			<input type="checkbox" {...props} className={styles.inputContainer} onChange={handleOnChange} />
			{children && <span className={styles.labelText}>{children}</span>}
			<span className={styles.error}>{error}</span>
		</label>
	);
});

export default memo(Checkbox);