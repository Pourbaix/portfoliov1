import styled from "styled-components";
import { forwardRef } from "react";

const AboutMe = forwardRef((props, ref) => {
	return (
		<Main ref={ref}>
			<div className="content">
				<div className="header">
					<img src="/test2.jpg" />
					<h1>About Me</h1>
				</div>
				<p>
					My name is Michaël also nown as MaZeppAa, and i am a
					fullstack web developper ! I love learning things about
					porgrammation and all other stuff.
				</p>
			</div>
		</Main>
	);
});

const Main = styled.div`
	width: 80%;
	height: 90vh;
	/* border: 1px solid var(--third-color); */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* border: 1px solid var(--second-color); */
		padding: 50px;
		overflow: visible;
		position: relative;
		transition: 1s ease;
		text-align: center;
		max-width: 50%;
		h1 {
			font-family: RussoOne, monospace;
			letter-spacing: 4px;
			/* word-spacing: 35px; */
			justify-self: flex-start;
			position: relative;
			text-align: left;
		}
		h1::after {
			position: absolute;
			height: 100%;
			width: 100%;
			right: 0;
			top: 0;
			content: "";
			background: rgb(240, 240, 240);
			animation: typingContent 0.65s steps(6) 2s forwards;
		}
		/* h1::before {
			position: absolute;
			height: 100%;
			width: 100%;
			right: 0;
			top: 0;
			content: "";
			background: rgb(240, 240, 240);
			animation: typing 1s steps(8) forwards;
		} */
		p {
			font-family: Orbitron;
			opacity: 0;
			animation: fadeIn 0.5s ease 3s forwards;
		}
		.header {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			gap: 50px;
			img {
				height: auto;
				width: 200px;
				border-radius: 100px;
				opacity: 0;
				box-shadow: 0 0 10px -1px var(--second-color);
				animation: fadeIn 0.5s ease 2.5s forwards;
				filter: blur(0.5px);
			}
		}
	}
	.content::before {
		opacity: 0;
		content: "";
		width: 25%;
		height: 15%;
		background: none;
		position: absolute;
		bottom: -2%;
		right: -0.8%;
		border-bottom: 2px solid var(--third-color);
		border-right: 2px solid var(--third-color);
		animation: fadeInBottom 0.8s ease 1s forwards;
	}
	.content::after {
		opacity: 0;
		content: "";
		width: 25%;
		height: 15%;
		background: none;
		position: absolute;
		top: -2%;
		left: -0.8%;
		border-top: 2px solid var(--third-color);
		border-left: 2px solid var(--third-color);
		animation: fadeInUp 0.8s ease 1s forwards;
	}
	@keyframes typing {
		100% {
			width: 0;
		}
	}
	@keyframes typingContent {
		0% {
			content: "";
		}
		12.5% {
			content: "A";
		}
		25% {
			content: "Ab";
		}
		37.5% {
			content: "Abo";
		}
		50% {
			content: "Abou";
		}
		62.5% {
			content: "About";
		}
		75% {
			content: "About ";
		}
		87.5% {
			content: "About M";
		}
		100% {
			content: "About Me";
		}
	}
	@keyframes fadeInUp {
		0% {
			opacity: 0;
			transform: translateY(-50%);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
	@keyframes fadeInBottom {
		0% {
			opacity: 0;
			transform: translateY(50%);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
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
`;

export default AboutMe;
