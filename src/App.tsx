import AnswerAndQuestions from "@components/AnswersAndQuestion";
import Header from "@components/Header";
import HowItWorks from "@components/HowItWorks";
import Review from "@components/Review";

const App = () => {
	return (
		<>
			<Header />
			<main>
				<HowItWorks />
				<Review />
				<AnswerAndQuestions />
			</main>
		</>
	);
}

export default App;
