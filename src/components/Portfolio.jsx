import styled from "styled-components";
import Header from "./Header";
import SocialBar from "./SocialBar";
import CornerLogo from "./CornerLogo";
import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";
import { useEffect, useRef } from "react";

function Portfolio() {
	const aboutMe = useRef(null);
	const myProjects = useRef(null);

	const testFunction = (divRef) => {
		if (divRef) {
			myProjects.current.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "center",
			});
			console.log(myProjects.current);
		} else {
			aboutMe.current.scrollIntoView(false);
			console.log(aboutMe.current);
		}
	};

	return (
		<Main>
			<Header onSwapToContent={testFunction} />
			<SocialBar />
			<Content>
				<AboutMe ref={aboutMe} />
				<MyProjects ref={myProjects} />
			</Content>
			<CornerLogo />
		</Main>
	);
}

const Main = styled.div`
	width: 100%;
	min-height: 100vh;
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
	padding-top: 10vh;
	padding-bottom: 5vh;
	/* border: 1px solid green; */
	/* background: rgb(200, 200, 200, 0.05); */
	overflow-y: visible;
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 5;
	gap: 50px;
	scroll-snap-type: y mandatory;
	h1 {
		font-family: PaytoneOne;
	}
	.myProjects {
		width: 80%;
		height: 80vh;
		border: 1px solid var(--third-color);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export default Portfolio;
