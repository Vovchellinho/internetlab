import styles from "./style.module.css";

interface ILogoProps {
	mode?: 'burger' | 'header';
}

const Logo = ({mode = 'header'}: ILogoProps) => {
	return (
		<div className={styles.logoContainer}>
			<div className={styles.logo + (mode === 'burger' ? (' ' + styles.burgerMode) : '')}>
				<span className={styles.blue}/>
				<span className={styles.white}/>
			</div>
			<span>testLab</span>
		</div>
	);
};

export default Logo;