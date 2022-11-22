import styled from "styled-components";
import { DiGithubBadge } from "react-icons/di";
import { RiDiscordFill, RiSteamFill } from "react-icons/ri";

function SocialBar() {
	return (
		<Main>
			<Content>
				<div className="line"></div>
				<a
					className="element"
					href="https://github.com/Pourbaix"
					target="_blank"
					id="github"
				>
					<DiGithubBadge size="4vh" className="icon" />
				</a>
				<a className="element" id="discord">
					<RiDiscordFill size="3.5vh" className="icon" />
				</a>
				<a className="element" id="steam">
					<RiSteamFill size="3.5vh" className="icon" />
				</a>
				<div className="line"></div>
			</Content>
		</Main>
	);
}

const Main = styled.div`
	position: fixed;
	top: 37.5%;
	/* top: 65%; */
	left: 0;
	height: 35%;
	width: 5%;
	/* border: 1px solid blue; */
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
	background: none;
	overflow: visible;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 15px;
	font-family: Prompt;
	.element {
		display: flex;
		position: relative;
		opacity: 0;
		animation: appearIcon 1s ease 2s forwards;
		overflow: visible;
	}
	.element::after {
		content: "";
		top: 0;
		height: 100%;
		left: 120%;
		position: absolute;
		color: var(--third-color);
		transition: 1 ease;
		display: flex;
		align-items: center;
	}
	.element:hover {
		color: blue;
	}
	#github:hover::after {
		animation: githubWrite 0.3s ease forwards;
		transition: 0.5s ease;
	}
	#discord:hover::after {
		animation: discordWrite 0.3s ease forwards;
		transition: 0.5s ease;
	}
	#steam:hover::after {
		animation: steamWrite 0.3s ease forwards;
		transition: 0.5s ease;
	}
	.line {
		height: 0;
		width: 1px;
		border-left: 1px solid var(--second-color);
		animation: slideOut 1s ease 1s forwards;
	}
	.icon {
		transition: 0.25s ease;
		color: var(--second-color);
		min-width: ;
	}
	.icon:hover {
		transform: scale(1.2);
		cursor: pointer;
		color: var(--third-color);
		transition: 0.25s ease;
		opacity: 0.9;
	}
	@keyframes appearIcon {
		0% {
			opacity: 0;
			transform: scale(1.1);
		}
		100% {
			opacity: 1;
			transform: scale(1);
		}
	}
	@keyframes slideOut {
		0% {
			height: 0;
		}
		100% {
			height: 6vh;
		}
	}
	@keyframes githubWrite {
		0% {
			content: "";
		}
		11% {
			content: "@";
		}
		22% {
			content: "@P";
		}
		33% {
			content: "@Po";
		}
		44% {
			content: "@Pou";
		}
		55% {
			content: "@Pour";
		}
		66% {
			content: "@Pourb";
		}
		77% {
			content: "@Pourba";
		}
		88% {
			content: "@Pourbai";
		}
		99% {
			content: "@Pourbaix";
		}
		100% {
			content: "@Pourbaix";
		}
	}
	@keyframes steamWrite {
		0% {
			content: "";
		}
		12.5% {
			content: "M";
		}
		25% {
			content: "Ma";
		}
		37.5% {
			content: "MaZ";
		}
		50% {
			content: "MaZe";
		}
		62.5% {
			content: "MaZep";
		}
		75% {
			content: "MaZepp";
		}
		87.5% {
			content: "MaZeppA";
		}
		100% {
			content: "MaZeppAa";
		}
	}
	@keyframes discordWrite {
		0% {
			content: "";
		}
		12.5% {
			content: "#";
		}
		25% {
			content: "#M";
		}
		37.5% {
			content: "#Ma";
		}
		50% {
			content: "#MaZ";
		}
		62.5% {
			content: "#MaZe";
		}
		75% {
			content: "#MaZep";
		}
		87.5% {
			content: "#MaZepp";
		}
		100% {
			content: "#MaZeppA";
		}
	}
`;

export default SocialBar;
