import ReviewBox from "./ReviewBox";
import styles from "./style.module.css";

const Review = () => {
	return (
		<section className={styles.container} id="review-section">
			<div className="center-content">
				<h2>Отзывы</h2>
				<ReviewBox />
			</div>
		</section>
	);
};

export default Review;