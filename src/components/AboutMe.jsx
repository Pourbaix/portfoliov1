import styled from "styled-components";
import { forwardRef } from "react";

import ProfilePic from "/src/assets/images/profile.jpg";

const AboutMe = forwardRef((props, ref) => {
	return (
		<Main ref={ref}>
			<div className="content">
				<div className="profile_pic">
					<img src={ProfilePic} />
					{/* <p className="credit">
						Credits to{" "}
						<a
							href="https://mvo.artstation.com/projects/gJO9kZ"
							className="author"
							target="_blank"
						>
							Mikhail Vozdvizhensky
						</a>
					</p> */}
				</div>
				<div className="about_content">
					<div className="header">
						<h1>About Me</h1>
					</div>
					<p>
						My name is{" "}
						<b style={{ color: "red", fontFamily: "Russo one" }}>
							Michaël
						</b>{" "}
						and i am a web developper ! I love learning new things
						about coding and all other stuff. I am mainly focused on
						frontend development and I like to connect the two
						sides.
					</p>
					<h3>What I like to do:</h3>
					<div className="like">
						<p>Code</p>
						<p>Play piano</p>
						<p>Play video-games with friends</p>
						<p>Learn new things</p>
					</div>
				</div>
			</div>
		</Main>
	);
});

const Main = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.content {
		display: flex;
		flex-direction: row;
		/* align-items: center; */
		justify-content: center;
		/* border: 1px solid var(--second-color); */
		padding: 50px;
		overflow: visible;
		position: relative;
		transition: 0.2s linear;
		text-align: left;
		max-width: 50%;
		gap: 25px;
		h1 {
			font-family: Russo One, monospace;
			letter-spacing: 4px;
			/* word-spacing: 35px; */
			justify-self: flex-start;
			position: relative;
			text-align: left;
			margin: 0;
			margin-left: 25px;
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
		h1::before {
			content: "1.";
			/* height: 100%;
			width: 15%; */
			left: -8%;
			top: 40%;
			color: var(--third-color);
			text-align: center;
			font-size: 25px;
			position: absolute;
			letter-spacing: 1px;
			opacity: 0;
			animation: fadeIn 1s ease 2s forwards;
			/* outline: 1px solid red; */
		}
		.profile_pic {
			position: relative;
			/* height: fit-content; */
			height: 100%;
			width: fit-content;
			display: flex;
			transition: 0.5s ease;
			filter: saturate(0.3);
			/* border: 1px solid var(--second-color); */
			img {
				height: auto;
				width: auto;
				max-width: 220px;
				max-height: 350px;
				aspect-ratio: 1/1;
				opacity: 0;
				box-shadow: 0 5px 10px -5px var(--second-color);
				animation: fadeIn 0.5s ease 2.5s forwards;
				filter: blur(0.5px);
				z-index: -1;
				border-radius: 2px;
			}
			.credit {
				position: absolute;
				top: 90%;
				margin: 0;
				width: 100%;
				text-align: center;
				z-index: -2;
				opacity: 0;
				transition: 0.5s ease;
				font-family: "Lexend";
				font-size: 15px;
				.author {
					color: var(--third-color);
				}
				.author:hover {
					border-bottom: 1px dashed var(--third-color);
				}
			}
		}
		.profile_pic:hover {
			transform: scale(1.02);
			transition: 0.5s ease;
			/* filter: saturate(1); */
			/* .credit {
				top: 102%;
				opacity: 1;
				transition: 0.5s ease;
			} */
		}
		.about_content {
			display: flex;
			flex-direction: column;
			/* justify-content: center; */
			align-items: center;
			gap: 0px;
			text-align: left;
			.header {
				width: 100%;
				display: flex;
				flex-direction: row;
				align-items: flex-end;
			}
			p {
				font-family: "Orbitron", sans-serif;
				opacity: 0;
				animation: fadeIn 0.5s ease 3s forwards;
				text-align: left;
				margin: 0;
			}
			h3 {
				font-family: Russo One, monospace;
				text-align: left;
				width: 100%;
				margin: 10px 0 5px 0;
				opacity: 0;
				animation: fadeIn 0.5s ease 3s forwards;
			}
			.like {
				width: 100%;
				display: flex;
				flex-direction: column;

				p {
					position: relative;
					padding-left: 20px;
				}
				p:after {
					content: "■";
					font-size: 10px;
					top: 0;
					left: 0;
					position: absolute;
					color: var(--third-color);
				}
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
		bottom: -15px;
		right: -15px;
		border-bottom: 2px solid var(--third-color);
		border-right: 2px solid var(--third-color);
		animation: fadeInBottom 0.8s ease 1s forwards;
		transition: 0.5s ease;
	}
	.content::after {
		opacity: 0;
		content: "";
		width: 25%;
		height: 15%;
		background: none;
		position: absolute;
		top: -15px;
		left: -15px;
		border-top: 2px solid var(--third-color);
		border-left: 2px solid var(--third-color);
		animation: fadeInUp 0.8s ease 1s forwards;
		transition: 0.5s ease;
	}
	.content:hover::after {
		transform: translateY(-35px) translateX(-35px);
		transition: 0.5s ease;
	}
	.content:hover::before {
		transform: translateY(35px) translateX(35px);
		transition: 0.5s ease;
	}
	.content:hover {
		transform: scale(1.02);
		transition: 0.8s ease;
		.profile_pic {
			transition: 0.5s ease;
			filter: saturate(1);
		}
	}
	@media (max-width: 1160px) {
		.content {
			padding: 35px;
			max-width: 70%;
			.profile_pic {
				display: none;
			}
		}
		.content:hover::after {
			transform: translateY(-10px) translateX(-10px);
			transition: 0.5s ease;
		}
		.content:hover::before {
			transform: translateY(10px) translateX(10px);
			transition: 0.5s ease;
		}
		.content:hover {
			transform: scale(1.02);
			transition: 0.8s ease;
		}
	}
	@media (max-width: 500px) {
		.content {
			padding: 15px;
			h1,
			h1::after {
				font-size: 35px;
			}
			h1::before {
				font-size: 25px;
				top: 25%;
				left: -10%;
			}
		}
		.content:hover::after {
			transform: translateY(-5px) translateX(-5px);
			transition: 0.5s ease;
		}
		.content:hover::before {
			transform: translateY(5px) translateX(5px);
			transition: 0.5s ease;
		}
		.content:hover {
			transform: scale(1.02);
			transition: 0.8s ease;
		}
	}

	@media (max-height: 700px) {
		.content {
			padding: 5px;
		}
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
			/* transform: translateY(-50%); */
		}
		100% {
			opacity: 1;
			/* transform: translateY(0); */
		}
	}
	@keyframes fadeInBottom {
		0% {
			opacity: 0;
			/* transform: translateY(50%); */
		}
		100% {
			opacity: 1;
			/* transform: translateY(0); */
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
