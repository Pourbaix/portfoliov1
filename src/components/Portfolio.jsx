import styled from "styled-components";
import Header from "./Header";
import SocialBar from "./SocialBar";
import CornerLogo from "./CornerLogo";
import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";
import Knowledges from "./Knowledges";
import { useEffect, useRef } from "react";
import { useState } from "react";

function Portfolio() {
	const aboutMe = useRef(null);
	const myProjects = useRef(null);
	const knowledges = useRef(null);
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
			<SocialBar />
			<Content ref={container}>
				<AboutMe ref={aboutMe} />
				<MyProjects
					ref={myProjects}
					visibility={myProjectsVisibility}
				/>
				<Knowledges ref={knowledges} />
			</Content>
			<CornerLogo />
		</Main>
	);
}

const Main = styled.div`
	width: 100%;
	/* min-height: 100vh; */
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
	position: relative;
	overflow-y: visible;
	overflow-x: hidden;
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
