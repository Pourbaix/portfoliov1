import styled from "styled-components";
import { forwardRef, useRef, useState, memo, useEffect } from "react";
import KnowledgeDesc from "./KnowledgeDesc";

import ReactLogo from "/src/assets/logo/knowledges/React.svg";
import VueJSLogo from "/src/assets/logo/knowledges/Vue.svg";
import TypeScriptLogo from "/src/assets/logo/knowledges/Typescript.svg";
import JavaScriptLogo from "/src/assets/logo/knowledges/Javascript.svg";
import CSSLogo from "/src/assets/logo/knowledges/CSS.svg";
import DjangoLogo from "/src/assets/logo/knowledges/Django.svg";

const Knowledges = forwardRef((props, ref) => {
	const rightSelector = useRef(null);
	const leftSelector = useRef(null);

	const selectorContainer = useRef(null);

	const lastDiv = useRef(null);

	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	const [colorTheme, setColorTheme] = useState("");
	const [skill, setSkill] = useState("");
	const [love, setLove] = useState("");
	const [description, setDescription] = useState("");

	const contentList = [
		{
			name: "React",
			logo: ReactLogo,
			color_theme: "rgb(97, 219, 251, 0.5)",
			widthSkill: "60%",
			widthLove: "80%",
			description:
				"I began learning React in 2020 for a school project and at the time I found it quite difficult. But now, with a bit more practice, this framework looks so interesting and the possibilities seems endless!",
		},
		{
			name: "VueJS",
			logo: VueJSLogo,
			color_theme: "rgb(65, 184, 130, 0.5)",
			widthSkill: "40%",
			widthLove: "60%",
			description:
				"This framework was introduced by a friend of mine. The learning curve is easier than React and i must admit that some things are more praticle in Vue than in React. But React stays my favorite framework.",
		},
		{
			name: "TypeScript",
			logo: TypeScriptLogo,
			color_theme: "rgb(0, 122, 204, 0.5)",
			widthSkill: "40%",
			widthLove: "40%",
			description:
				"I began learning Typescript at the same time than Vue. I understand the positive points of this language compare to JavaScript, but when you code in TypeScript, it is much more time consuming!",
		},
		{
			name: "JavaScript",
			logo: JavaScriptLogo,
			color_theme: "rgb(50, 51, 48, 0.5)",
			widthSkill: "60%",
			widthLove: "80%",
			description:
				"Javascript is a 'must have' when you want to build web apps but it is hard to master completely. I would say it is one of my favorite language even if some things are wierd in it. Also, it was my first coding language.",
		},
		{
			name: "CSS",
			logo: CSSLogo,
			color_theme: "rgb(41, 101, 241, 0.5)",
			widthSkill: "60%",
			widthLove: "100%",
			description:
				"I don't remember how and why I started to like CSS, but I freaking love it! The flow of properties that you can use and the number of ways in which you can use them is just incredible. Once you understood CSS, you can only love it!",
		},
		{
			name: "Django",
			logo: DjangoLogo,
			color_theme: "rgb(24, 128, 88, 0.5)",
			widthSkill: "60%",
			widthLove: "40%",
			description:
				"I learned and used django during my internship for my studies. The logic is a bit hard to catch at the beginning, but the framework comes with a lot of crucial elements built directly in and it makes a lot of things easier.",
		},
	];

	const formatedHtmlSelector = contentList.map((object, i) => (
		<div
			className="selector_item"
			id={i + 1}
			key={i}
			onClick={(e) => {
				updateElementClicked(e.target);
			}}
		>
			<img className="selector_logo" src={object.logo} />
		</div>
	));

	// ----------------------------
	// getDivFromElement(:element:)
	// ----------------------------
	// Permet que si on clique sur l'image aux lieu de cliquer sur la div
	// on obtient quand même la div en temps qu'élément sélectionné
	const getDivFromElement = (element) => {
		// Tester le type de la balise:
		// - Si c'est une div, on prend son id
		// - Si c'est un svg, on prend la div parent
		let selectedElement;

		if (element.tagName == "DIV") {
			selectedElement = element;
		} else {
			selectedElement = element.parentElement;
			let tempElement = selectedElement;
			if (tempElement.tagName !== "DIV") {
				selectedElement = tempElement.parentElement;
			}
		}
		return selectedElement;
	};

	// ----------------------------
	// changeDisplay(:element:)
	// ----------------------------
	// FR: Permet de changer ce qui est affiché dans le composant des détails
	// EN: Changes what is displayed on the technoly details component

	const changeDisplay = (element) => {
		let selectedElement = getDivFromElement(element);
		setName(contentList[selectedElement.id - 1]["name"]);
		setImage(contentList[selectedElement.id - 1]["logo"]);
		setColorTheme(contentList[selectedElement.id - 1]["color_theme"]);
		setSkill(contentList[selectedElement.id - 1]["widthSkill"]);
		setLove(contentList[selectedElement.id - 1]["widthLove"]);
		setDescription(contentList[selectedElement.id - 1]["description"]);
	};

	// ----------------------------
	// swapSelector(:element:)
	// ----------------------------
	// FR: Permet de changer le style de la technologie actuellement choisie
	// EN: Changes the style of the selected technology

	const swapSelector = (element) => {
		let selectedElement = getDivFromElement(element);

		let divHeight = parseInt(getComputedStyle(selectedElement).height);
		let divPos = divHeight * (parseInt(selectedElement.id) - 1);

		let newSlectorPos = divPos + divHeight / 2 - 9;
		let totalHeight = parseInt(
			getComputedStyle(selectorContainer.current).height
		);

		let heightInPorcentage = (newSlectorPos / totalHeight) * 100;

		rightSelector.current.style.top = heightInPorcentage + "%";
		leftSelector.current.style.top = heightInPorcentage + "%";
		rightSelector.current.style.opacity = "1";
		leftSelector.current.style.opacity = "1";
	};

	// ----------------------------
	// swapStyle(:element:)
	// ----------------------------
	// FR: Permet de changer le style de la technologie actuellement choisie
	// EN: Changes the style of the selected technology

	const swapStyle = (element) => {
		let selectedElement = getDivFromElement(element);

		if (lastDiv.current) {
			lastDiv.current.childNodes[0].style.filter = "";
			lastDiv.current.style.background = "";
		}
		lastDiv.current = selectedElement;
		let color = getComputedStyle(document.documentElement).getPropertyValue(
			"--fourth-color"
		);
		selectedElement.childNodes[0].style.filter = "saturate(1)";
		selectedElement.style.background = color;
	};

	const updateElementClicked = (element) => {
		swapSelector(element);
		swapStyle(element);
		changeDisplay(element);
	};

	useEffect(() => {
		// Select React as the first knowledge element visible
		updateElementClicked(document.getElementById(1));
	}, []);
	return (
		<Main ref={ref}>
			{console.log("render")}
			<div className="content">
				<div className="header_container">
					<h1 className="header">
						<span
							style={{
								color: getComputedStyle(
									document.documentElement
								).getPropertyValue("--third-color"),
								fontSize: "25px",
							}}
						>
							3.
						</span>
						My knowledges
					</h1>
				</div>
				<div className="main_content">
					<div className="selector" ref={selectorContainer}>
						{formatedHtmlSelector}
						<div
							className="selector_icon_right"
							ref={rightSelector}
						></div>
						<div
							className="selector_icon_left"
							ref={leftSelector}
						></div>
						<div className="decoration_container">
							<div className="decoration_top"></div>
							<div className="decoration_bottom"></div>
						</div>
					</div>
					<div className="content_display">
						<KnowledgeDesc
							name={name}
							image={image}
							colorTheme={colorTheme}
							skill={skill}
							love={love}
							description={description}
						/>
					</div>
				</div>
			</div>
		</Main>
	);
});

