import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "../assets/style/counter.scss";

function Home() {
	const [showContent, setShowContent] = useState(false);
	const [showIntro, setShowIntro] = useState(true);
	const [enableStopAnim, setEnableStopAnim] = useState(false);

	const animatedDiv = useRef(null);

	const Aymar = () => {
		setTimeout(() => {
			setShowIntro(false);
		}, 4800);
		setTimeout(() => {
			setShowContent(true);
		}, 5000);
		setTimeout(() => {
			setEnableStopAnim(true);
		}, 6000);
	};
	Aymar();

	const mouseIsOn = () => {
		if (enableStopAnim) {
			animatedDiv.current.style.animationPlayState = "paused";
		}
	};

	const mouseIsOut = () => {
		animatedDiv.current.style.animationPlayState = "running";
	};

	return (
		<Main>
			{showContent ? (
				<Content>
					{/* <div className="fakeMargin"></div> */}
					<div
						className="main_content"
						ref={animatedDiv}
						onMouseEnter={mouseIsOn}
						onMouseLeave={mouseIsOut}
					>
						<div className="textContent">
							<p className="introSec">Welcome to my</p>
							<p className="introMain">Portfolio</p>
						</div>
						<div className="buttonContainer">
							<Link to="/portfolio">
								<button className="enterButton">Enter</button>
							</Link>
						</div>
					</div>
				</Content>
			) : (
				""
			)}
			<Grid>
				<div className="animContainer">
					<div className="anim"></div>
				</div>
				<div className="anim2" id="anim2">
					{showIntro ? (
						<>
							<div className="logo">
								<Logo></Logo>
							</div>
							<div className="counter"></div>
						</>
					) : (
						""
					)}
				</div>
			</Grid>
		</Main>
	);
}

const Main = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
	position: relative;
	overflow: hidden;
`;

const Grid = styled.div`
	position: absolute;
	width: 100vw;
	height: 100%;
	display: flex;
	align-items: center;
	/* background-image: url("./src/assets/backimage.svg");
	background-size: 1%; */
	/* background: grey; */
	opacity: 1;
	/* box-shadow: inset 0px 0px 60px -35px black; */
	z-index: 1;

	.animContainer {
		width: 100%;
		height: 100%;
		position: absolute;
		opacity: 1;
		.anim {
			width: 100%;
			height: 100%;
			position: relative;
			z-index: 6;
		}
		.anim::after {
			width: 100%;
			height: 50%;
			top: 0;
			left: 0;
			background: var(--second-color);
			border-bottom: 1px solid grey;
			content: "";
			position: absolute;
			animation: slideOutUp 1s ease 4.5s forwards;
			transition: 1s ease;
		}
		.anim::before {
			width: 100%;
			height: 50%;
			top: 50%;
			left: 0;
			background: var(--second-color);
			border-top: 1px solid grey;
			content: "";
			position: absolute;
			animation: slideOutDown 1s ease 4.5s forwards;
			transition: 1s ease;
		}
	}
	.anim2 {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 15%;
		/* border: 1px solid blue; */
		z-index: 7;
		position: relative;
		transition: opacity ease 4s;
		.logo {
			display: flex;
			justify-content: center;
			align-items: center;
			/* background: #292929; */
			/* border-radius: 50%; */
			min-width: 250px;
			min-height: 400px;
			z-index: 6;
		}
	}
	.anim2::before {
		position: absolute;
		width: 5%;
		height: 1px;
		top: 50%;
		background: var(--third-color);
		content: "";
		right: 45%;
		animation: slideRight 4.5s linear forwards,
			fadeOut 1s ease 4.5s forwards;
		box-shadow: 0 0 0px 1px var(--third-color);
	}
	.anim2::after {
		position: absolute;
		width: 5%;
		height: 1px;
		top: 50%;
		background: var(--third-color);
		content: "";
		left: 45%;
		animation: slideLeft 4.5s linear forwards, fadeOut 1s ease 4.5s forwards;
		box-shadow: 0 0 0px 1px var(--third-color);
	}

	@keyframes slideOutDown {
		0% {
			height: 50%;
			border-top: 1px solid var(--third-color);
		}
		100% {
			height: 0;
			top: 100%;
			border: none;
		}
	}
	@keyframes slideOutUp {
		0% {
			height: 50%;
			border-bottom: 1px solid var(--third-color);
		}
		100% {
			height: 0;
			top: 0;
			border: none;
		}
	}
	@keyframes slideLeft {
		0% {
			left: 45%;
		}
		99% {
			width: 56%;
			left: -6%;
		}
		100% {
			left: -6%;
			width: 0;
		}
	}
	@keyframes slideRight {
		0% {
			right: 45%;
		}
		99% {
			right: -6%;
			width: 56%;
		}
		100% {
			right: -6%;
			width: 0;
		}
	}
	@keyframes fadeOut {
		100% {
			opacity: 0;
		}
	}
