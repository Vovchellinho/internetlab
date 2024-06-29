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
			</main>
		</>
	);
}

export default App;