const Main = styled.div`
	width: 100%;
	margin-top: 100px;
	max-height: 1200px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 15px;
		width: 95%;
		max-width: 1200px;
		overflow: visible;
		position: relative;
		padding: 25px 25px;

		.header_container {
			width: 100%;
			/* display: flex; */
			.header {
				font-family: Russo One, monospace;
				position: relative;
				margin-bottom: 40px;
				padding-bottom: 2px;
				/* padding-left: 30px; */
				color: var(--second-color);
				/* letter-spacing: 1px; */
				/* width: 100%; */
				text-align: left;
				justify-self: left;
				font-size: 40px;
				border-bottom: 2px dashed var(--second-color);
			}
			@media (max-width: 400px) {
				.header {
					font-size: 35px;
				}
			}
		}
		.main_content {
			display: flex;
			flex-direction: row;
			/* align-items: center; */
			justify-content: center;
			width: 100%;
			gap: 2%;
			/* background: var(--second-color); */
			.selector {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				width: 20%;
				height: fit-content;
				background: var(--second-color);
				backdrop-filter: blur(5px);
				overflow: visible;
				position: relative;
				border: 1px solid var(--fourth-color);
				.selector_logo {
					margin: 15px 0;
					height: 45px;
					width: auto;
					color: white;
					filter: saturate(0);
					transition: ease 0.5s;
				}
				.selector_item {
					width: 100%;
					/* padding: 15px 0; */
					display: flex;
					justify-content: center;
					align-self: center;
					/* background: var(--second-color); */
					transition: 0.2s ease;
					cursor: pointer;
				}
				.selector_item:hover {
					.selector_logo {
						transform: scale(1.1);
						filter: saturate(1);
						transition: ease 0.5s;
					}
					background: var(--fourth-color);
				}
				.selector_icon_right {
					position: absolute;
					top: -10px;
					right: 0;
					border-top: 10px solid transparent;
					border-right: 10px solid var(--main-color);
					border-bottom: 10px solid transparent;
					overflow: visible;
					transition: 0.3s ease;
					opacity: 0;
				}
				.selector_icon_left {
					position: absolute;
					top: -10px;
					left: 0;
					border-top: 10px solid transparent;
					border-left: 10px solid var(--main-color);
					border-bottom: 10px solid transparent;
					overflow: visible;
					transition: 0.3s ease;
					opacity: 0;
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
			.content_display {
				width: 75%;
				/* border: 1px solid blue; */
				height: 500px;
			}
		}
	}
`;

export default Knowledges;
