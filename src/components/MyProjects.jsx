import styled from "styled-components";
import { forwardRef } from "react";
import { DiReact, DiPostgresql } from "react-icons/di";
import {
	SiStyledcomponents,
	SiExpress,
	SiSequelize,
	SiTypescript,
} from "react-icons/si";
import { IoLogoVue } from "react-icons/io5";

const MyProjects = forwardRef((props, ref) => {
	return (
		<Main ref={ref}>
			<Content>
				<h1>My projects</h1>
				<p>
					Here is a short list of my{" "}
					<a
						className="noticable"
						href="https://github.com/Pourbaix?tab=repositories"
					>
						noticable projects
					</a>{" "}
					that i am proud of:
				</p>
				<div className="cards_list">
					<div className="instruction" id="carRental">
						<p>Hover here to see my projects</p>
					</div>
					<div className="card">
						<p className="card_title">CarRental</p>
						<div className="card_illustration">
							<img
								src="/src/assets/images/carRental.png"
								alt="carRental app preview image"
								className="preview"
							/>
							<img
								src="/src/assets/logo/carRental.svg"
								alt="carRental app logo"
								className="card_logo"
							/>
						</div>
						<p className="card_description">
							A car renting app created by a group of 4 motivated
							people. Many possibilities for admin and users, with
							a connection / registration system. This project was
							created during my studies.
						</p>
						<div className="technologies">
							<DiReact
								className="techno_icon"
								size="40px"
								color="#61DBFB"
							/>
							<DiPostgresql
								className="techno_icon"
								size="40px"
								color=" #0064a5"
							/>
							<SiExpress
								className="techno_icon"
								size="40px"
								color="black"
							/>
							<SiStyledcomponents
								className="techno_icon"
								size="40px"
								color="purple"
							/>
							<SiSequelize
								className="techno_icon"
								size="40px"
								color="#3483eb"
							/>
						</div>
					</div>
					<div className="card">
						<p className="card_title" id="taalToolBox">
							TaalToolBox
						</p>
						<div className="card_illustration">
							<img
								src="/src/assets/images/taalToolBox.png"
								alt="TaalToolBox app preview image"
								className="preview"
							/>
							<img
								src="/src/assets/logo/taalToolBox.svg"
								alt="TaalToolBox app logo"
								className="card_logo"
							/>
						</div>
						<p className="card_description">
							An app to learn Dutch. Buildt with a group of 7
							people during my studies. This app provides
							different games to learn the language and a system
							that allows the teacher to manage his students.
						</p>
						<div className="technologies">
							<IoLogoVue
								className="techno_icon"
								size="40px"
								color=" #42b883"
							/>
							<DiPostgresql
								className="techno_icon"
								size="40px"
								color=" #0064a5"
							/>
							<SiTypescript
								className="techno_icon"
								size="40px"
								color="#007acc"
							/>
						</div>
					</div>
					<div className="card"></div>
				</div>
			</Content>
		</Main>
	);
});

const Main = styled.div`
	width: 70%;
	height: 80vh;
	max-height: 1200px;
	border: 1px solid var(--third-color);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 25px;
	h1 {
		font-family: RussoOne;
		margin: 0;
	}
	p {
		font-family: Orbitron;
	}
`;
const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	/* outline: 1px solid purple; */
	.noticable {
		color: var(--third-color);
	}
	.noticable:hover {
		transform: translateY(5px);
	}
	.cards_list {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		/* outline: 1px solid green; */
		padding: 10px;
		margin-top: 20px;
		/* height: 100%; */
		gap: 25px;
		.instruction {
			font-size: 25px;
			font-family: Prompt;
			outline: 1px solid blue;
			min-height: 50%;
			text-align: center;
			display: flex;
			align-items: center;
			padding: 10px;
			display: none;
		}
		.card {
			/* height: 100%; */
			height: 420px;
			display: flex;
			flex-direction: column;
			align-items: center;
			/* justify-content: center; */
			border: 1px solid var(--second-color);
			width: 28%;
			/* padding: 15px; */
			text-align: center;
			gap: 25px;
			padding: 10px 0;
			transition: 0.1s ease;
			position: relative;
			/* border-radius: 10px; */
			overflow: hidden;
			p {
				margin: 0;
				color: var(--second-color);
			}
			.card_title {
				font-family: ;
				font-size: 30px;
				color: var(--second-color);
				padding-top: 15px;
			}
			.card_illustration {
				position: relative;
				/* outline: 1px solid pink; */
				width: 100%;
				margin-bottom: 35px;
				height: 35%;
				filter: saturate(0);
				transition: 0.8s ease;
				.preview {
					width: 100%;
					height: auto;
					max-height: 100%;
				}
				.card_logo {
					width: 25%;
					height: auto;
					top: 80%;
					left: 37.5%;
					position: absolute;
					transition: 0.3s ease;
				}
				.card_logo:hover {
					transform: scale(1.1);
					transition: 0.3s ease;
				}
			}
			.card_description {
				font-family: Prompt;
				font-size: 13px;
				padding: 0 10px;
				line-height: 18px;
				margin-bottom: 20px;
			}
			.technologies {
				width: 100%;
				height: 15%;
				position: absolute;
				/* border-top: 1px solid red; */
				bottom: -16%;
				transition: 0.4s ease;
				/* background: var(--main-color); */
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				opacity: 0;
				overflow: hidden;
				gap: 5px;
				.techno_icon {
					height: 60%;
					width: auto;
				}
			}
		}
		.card:hover {
			.card_illustration {
				filter: saturate(1);
				transition: 0.8s ease;
			}
			.technologies {
				bottom: 0;
				opacity: 1;
				transition: 0.4s ease;
			}
			transform: scale(1.05);
			transition: 0.2s ease;
		}
	}
`;

export default MyProjects;