`;

const Content = styled.div`
	top: 0;
	width: 100%;
	max-width: 1600px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 5;
	/* overflow: hidden; */
	.fakeMargin {
		width: 60%;
		height: 350px;
		max-height: 35vh;
	}
	.main_content {
		display: flex;
		flex-direction: column;
		position: relative;
		background: var(--main-color);
		border: 1px solid var(--second-color);
		overflow: visible;
		align-items: center;
		justify-content: center;
		animation: openDiv 1s ease forwards, levitate 5s linear 1s infinite;
		color: var(--main-color);
		gap: 40px;
		/* padding: 60px 0px; */
		box-shadow: black 0px 20px 40px -20px;
		.textContent {
			display: flex;
			flex-direction: column;
			height: 45%;
			width: 85%;
			justify-content: center;
			align-items: center;
			gap: 25%;
			color: var(--second-color);
			p {
				opacity: 0;
				margin: 0;
				animation: fadeIn 1s ease 1s forwards;
				/* font-size: calc(1.8em * calc(0.5 * 100vw)); */
				font-size: 2em;
			}
			.introSec {
				font-family: Orbitron;
			}
			.introMain {
				width: fit-content;
				font-size: 6em;
				/* font-weight: bold; */
				font-family: Russo One;
			}
		}

		.buttonContainer {
			position: relative;
			display: flex;
			z-index: 8;
			transition: 0.3s ease;
			margin-top: 25px;
		}

		.buttonContainer:hover {
			transform: scale(1.05);
			transition: 0.3s ease;
			/* box-shadow: black 0px 20px 20px -25px; */
		}

		.buttonContainer::after {
			content: "";
			position: absolute;
			overflow: visible;
			top: -1px;
			left: 0;
			width: 0;
			height: 0;
			background: var(--third-color);
			z-index: -1;
			transition: 0.5s ease;
		}

		.buttonContainer::before {
			content: "";
			position: absolute;
			overflow: visible;
			top: -1px;
			left: 0;
			width: 0;
			height: 0;
			background: var(--third-color);
			z-index: -1;
			transition: 0.5s ease;
		}

		.buttonContainer:hover::after {
			animation: buttonHoverUp 3s linear infinite;
			transform: scale(1.02);
			transition: 0.5s ease;
		}

		.buttonContainer:hover::before {
			animation: buttonHoverBottom 3s linear infinite;
			transform: scale(1.02);
			transition: 0.5s ease;
		}

		.enterButton {
			opacity: 0;
			position: relative;
			text-decoration: none;
			background-color: rgb(0, 0, 0, 0.8);
			border: 1px solid var(--second-color);
			padding: 15px 35px;
			font-size: 35px;
			justify-self: center;
			animation: fadeIn 1s ease 1s forwards;
			cursor: pointer;
			transition: 0.5s ease;
			font-family: Orbitron;
		}
		.enterButton:hover {
			color: var(--main-color);
			transition: 0.5s ease;
		}
	}
	.main_content::after {
		content: "";
		width: 25%;
		height: 15%;
		background: none;
		position: absolute;
		top: -15px;
		left: -15px;
		border-top: 2px solid var(--third-color);
		border-left: 2px solid var(--third-color);
	}
	.main_content::before {
		content: "";
		width: 25%;
		height: 15%;
		background: none;
		position: absolute;
		bottom: -15px;
		right: -15px;
		border-bottom: 2px solid var(--third-color);
		border-right: 2px solid var(--third-color);
	}
	@keyframes levitate {
		0% {
			transform: translateX(0);
			transform: translateY(0);
		}
		50% {
			transform: translateY(-6px);
		}
		100% {
			transform: translateY(0);
		}
	}

	@keyframes openDiv {
		0% {
			width: 0;
			height: 0;
		}
		100% {
			width: 75%;
			height: 55%;
			max-height: 520px;
		}
	}
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes rotatetoShow {
		100% {
			transform: rotate(225deg);
		}
	}
	@keyframes rotateToHide {
		100% {
			transform: rotate(180deg);
		}
	}

	@keyframes buttonHoverUp {
		0% {
			top: -1px;
			left: 0;
			width: 0%;
			height: 1%;
			box-shadow: 0 2px 4px 0.1px #ff4046;
		}
		5% {
			top: -1px;
			left: 0;
			width: 25%;
			height: 1%;
			box-shadow: 0 2px 4px 0.1px #ff4046;
		}
		20% {
			top: -1px;
			left: 75%;
			width: 25%;
			height: 1%;
			box-shadow: 0 2px 4px 0.1px #ff4046;
		}
		25% {
			top: -1px;
			left: 100%;
			width: 0px;
			height: 0px;
			box-shadow: 0 2px 4px 0.1px #ff4046;
		}
		30% {
			top: 0;
			left: 100%;
			width: 0.5%;
			height: 35%;
			box-shadow: -2px 0 4px 0.1px #ff4046;
		}
		45% {
			top: 65%;
			left: 100%;
			width: 0.5%;
			height: 35%;
			box-shadow: -2px 0 4px 0.1px #ff4046;
		}
		50% {
			top: 100%;
			left: 100%;
			width: 0;
			height: 0;
			box-shadow: -2px 0 4px 0.1px #ff4046;
		}
		55% {
			top: 100%;
			left: 75%;
			width: 25%;
			height: 1%;
			box-shadow: 0 -2px 4px 0.1px #ff4046;
		}
		70% {
			top: 100%;
			left: 0%;
			width: 25%;
			height: 1%;
			box-shadow: 0 -2px 4px 0.1px #ff4046;
		}
		75% {
			top: 100%;
			left: 0;
			width: 0;
			height: 0;
			box-shadow: 0 -2px 4px 0.1px #ff4046;
		}
		80% {
			top: 65%;
			left: -1px;
			width: 0.5%;
			height: 35%;
			box-shadow: 2px 0 4px 0.1px #ff4046;
		}
		95% {
			top: 0%;
			left: -0.5%;
			width: 0.5%;
			height: 35%;
			box-shadow: 2px 0 4px 0.1px #ff4046;
		}

		100% {
			top: -1px;
			left: -0.5%;
			width: 0.5%;
			height: 0;
			box-shadow: 2px 0 4px 0.1px #ff4046;
		}
	}
	@keyframes buttonHoverBottom {
		0% {
			top: 100%;
			left: 100%;
			width: 0;
			height: 0;
			box-shadow: 0 -2px 4px 0.1px #ff4046;
		}
		5% {
			top: 100%;
			left: 75%;
			width: 25%;
			height: 1%;
			box-shadow: 0 -2px 4px 0.1px #ff4046;
		}
		20% {
			top: 100%;
			left: 0%;
			width: 25%;
			height: 1%;
			box-shadow: 0 -2px 4px 0.1px #ff4046;
		}
		25% {
			top: 100%;
			left: 0;
			width: 0;
			height: 0;
			box-shadow: 0 -2px 4px 0.1px #ff4046;
		}
		30% {
			top: 65%;
			left: -1px;
			width: 0.5%;
			height: 35%;
			box-shadow: 2px 0 4px 0.1px #ff4046;
		}
		45% {
			top: 0%;
			left: -0.5%;
			width: 0.5%;
			height: 35%;
			box-shadow: 2px 0 4px 0.1px #ff4046;
		}
		50% {
			top: -1px;
			left: -0.5%;
			width: 0.5%;
			height: 0;
			box-shadow: 2px 0 4px 0.1px #ff4046;
		}
		55% {
			top: -1px;
			left: 0;
			width: 25%;
			height: 1%;
			box-shadow: 0 2px 4px 0.1px #ff4046;
		}
		70% {
			top: -1px;
			left: 75%;
			width: 25%;
			height: 1%;
			box-shadow: 0 2px 4px 0.1px #ff4046;
		}
		75% {
			top: -1px;
			left: 100%;
			width: 0px;
			height: 0px;
			box-shadow: 0 2px 4px 0.1px #ff4046;
		}
		80% {
			top: 0;
			left: 100%;
			width: 0.5%;
			height: 35%;
			box-shadow: -2px 0 4px 0.1px #ff4046;
		}
		95% {
			top: 65%;
			left: 100%;
			width: 0.5%;
			height: 35%;
			box-shadow: -2px 0 4px 0.1px #ff4046;
		}

		100% {
			top: 100%;
			left: 100%;
			width: 0;
			height: 0;
			box-shadow: -2px 0 4px 0.1px #ff4046;
		}
	}
`;

export default Home;
