import { useEffect, useState } from "react";
import styles from "./style.module.css";

interface IScrollPoints {
	maximum: number;
	active: number;
}

const ScrollPoints = ({maximum, active}: IScrollPoints) => {
	const [points, setPoints] = useState<number[]>([]);

	useEffect(() => {
		const temp: number[] = [];
		for (let i = 0; i < maximum; i++) {
			temp.push(i);
		} 
		setPoints(temp)
	}, [maximum]);
	return (
		<>
			{ points.length > 0 &&
				<ul className={styles.listPoints}>
					{ points.map((_, index) => <li key={index} className={styles.point + (active === index ? (' ' + styles.active) : '')} />) }
				</ul>
			}
		</>
	);
};

export default ScrollPoints;