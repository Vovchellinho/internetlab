import { useDrawer } from "@components/Drawer";
import styles from "./style.module.css";

const Burger = () => {
	const {show} = useDrawer();

	const openDrawer = () => {
		show();
	}

	return (
		<div className={styles.drawerButton} onClick={openDrawer}>
			<div />
			<div />
		</div>
	);
};

export default Burger;