import styled from "styled-components";
import { forwardRef, useRef } from "react";
import { DiReact, DiPostgresql } from "react-icons/di";
import {
	SiStyledcomponents,
	SiExpress,
	SiSequelize,
	SiTypescript,
	SiNestjs,
} from "react-icons/si";
import { IoLogoVue } from "react-icons/io5";

const MyProjects = forwardRef((props, ref) => {
	const logoTaalToolBox = useRef(null);
	// console.log(logoTaalToolBox.current);
	return (
		<Main ref={ref}>
			<div className="content">
				<div>
					<h1>
						<span
							style={{
								color: getComputedStyle(
									document.documentElement
								).getPropertyValue("--third-color"),
								fontSize: "25px",
							}}
						>
							2.
						</span>
						My projects
					</h1>
				</div>
				<p>
					Here is a short list of my{" "}
					<a
						className="noticable"
						href="https://github.com/Pourbaix?tab=repositories"
						target="_blank"
					>
						noticable projects
					</a>{" "}
					that i am proud of:
				</p>
				<div className="cards_list">
					<div className="instruction">
						<p>Hover here to see my projects</p>
					</div>
					<div className="card">
						<p className="card_title" id="carRental">
							CarRental
						</p>
						<div className="card_illustration">
							<img
								src="/src/assets/images/carRental.png"
								alt="carRental app preview image"
								className="preview"
							/>
							<a href="" className="card_logo">
								<img
									src="/src/assets/logo/carRental.svg"
									alt="carRental app logo"
								/>
							</a>
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
							<a href="" className="card_logo">
								<img
									src="/src/assets/logo/taalToolBox.svg"
									alt="TaalToolBox app logo"
								/>
							</a>
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
							<SiNestjs
								className="techno_icon"
								size="40px"
								color="red"
							/>
						</div>
					</div>
					<div className="card" id="no_red">
						<p className="card_title" id="spaceDream">
							Space DREAM
						</p>
						<div className="card_illustration">
							<img
								src="/src/assets/images/spaceDream.png"
								alt="TaalToolBox app preview image"
								className="preview"
							/>
							<img
								src="/src/assets/logo/spaceDream.svg"
								alt="TaalToolBox app logo"
								className="card_logo"
							/>
						</div>
						<p className="card_description">
							Yeah you though that you would be able to see what
							this subject is about just by deleting the blured
							div but this is not the case my friend. Nice try !
						</p>
						<div className="unavailable">
							<p>This project is currently in developpement</p>
						</div>
					</div>
				</div>
			</div>
		</Main>
	);
});

const Main = styled.div`
	width: 100%;
	/* height: 80vh; */
	padding: 150px 0;
	/* border: 1px solid var(--third-color); */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	h1 {
		font-family: Russo One, monospace;
		margin: 0;
	}
	p {
		font-family: Orbitron;
		margin: 5px 0;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 80%;
		max-width: 1200px;
		/* outline: 1px solid purple; */
		overflow: visible;
		position: relative;
		/* padding: 25px 0px; */
		.noticable {
			color: var(--third-color);
			display: inline-block;
			position: relative;
			overflow: visible;
		}
		.noticable:hover::after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			border-bottom: 1px dashed var(--third-color);
		}
		.cards_list {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			/* outline: 1px solid green; */
			padding: 10px 0;
			margin-top: 20px;
			/* height: 100%; */
			gap: 35px;
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
				outline: 1px solid var(--second-color);
				width: 28%;
				max-width: 330px;
				/* padding: 15px; */
				text-align: center;
				gap: 25px;
				padding: 10px 0;
				transition: 0.1s ease;
				position: relative;
				border-radius: 5px;
				overflow: hidden;
				box-shadow: black 0px 20px 20px -25px;
				p {
					margin: 0;
					color: var(--second-color);
				}
				.card_title {
					font-family: Orbitron;
					font-size: 30px;
					color: var(--second-color);
					padding-top: 15px;
					transition: 0.2s ease;
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
						overflow: visible;
						img {
							width: 100%;
						}
					}
					.card_logo:hover {
						transform: scale(1.1) translateY(-10px);
						transition: 0.3s ease;
						.card_illustration {
							opacity: 1;
						}
					}
				}
				/* .card_illustration::after {
					position: absolute;
					top: 120%;
					left: 30%;
					width: 40%;
					outline: 1px solid purple;
					height: 20%;
					content: "Github Link";
					text-align: center;
					font-size: 15px;
					display: flex;
					justify-content: center;
					align-items: center;
					z-index: -1;
					opacity: 1;
				} */
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
				.unavailable {
					width: 101%;
					position: absolute;
					height: 100%;
					backdrop-filter: blur(5px);
					top: 0;
					left: 0;
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 0;
					p {
						width: 100%;
						padding: 5px;
						color: var(--second-color);
						background: var(--third-color);
					}
				}
			}
			.card:hover {
				.card_illustration {
					filter: saturate(1);
					transition: 0.8s ease;
				}
				.technologies {
					transform: translateY(-100%);
					opacity: 1;
					transition: 0.4s ease;
				}
				#carRental {
					color: #0078b5;
					transition: 0.4s ease;
				}
				#taalToolBox {
					color: #026b30;
					transition: 0.4s ease;
				}
				#spaceDream {
					color: #9c94fa;
					transition: 0.4s ease;
				}
				transform: scale(1.05);
				/* transform: rotate3d(180deg); */
				transition: 0.2s ease;
				box-shadow: black 0px 20px 30px -20px;
				outline: 1px solid var(--third-color);
			}
			#no_red:hover {
				outline: none;
			}
		}
	}
	.content::before {
		/* opacity: 0; */
		content: "";
		width: 25%;
		height: 15%;
		background: none;
		position: absolute;
		top: -20px;
		right: -20px;
		border-top: 2px solid var(--third-color);
		border-right: 2px solid var(--third-color);
		transition: 0.5s ease;
	}
	.content::after {
		/* opacity: 0; */
		content: "";
		width: 25%;
		height: 15%;
		background: none;
		position: absolute;
		bottom: -20px;
		left: -20px;
		border-bottom: 2px solid var(--third-color);
		border-left: 2px solid var(--third-color);
		transition: 0.5s ease;
	}
	.content:hover::after {
		transform: translateY(30px) translateX(-30px);
		transition: 0.5s ease;
	}
	.content:hover::before {
		transform: translateY(-30px) translateX(30px);
		transition: 0.5s ease;
	}
	@media (max-height: 900px) {
		.content {
			max-height: 550px;
			.cards_list {
				.card {
					max-height: 350px;
					max-width: 280px;
					gap: 5px;
					.card_title {
						font-size: 20px;
						padding-top: 5px;
					}
				}
			}
		}
	}
`;

export default MyProjects;
