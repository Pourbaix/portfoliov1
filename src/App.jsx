import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "./components/Intro";
// import Portfolio from "./components/Portfolio";
import { lazy, Suspense } from "react";
import styled from "styled-components";

// const Home = lazy(() => import("./components/Home"));
const Portfolio = lazy(() => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(import("./pages/Portfolio")), 5300);
	});
});

function App() {
	return (
		<Suspense fallback={<Intro />}>
			<Router>
				<Routes>
					{/* <Route path="/" element={<Home />} /> */}
					<Route path="/" element={<Portfolio />} />
				</Routes>
			</Router>
		</Suspense>
	);
}

const Loading = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	.loading_content {
		display: flex;
	}
`;

export default App;
