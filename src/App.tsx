import AnswerAndQuestions from "@components/AnswersAndQuestion";
import Header from "@components/Header";
import HowItWorks from "@components/HowItWorks";
import Review from "@components/Review";
import MoreInfo from "@components/MoreInfo";

const App = () => {
	return (
		<>
			<Header />
			<main>
				<HowItWorks />
				<Review />
				<AnswerAndQuestions />
				<MoreInfo />
			</main>
		</>
	);
}

export default App;
