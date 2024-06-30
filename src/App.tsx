import AnswerAndQuestions from "@components/AnswersAndQuestion";
import Header from "@components/Header";
import HowItWorks from "@components/HowItWorks";
import Review from "@components/Review";
import MoreInfo from "@components/MoreInfo";
import Form from "@components/Form";
import Footer from "@components/Footer";
import Drawer from "@components/Drawer";
import Menu from "@components/Burger/Menu";

const App = () => {
	return (
		<Drawer component={() => <Menu />}>
			<Header />
			<main>
				<HowItWorks />
				<Review />
				<AnswerAndQuestions />
				<MoreInfo />
				<Form />
			</main>
			<Footer/>
		</Drawer>
	);
}

export default App;
