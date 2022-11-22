import styled from "styled-components";
import { forwardRef } from "react";

const AboutMe = forwardRef((props, ref) => {
	return (
		<Main ref={ref}>
			<div className="content">
				<div className="profile_pic">
					<img src="/profile.jpg" />
					<p className="credit">
						Credits to{" "}
						<a
							href="https://mvo.artstation.com/projects/gJO9kZ"
							className="author"
							target="_blank"
						>
							Mikhail Vozdvizhensky
						</a>
					</p>
				</div>
				<div className="header">
					<div style={{ width: "100%" }}>
						<h1>About Me</h1>
					</div>
					<p>
						My name is Michaël also nown as MaZeppAa, and i am a
						frontend web developper ! I love learning new things
						about coding and all other stuff.
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
	/* min-height: 1000px; */
	/* border: 1px solid var(--third-color); */
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
		transition: 0.4s linear;
		text-align: left;
		max-width: 50%;
		gap: 25px;
		h1 {
			font-family: RussoOne, monospace;
			letter-spacing: 4px;
			/* word-spacing: 35px; */
			justify-self: flex-start;
			position: relative;
			text-align: left;
			margin: 0;
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
		img {
			height: auto;
			width: 250px;
			border-radius: 2px;
			opacity: 0;
			box-shadow: 0 5px 10px -5px var(--second-color);
			animation: fadeIn 0.5s ease 2.5s forwards;
			filter: blur(0.5px);
		}
		.profile_pic {
			position: relative;
			height: fit-content;
			width: fit-content;
			transition: 0.5s ease;
			filter: saturate(0.5);
			.credit {
				position: absolute;
				top: 90%;
				margin: 0;
				width: 100%;
				text-align: center;
				z-index: -1;
				opacity: 0;
				transition: 0.5s ease;
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
			filter: saturate(1);
			.credit {
				top: 100%;
				opacity: 1;
				transition: 0.5s ease;
			}
		}
		.header {
			display: flex;
			flex-direction: column;
			/* justify-content: center; */
			align-items: center;
			gap: 0px;
			text-align: left;
			p {
				font-family: Orbitron;
				opacity: 0;
				animation: fadeIn 0.5s ease 3s forwards;
				text-align: left;
				margin: 0;
			}
			h3 {
				font-family: RussoOne, monospace;
				text-align: left;
				width: 100%;
				margin: 10px 0 5px 0;
				opacity: 0;
				animation: fadeIn 0.5s ease 2s forwards;
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
		top: -50px;
		left: -50px;
		transition: 0.5s ease;
	}
	.content:hover::before {
		bottom: -50px;
		right: -50px;
		transition: 0.5s ease;
	}
	.content:hover {
		transform: scale(1.05);
		transition: 0.4s ease;
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
