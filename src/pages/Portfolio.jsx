import styled from "styled-components";
import Header from "../components/Header";
import SocialBar from "../components/SocialBar";
import CornerLogo from "../components/CornerLogo";
import AboutMe from "../components/AboutMe";
// import MyProjects from "./MyProjects";
import Knowledges from "../components/Knowledges";
import Activities from "../components/Activities";
import Loading from "../components/Loading";
import { useEffect, useState, useRef, Suspense, lazy } from "react";

const MyProjects = lazy(() => {
	return new Promise((resolve) => {
		resolve(import("../components/MyProjects"));
	});
});

function Portfolio() {
	const aboutMe = useRef(null);
	const myProjects = useRef(null);
	const knowledges = useRef(null);
	const activities = useRef(null);

	const container = useRef(null);

	const [myProjectsVisibility, setMyProjectsVisibility] = useState("none");

	const scrollToComponent = (component) => {
		component.scrollIntoView({
			behavior: "smooth",
			block: "center",
			inline: "center",
		});
	};

	const scrollFunction = (divRef) => {
		if (divRef == 1) {
			scrollToComponent(myProjects.current);
		} else if (divRef == 2) {
			scrollToComponent(knowledges.current);
		} else if (divRef == 3) {
			scrollToComponent(activities.current);
		} else {
			scrollToComponent(aboutMe.current);
		}
		// switch (divRef) {
		// 	case 0:
		// 		scrollToComponent(aboutMe.current);
		// 		console.log("hello 0");
		// 	case 1:
		// 		scrollToComponent(myProjects.current);
		// 		console.log("hello 1");
		// 	case 2:
		// 		scrollToComponent(knowledges.current);
		// 		console.log("hello 2");
		// }
	};

	// const scrolled = () => {
	// 	console.log(
	// 		parseInt(myProjects.current.getBoundingClientRect().top),
	// 		parseInt(getComputedStyle(myProjects.current).height)
	// 	);
	// 	if (
	// 		myProjects.current.getBoundingClientRect().top <
	// 		parseInt(getComputedStyle(myProjects.current).height) / 1.0
	// 	) {
	// 		setMyProjectsVisibility("flex");
	// 	}
	// };
	// window.onscroll = scrolled;

	return (
		<Main>
			<Header onSwapToContent={scrollFunction} />
			{/* <SocialBar /> */}
			<Content ref={container}>
				<AboutMe ref={aboutMe} />
				<Suspense
					fallback={
						<div className="loading_content">
							<p>Test Loading</p>
						</div>
					}
				>
					<MyProjects
						ref={myProjects}
						visibility={myProjectsVisibility}
					/>
				</Suspense>
				<Knowledges ref={knowledges} />
				<Activities ref={activities} />
				<Loading />
			</Content>
			<CornerLogo />
			<div className="devmode">
				<p>In development</p>
			</div>
		</Main>
	);
}

const Main = styled.div`
	width: 100%;
	min-width: 300px;
	/* min-height: 100vh; */
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
	position: relative;
	overflow-y: visible;
	overflow-x: hidden;
	.devmode {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 5;
		background: linear-gradient(
			90deg,
			rgba(245, 167, 66, 1) 10%,
			rgba(245, 136, 66, 1) 45%,
			rgba(246, 177, 87, 1) 100%
		);
		margin: 0;
		padding: 5px 45px;
		transform: scale(0.8) rotate(45deg) translateX(-70px) translateY(25px);
		p {
			margin: 0;
			font-weight: bold;
		}
	}
`;

const Content = styled.div`
	/* height: 3500px; */
	max-width: 1600px;
	width: 100%;
	padding-bottom: 100px;
	/* border: 1px solid green; */
	/* background: rgb(200, 200, 200, 0.05); */
	overflow-y: visible;
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 5;
	gap: 50px;
`;

export default Portfolio;
