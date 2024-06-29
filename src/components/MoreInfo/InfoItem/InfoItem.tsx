import styles from "./style.module.css";

export type TInfo = {
	header: string;
	text: string;
};

interface IInfoItemProps extends TInfo {};

const InfoItem = ({header, text}: IInfoItemProps) => {
	return (
		<div className={styles.container}>
			<h3>{header}</h3>
			<p>{text}</p>
		</div>
	);
};

export default InfoItem;