import styled from "styled-components";
import { useRef, useState, forwardRef } from "react";
import Calendar from "/src/assets/logo/activities/calendar.svg";
import OCCourse1 from "/src/assets/logo/activities/online-course1.svg";
import OCCourse2 from "/src/assets/logo/activities/online-course2.svg";
import Hackathon from "/src/assets/logo/activities/hackathon.svg";
import Music from "/src/assets/logo/activities/piano.svg";
import Editing from "/src/assets/logo/activities/video-editing.svg";
import Portfolio from "/src/assets/logo/activities/portfolio.svg";

import ProjectDescription from "./ProjectDescription";

// Images for evidences
import MachineLearning from "/src/assets/images/evidences/machineLearning.png";
import Cpp from "/src/assets/images/evidences/Cpp.png";
import PortfolioScreen from "/src/assets/images/evidences/Portfolio.png";
import HackathonCertif from "/src/assets/images/evidences/hackathon.png";

//Video for evidences
import Video from "/src/assets/rickrolled.mp4";

const Activities = forwardRef((props, ref) => {
	const slider = useRef(null);
	const [currentPage, setCurrentPage] = useState(0);

	const [modalState, setModalState] = useState(false);

	const data = [
		{
			title: "OpenClassrooms course 1: Introduction to machine learning",
			main_evidence: MachineLearning,
			main_evidence_type: "image",
			main_evidence_descr: "Evidence for machine learning course",
			activity_descr:
				"This is the first online course I fully completed. I wanted to learn more about machine learning because it was a very growing subject and it seemed very interesting. I learned a lot during this course: How we can classify different types of learning algorithms and what are the best suiting models for certain use cases. We had a course about that subject in school but I already knew the basic thanks to this online course.",
			activity_date: "Summer holidays 2021",
			evidence_link: [
				{
					url: "https://drive.google.com/drive/folders/1AKggq4zqF6F_KqvEUIGCH_fGh9WfHQm_?usp=sharing",
					label: "Link to screenshots",
				},
				{
					url: "https://github.com/Pourbaix/InitiationMachineLearning",
					label: "Link to course project",
				},
			],
		},
		{
			title: "OpenClassrooms course 2: Introduction to C++",
			main_evidence: Cpp,
			main_evidence_type: "image",
			main_evidence_descr: "Evidence image for Cpp course",
			activity_descr:
				"After doing the course on machine learning i tougth it might be interesting to learn C++ cause we were already introduced to C in some courses from EPHEC. So I did this online course and I created a little command line app to apply the things I just learned. Nothing to creazy but it was, I think, a good way to indtroduce myself to C++.",
			activity_date: "Summer holidays 2021",
			evidence_link: [
				{
					url: "https://drive.google.com/drive/folders/1AKggq4zqF6F_KqvEUIGCH_fGh9WfHQm_?usp=sharing",
					label: "Link to screenshots",
				},
				{
					url: "https://github.com/Pourbaix/InitiationCpp",
					label: "Link to personal project",
				},
			],
		},
		{
			title: "Hackathon for sustainable development",
			main_evidence: HackathonCertif,
			main_evidence_type: "image",
			main_evidence_descr:
				"Certification for participating to the 2022 EPHEC Hackathon",
			activity_descr:
				"My first hackathon, organized by my school. It was an incredible experiment and I loved the idea of working hard on a projet for a few days and compete with other teams. We worked on an application to learn braille and other language for people with disabilities. We also putted a big attention on accessibility. (We got TOP 2 😊)",
			activity_date: "28-30 October 2022",
			evidence_link: [
				{
					url: "https://github.com/ChaosArnhug/Hackaton-Ephec-2022",
					label: "Link to our project",
				},
			],
		},
		{
			title: "Music: learning piano",
			main_evidence: Video,
			main_evidence_type: "video",
			main_evidence_descr: "A piano demonstration as an evidence",
			activity_descr:
				"I started learning piano thanks to my mom. In fact, she took courses for 15 years but she stopped when growing up. Sometimes she still played it at thome and one day I wanted to try. She then teached me a basic piece and I realized that I freaking loved it! Now I'm learning piano by myself and I must say it has teached me some great things like dedication and never giving up.",
			activity_date: "2018-NOW",
			evidence_link: "",
		},
		{
			title: "Video Editing",
			main_evidence: "",
			main_evidence_type: "image",
			main_evidence_descr: "",
			activity_descr:
				"We did some video editing in the communication course and it gave me the will to get back to it. Indeed, I already did a lot of video editing even before the communication course. Me and my friend we used to play video-games during our free-time and I did some video of those sessions that we posted on internet.",
			activity_date: "2017-2023",
			evidence_link: "",
		},
		{
			title: "Making of my portfolio",
			main_evidence: PortfolioScreen,
			main_evidence_type: "image",
			main_evidence_descr:
				"Screenshot of the main page of this portfolio",
			activity_descr:
				"I really enjoyed doing this portfolio as it allowed me to use what I learned from my years at the EPHEC. I also enjoyed imaginating all the components in this page and the way they will look like. I think it can even be usefull to find a job in the futur. This portfolio is made ",
			activity_date: "2022-2023",
			evidence_link: [
				{
					url: "https://github.com/Pourbaix/portfoliov1",
					label: "Link to the source code",
				},
			],
		},
	];

	const slide = (direction) => {
		let baseWitdh = parseInt(getComputedStyle(slider.current).width);
		if (direction === 0) {
			if (currentPage >= 0 && currentPage < 5) {
				slider.current.style.transform =
					"translateX(" + (currentPage + 1) * -baseWitdh + "px)";
				setCurrentPage(currentPage + 1);
			}
		} else if (direction === 1) {
			if (currentPage > 0 && currentPage < 6) {
				slider.current.style.transform =
					"translateX(" + (currentPage - 1) * -baseWitdh + "px)";
				setCurrentPage(currentPage - 1);
			}
		}
	};

	const setSlide = (nbr) => {
		let baseWitdh = parseInt(getComputedStyle(slider.current).width);
		slider.current.style.transform =
			"translateX(" + nbr * -baseWitdh + "px)";
		setCurrentPage(nbr);
	};

	return (
		<Main ref={ref}>
			<div className="not_visible">
				<h1 className="header">
					<span
						style={{
							color: getComputedStyle(
								document.documentElement
							).getPropertyValue("--third-color"),
							fontSize: "28px",
						}}
					>
						4.
					</span>
					Activities
				</h1>
				<div className="button_container">
					<button
						className="enter_button"
						onClick={() => {
							setModalState(true);
						}}
					>
						Activities summary
					</button>
				</div>
				<div className="indicator_container">
					<div className="indicator_line"></div>
					<div
						className="marker"
						onClick={() => {
							setSlide(0);
						}}
					>
						<img src={OCCourse1} alt="" className="marker_logo" />
						<p className="marker_title">OpenClassrooms Course 1</p>
						<span className="tag_secondary">
							<span className="tag_primary"></span>
						</span>
					</div>
					<div
						className="marker"
						onClick={() => {
							setSlide(1);
						}}
					>
						<img src={OCCourse2} alt="" className="marker_logo" />
						<p className="marker_title">OpenClassrooms Course 2</p>
						<span className="tag_secondary">
							<span className="tag_primary"></span>
						</span>
					</div>
					<div
						className="marker"
						onClick={() => {
							setSlide(2);
						}}
					>
						<img
							src={Hackathon}
							alt=""
							className="marker_logo"
							style={{ maxWidth: "40px" }}
						/>
						<p className="marker_title">Hackaton</p>
						<span className="tag_secondary">
							<span className="tag_primary"></span>
						</span>
					</div>
					<div
						className="marker"
						onClick={() => {
							setSlide(3);
						}}
					>
						<img
							src={Music}
							alt=""
							className="marker_logo"
							style={{ maxWidth: "28px" }}
						/>
						<p className="marker_title">Music</p>
						<span className="tag_secondary">
							<span className="tag_primary"></span>
						</span>
					</div>
					<div
						className="marker"
						onClick={() => {
							setSlide(4);
						}}
					>
						<img src={Editing} alt="" className="marker_logo" />
						<p className="marker_title">Video Editing</p>
						<span className="tag_secondary">
							<span className="tag_primary"></span>
						</span>
					</div>
					<div
						className="marker"
						onClick={() => {
							setSlide(5);
						}}
					>
						<img
							src={Portfolio}
							alt=""
							className="marker_logo"
							style={{ maxWidth: "35px" }}
						/>
						<p className="marker_title">Portfolio</p>
						<span className="tag_secondary">
							<span className="tag_primary"></span>
						</span>
					</div>
				</div>
				<div className="content_container">
					<div className="content_pages" ref={slider}>
						{data.map((element, key) => {
							return (
								<div className="page" key={key}>
									<h3 style={{ fontFamily: "Paytone One" }}>
										{element.title}
									</h3>
									<div className="page_content">
										<div className="content_image">
											{element.main_evidence ? (
												element.main_evidence_type ==
												"image" ? (
													<img
														src={
															element.main_evidence
														}
														alt={
															element.main_evidence_descr
														}
													/>
												) : (
													<video controls>
														<source
															src={Video}
															type="video/mp4"
														/>
													</video>
												)
											) : (
												<p
													style={{
														fontFamily: "Lexend",
													}}
												>
													No evidence provided
												</p>
											)}
											<div className="decoration_container">
												<div className="decoration_top"></div>
												<div className="decoration_bottom"></div>
											</div>
										</div>
										<div className="content_description">
											{element.activity_date ? (
												<h4 className="date_indicator">
													<img
														src={Calendar}
														alt="Calendar logo"
														className="calendar_date_indicator"
													/>
													<span>
														{element.activity_date}
													</span>
												</h4>
											) : (
												""
											)}
											{element.activity_descr ? (
												<p>
													<span className="description_indicator">
														▹
													</span>
													{element.activity_descr}
												</p>
											) : (
												<p>No description provided</p>
											)}
											<div className="evidences_group">
												{element.evidence_link.length
													? element.evidence_link.map(
															(evidence, key) => (
																<a
																	className="evidence_link"
																	href={
																		evidence.url
																	}
																	target="_blank"
																	key={key}
																>
																	{evidence.label
																		? evidence.label
																		: "Link to evidences"}
																</a>
															)
													  )
													: ""}
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
					<div
						className="nav_arrow_container left_arr_container"
						onClick={() => {
							slide(1);
						}}
					>
						<span className="nav_arrow nav_arrow_left"></span>
					</div>
					<div
						className="nav_arrow_container right_arr_container"
						onClick={() => {
							slide(0);
						}}
					>
						<span className="nav_arrow nav_arrow_right"></span>
					</div>
					<div className="resume"></div>
				</div>
				<div className="button_container">
					<a
						className="enter_button"
						href="https://drive.google.com/file/d/164GcFHaNf7NLl-3i7JVHm6aFmlqAlwp1/view?usp=sharing"
						target="_blank"
					>
						Download CV
					</a>
				</div>
			</div>
			<ProjectDescription
				toggleModal={modalState}
				closeFuntion={() => {
					setModalState(false);
				}}
			/>
		</Main>
	);
});

const Main = styled.div`
	width: 100%;
	min-height: 100vh;
	/* min-height: 1000px; */
	border: 0;
	border-top: 1px solid var(--fourth-color);
	.not_visible {
		display: none !important;
	}
	.content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.header {
			font-family: Russo One, monospace;
			position: relative;
			margin-bottom: 15px;
			padding-bottom: 2px;
			/* padding-left: 30px; */
			color: var(--second-color);
			/* letter-spacing: 1px; */
			/* width: 100%; */
			text-align: left;
			justify-self: left;
			font-size: 55px;
		}
		.indicator_container {
			width: 90%;
			min-height: 100px;
			border: 1px solid var(--fourth-color);
			background: var(--second-color);
			border-radius: 1px;
			margin-top: 15px;
			padding: 0 10px;
			position: relative;
			display: flex;
			animation: appearingmain 0.5s ease forwards;
			.indicator_line {
				height: 2px;
				width: calc(100% - 20px);
				background: var(--third-color);
				position: absolute;
				top: calc(70% - 1px);
				left: 10px;
				overflow: visible;
				animation: ;
			}
			.marker {
				width: calc(16.666% + 3.33px);
				height: 100px;
				/* outline: 1px solid white; */
				position: relative;
				display: flex;
				justify-content: center;
				transition: background 0.5s ease;
				.tag_secondary {
					width: 15px;
					height: 15px;
					outline: 1px solid white;
					position: absolute;
					left: calc(50% - 7.5px);
					top: calc(70% - 7.5px);
					transform: rotate(45deg);
					border-radius: 1px;
					background: var(--second-color);
					transition: transform 0.3s ease, background 0.5s ease;
					animation: appearingmain 0.8s ease 0.5s forwards;
					opacity: 0;
				}
				.tag_primary {
					width: 7.5px;
					height: 7.5px;
					background: var(--third-color);
					position: absolute;
					left: calc(50% - 3.75px);
					top: calc(50% - 3.75px);
					outline: 1px solid rgba(0, 0, 0, 0);
					border-radius: 1px;
					animation: appearingmain 0.8s ease 0.5s forwards;
					opacity: 0;
				}
				.marker_title {
					color: var(--main-color);
					transition: color 2s, transform 0.3s ease;
					text-align: center;
					margin: 0;
					margin-top: 5px;
					max-height: 50%;
					display: flex;
					align-items: center;
					font-family: "Lexend";
					font-size: 14px;
					animation: appearingmain 0.8s ease 0.8s forwards;
					opacity: 0;
				}
				.marker_logo {
					transition: transform 0.3s ease;
					display: none;
					max-width: 30px;
					height: auto;
					max-height: 50%;
					margin-top: 5px;
				}
				@media (max-width: 810px) {
					.marker_title {
						display: none;
					}
					.marker_logo {
						display: flex;
					}
				}
			}
			.marker:hover {
				background: rgba(255, 255, 255, 0.05);
				cursor: pointer;
				.tag_secondary {
					background: white;
					transform: rotate(45deg) scale(1.05) translateX(-2px)
						translateY(-2px);
					transition: transform 0.5s ease, filter 0.5s ease;
					filter: drop-shadow(1px 1px 5px red);
				}
				.marker_title {
					transform: scale(1.02) translateY(-1px);
				}
				.marker_logo {
					transform: scale(1.02) translateY(-1px);
				}
			}
		}
		.content_container {
			width: 90%;
			min-height: 550px;
			/* padding: 10px; */
			margin-top: 3px;
			background: var(--second-color);
			overflow: hidden;
			border: 10px solid var(--second-color);
			outline: 1px solid var(--second-color);
			position: relative;
			box-shadow: inset 0px 0px 60px -10px var(--fourth-color);
			.content_pages {
				display: flex;
				align-items: flex-start;
				width: 100%;
				height: 100%;
				min-height: 450px;
				transition: transform 0.5s ease;
				position: absolute;
				overflow-x: visible;
				top: 0;
				left: 0;
				opacity: 0;
				animation: appearingmain 0.5s ease 1s forwards;
				.page {
					position: relative;
					width: 100%;
					min-height: max-content;
					/* outline: 1px solid green; */
					display: flex;
					flex: 0 0 100%;
					flex-direction: column;
					justify-content: top;
					align-items: center;
					color: var(--main-color);
					h3 {
						text-align: center;
					}
					.page_content {
						display: flex;
						/* align-items: flex-start; */
						justify-content: center;
						gap: 25px;
						width: calc(100% - 100px);
						/* border: 1px solid red; */
						padding: 35px;
						.content_image {
							width: 100%;
							min-height: 150px;
							height: max-content;
							position: relative;
							display: flex;
							align-items: center;
							img {
								width: 100%;
								height: auto;
							}
							video {
								width: 100%;
								height: auto;
							}
							p {
								width: 100%;
								height: 100%;
								text-align: center;
								margin: 0;
								display: flex;
								align-items: center;
								justify-content: center;
							}
							.decoration_container {
								position: absolute;
								top: 0;
								left: 0;
								width: 100%;
								height: 100%;
								display: flex;
								flex-direction: column;
								justify-content: space-between;
								z-index: -2;
								background: var(--fourth-color);
								.decoration_top {
									width: 100%;
									height: 50px;
									position: relative;
									top: 0;
								}
								.decoration_top::after {
									position: absolute;
									content: "";
									width: 15px;
									height: 15px;
									left: -5px;
									top: -5px;
									border-left: 2px solid var(--third-color);
									border-top: 2px solid var(--third-color);
								}
								.decoration_top::before {
									position: absolute;
									content: "";
									width: 15px;
									height: 15px;
									top: -5px;
									right: -5px;
									border-right: 2px solid var(--third-color);
									border-top: 2px solid var(--third-color);
								}
								.decoration_bottom {
									width: 100%;
									height: 50px;
									position: relative;
									bottom: 0;
								}
								.decoration_bottom:after {
									position: absolute;
									content: "";
									width: 15px;
									height: 15px;
									bottom: -5px;
									right: -5px;
									border-right: 2px solid var(--third-color);
									border-bottom: 2px solid var(--third-color);
								}
								.decoration_bottom:before {
									position: absolute;
									content: "";
									width: 15px;
									height: 15px;
									bottom: -5px;
									left: -5px;
									border-left: 2px solid var(--third-color);
									border-bottom: 2px solid var(--third-color);
								}
							}
						}
						.content_description {
							width: 100%;
							height: max-content;
							outline: 2px solid var(--fourth-color);
							border-radius: 1px;
							padding: 5px;
							text-align: center;
							.description_indicator {
								color: var(--third-color);
								font-weight: bold;
							}
							p {
								margin: 0;
								font-family: Abel;
								text-align: center;
							}
							.date_indicator {
								text-align: center;
								width: 100%;
								display: flex;
								align-items: center;
								justify-content: center;
								gap: 15px;
								color: var(--third-color);
								font-family: "Orbitron";
								.calendar_date_indicator {
									max-width: 25px;
									height: auto;
								}
							}
							.evidences_group {
								display: flex;
								flex-direction: column;
								align-items: center;
								.evidence_link {
									color: var(--third-color);
									font-family: Lexend;
									display: flex;
								}
								.evidence_link:hover {
									text-decoration: underline;
								}
							}
						}
					}
					@media (max-width: 810px) {
						.page_content {
							flex-direction: column;
						}
					}
				}
			}
			.nav_arrow_container {
				position: absolute;
				top: 0;
				height: 100%;
				/* background: blue; */
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 25px;
				padding: 0 10px;
				cursor: pointer;
				.nav_arrow {
					border-left: 2px solid var(--third-color);
					border-top: 2px solid var(--third-color);
					width: 10px;
					height: 10px;
					transition: transform 0.5s ease, border-left 0.5s ease,
						border-top 0.5s ease;
				}
				.nav_arrow_left {
					transform: rotate(-45deg) translateX(5px) scale(1.1);
					transform-origin: center;
				}
				.nav_arrow_right {
					transform: rotate(135deg) translateX(5px) scale(1.1);
					transform-origin: center;
				}
			}
			.nav_arrow_container:hover {
				.nav_arrow {
					border-left: 2px solid var(--main-color);
					border-top: 2px solid var(--main-color);
				}
			}
			.left_arr_container {
				left: 0;
			}
			.right_arr_container {
				right: 0;
			}
		}
		.button_container {
			position: relative;
			display: flex;
			z-index: 8;
			transition: 0.3s ease;
			margin-top: 25px;
		}
		.button_container:hover {
			transform: scale(1.05);
			transition: 0.3s ease;
			/* box-shadow: black 0px 20px 20px -25px; */
		}
		.enter_button {
			opacity: 0;
			position: relative;
			text-decoration: none;
			background-color: var(--fourth-color);
			border: 1px solid var(--second-color);
			padding: 15px 35px;
			font-size: 30px;
			justify-self: center;
			animation: fadeIn 1s ease 1s forwards;
			cursor: pointer;
			transition: 0.5s ease;
			font-family: Orbitron;
			color: var(--main-color);
		}
		.enter_button:hover {
			color: var(--main-color);
			transition: 0.5s ease;
			filter: drop-shadow(0px 0px 5px red);
		}
	}
	@media (max-width: 810px) {
		.content_container {
			height: 700px;
		}
	}
	@media (max-width: 450px) {
		.content_container {
			height: 800px;
		}
	}
	@media (max-width: 380px) {
		.content_container {
			height: 1000px;
		}
	}
`;

export default Activities;
