import styles from "./style.module.css";
export type TReview = {
	id: number;
	avatar: string;
	city: string;
	name: string;
	reviewText: string;
};

interface TReviewItemProps extends TReview {};

const ReviewItem = ({...review}: TReviewItemProps) => {
	return (
		<div className={styles.reviewContainer}>
			<h3>{review.name}</h3>
			<p>{review.reviewText}</p>
		</div>
	);
};

export default ReviewItem;