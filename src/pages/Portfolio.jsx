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

	const isOnMobile = () => {
		let mobileNav = false;
		if (
			navigator.userAgent.match(/Android/i) ||
			navigator.userAgent.match(/iPhone/i)
		) {
			mobileNav = true;
		}
		return "ontouchstart" in document.documentElement || mobileNav;
	};

	const scrollToComponent = (component) => {
		isOnMobile()
			? component.scrollIntoView({
					behavior: "smooth",
					block: "start",
					inline: "center",
			  })
			: component.scrollIntoView({
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
	};

	const observer = new IntersectionObserver(
		(event) => {
			console.log(event);
			event.forEach((element) => {
				element.target.childNodes[0].classList.toggle(
					"not_visible",
					!element.isIntersecting
				);
				element.target.childNodes[0].classList.toggle(
					"content",
					element.isIntersecting
				);
				if (element.isIntersecting) observer.unobserve(element.target);
			});
		},
		{
			threshold: 0.5,
		}
	);

	useEffect(() => {
		observer.observe(myProjects.current);
		observer.observe(knowledges.current);
	}, []);

	return (
		<Main>
			<Header onSwapToContent={scrollFunction} />
			<Content ref={container}>
				<AboutMe ref={aboutMe} />
				<MyProjects ref={myProjects} />
				<Knowledges ref={knowledges} />
				<Activities ref={activities} />
				<SocialBar />
				{/* <Loading /> */}
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
		transform: scale(0.8) rotate(45deg) translateX(-80px) translateY(25px);
		p {
			margin: 0;
			font-weight: bold;
			font-family: "Russo One";
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
