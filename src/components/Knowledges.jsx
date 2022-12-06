import styled from "styled-components";
import { forwardRef, useRef, useState } from "react";
import KnowledgeDesc from "./KnowledgeDesc";

const Knowledges = forwardRef((props, ref) => {
	const rightSelector = useRef(null);
	const leftSelector = useRef(null);

	const selectorContainer = useRef(null);

	const lastDiv = useRef(null);

	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	const [skill, setSkill] = useState("");
	const [love, setLove] = useState("");
	const [description, setDescription] = useState("");

	const contentList = [
		{
			name: "React",
			logo: "React.svg",
			widthSkill: "60%",
			widthLove: "80%",
			description:
				"I began learning React in 2020 for a school project and at the time I found it quite difficult. But now, with a bit more practice, this framework looks so interesting and the possibilities seems endless!",
		},
		{
			name: "VueJS",
			logo: "Vue.svg",
			widthSkill: "40%",
			widthLove: "60%",
			description:
				"This framework was introduced by a friend of mine. The learning curve is easier than React and i must admit that some things are more praticle in Vue than in React. But React stays my favorite framework.",
		},
		{
			name: "TypeScript",
			logo: "Typescript.svg",
			widthSkill: "40%",
			widthLove: "20%",
			description:
				"I began learning Typescript at the same time than Vue. I understand the positive points of this language compare to JavaScript, but when you code in TypeScript, it is so anoying !",
		},
		{
			name: "JavaScript",
			logo: "Javascript.svg",
			widthSkill: "40%",
			widthLove: "80%",
			description: "Text desc",
		},
		{
			name: "CSS",
			logo: "css.svg",
			widthSkill: "60%",
			widthLove: "100%",
			description: "Text desc",
		},
		{
			name: "Python",
			logo: "Python.svg",
			widthSkill: "20%",
			widthLove: "40%",
			description: "Text desc",
		},
	];

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

		// console.log(element);
		if (element.tagName == "DIV") {
			selectedElement = element;
		} else {
			// console.log(element.parentElement);
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
		setSkill(contentList[selectedElement.id - 1]["widthSkill"]);
		setLove(contentList[selectedElement.id - 1]["widthLove"]);
		setDescription(contentList[selectedElement.id - 1]["description"]);
	};

	// ----------------------------
	// swapSelector(:element:)
	// ----------------------------
	// FR: Permet de changer le style de la tecnologie actuellement choisie
	// EN: Changes the style of the selected technology

	const swapSelector = (element) => {
		let selectedElement = getDivFromElement(element);

		// console.log(element);

		// console.log(parseInt(selectedElement.id));
		let divHeight = parseInt(getComputedStyle(selectedElement).height);
		// console.log("Taille de la div: " + divHeight + "px");
		let divPos = divHeight * (parseInt(selectedElement.id) - 1);
		// console.log("Nombre de pixel avant la div: " + divPos);
		// console.log(getComputedStyle(rightSelector.current).borderTop);
		// console.log(
		// 	"Position des curseurs: " + (divPos + divHeight / 2 - 10) + "px"
		// );
		let newSlectorPos = divPos + divHeight / 2 - 9;
		let totalHeight = parseInt(
			getComputedStyle(selectorContainer.current).height
		);
		// console.log(totalHeight, newSlectorPos);
		let heightInPorcentage = (newSlectorPos / totalHeight) * 100;
		// console.log("Position to top %: " + heightInPorcentage);
		rightSelector.current.style.top = heightInPorcentage + "%";
		leftSelector.current.style.top = heightInPorcentage + "%";
		rightSelector.current.style.opacity = "1";
		leftSelector.current.style.opacity = "1";
	};

	// ----------------------------
	// swapStyle(:element:)
	// ----------------------------
	// FR: Permet de changer le style de la tecnologie actuellement choisie
	// EN: Changes the style of the selected technology

	const swapStyle = (element) => {
		// console.log(element);

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
	return (
		<Main ref={ref}>
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
						<div
							className="selector_item"
							id="1"
							onClick={(e) => {
								updateElementClicked(e.target);
							}}
						>
							<img
								className="selector_logo"
								src="/src/assets/logo/React.svg"
							/>
						</div>
						<div
							className="selector_item"
							id="2"
							onClick={(e) => {
								updateElementClicked(e.target);
							}}
						>
							<img
								className="selector_logo"
								src="/src/assets/logo/Vue.svg"
							/>
						</div>
						<div
							className="selector_item"
							id="3"
							onClick={(e) => {
								updateElementClicked(e.target);
							}}
						>
							<img
								className="selector_logo"
								src="/src/assets/logo/Typescript.svg"
							/>
						</div>
						<div
							className="selector_item"
							id="4"
							onClick={(e) => {
								updateElementClicked(e.target);
							}}
						>
							<img
								className="selector_logo"
								src="/src/assets/logo/Javascript.svg"
							/>
						</div>
						<div
							className="selector_item"
							id="5"
							onClick={(e) => {
								updateElementClicked(e.target);
							}}
						>
							<img
								className="selector_logo"
								src="/src/assets/logo/css.svg"
							/>
						</div>
						<div
							className="selector_item"
							id="6"
							onClick={(e) => {
								updateElementClicked(e.target);
							}}
						>
							<img
								className="selector_logo"
								src="/src/assets/logo/Python.svg"
							/>
						</div>
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
	/* border: 1px solid red; */
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 15px;
		width: 95%;
		max-width: 1200px;
		/* border: 1px solid var(--fourth-color); */
		overflow: visible;
		position: relative;
		padding: 25px 25px;
		/* box-shadow: black 0 0 40px -35px; */
		/* background-color: var(--fourth-color); */
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
				/* border-top: 2px dashed var(--second-color); */
				border-bottom: 2px dashed var(--second-color);
			}
		}
		/* .header::before {
			position: absolute;
			content: "▹";
			left: 0;
			width: 30px;
		} */
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
	/* .content::after {
		width: 60px;
		height: 60px;
		content: "";
		position: absolute;
		border-top: 3px solid var(--second-color);
		border-left: 3px solid var(--second-color);
		top: -2px;
		left: -2px;
	}
	.content::before {
		width: 60px;
		height: 60px;
		content: "";
		position: absolute;
		border-bottom: 3px solid var(--second-color);
		border-right: 3px solid var(--second-color);
		bottom: -2px;
		right: -2px;
	} */
`;

export default Knowledges;
