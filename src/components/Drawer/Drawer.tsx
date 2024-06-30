import {
	useRef,
	forwardRef,
	useImperativeHandle,
	type AllHTMLAttributes,
	createContext,
	type ReactNode
} from "react";
import styles from "./style.module.css";

export type TDrawer = {
	setShow(status: boolean): void;
	hide(): void;
	getShow(): boolean;
}

interface IDrawer extends AllHTMLAttributes<HTMLDivElement> {
	component?: (args: TDrawer) => ReactNode;
}

export const DrawerContext = createContext<TDrawer>({
	setShow: (status: boolean) => {},
	hide: () => {},
	getShow: () => false
});

const Drawer = forwardRef<TDrawer, IDrawer>(({children, component, ...props}, ref) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const isShow = useRef<boolean>(false);

	const setShow = (status: boolean) => {
		const element = containerRef.current;
		status ? element?.classList.add(styles.active) : element?.classList.remove(styles.active);
		isShow.current = status;
	};

	const hide = () => {
		setShow(false);
	};

	const getShow = () => {
		return isShow.current;
	};

	const control: TDrawer = {
		setShow: setShow,
		hide: hide,
		getShow: getShow,
	};

	useImperativeHandle(ref, () => control);

	return(<DrawerContext.Provider value={{
		setShow,
		getShow,
		hide
	}}>
		{children}
		<div className={styles.container} ref={containerRef}>
			<div className={styles.blur} onClick={hide}/>
			<div {...props} className={styles.drawer} style={{...props.style}}>
				<div className={styles.cross} onClick={hide}>&#10006;</div>
				{typeof component === 'function' ? component(control) : component}
			</div>
		</div>
	</DrawerContext.Provider>);
});

export default Drawer;