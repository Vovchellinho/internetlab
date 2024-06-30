import { useContext } from "react";
import { DrawerContext } from "./Drawer";

const useDrawer = () => {
	const {hide, setShow, getShow} = useContext(DrawerContext);

	const show = () => {
		setShow(true);
	};

	return {
		show,
		hide,
		getShow
	}
};

export default useDrawer;