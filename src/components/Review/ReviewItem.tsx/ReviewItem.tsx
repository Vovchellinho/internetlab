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
			<div className={styles.header}>
				<img src={review.avatar} alt={`Аватар пользователя ${review.name}`} />
				<div>
					<div className={styles.name}>{review.name}</div>
					<div className={styles.city}>{review.city}</div>
				</div>
			</div>
			<p>{review.reviewText}</p>
		</div>
	);
};

export default ReviewItem;