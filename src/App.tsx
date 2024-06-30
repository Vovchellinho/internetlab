import AnswerAndQuestions from "@components/AnswersAndQuestion";
import Header from "@components/Header";
import HowItWorks from "@components/HowItWorks";
import Review from "@components/Review";
import MoreInfo from "@components/MoreInfo";
import Form from "@components/Form";
import Footer from "@components/Footer";

const App = () => {
	return (
		<>
			<Header />
			<main>
				<HowItWorks />
				<Review />
				<AnswerAndQuestions />
				<MoreInfo />
				<Form />
			</main>
			<Footer/>
		</>
	);
}

export default App;
