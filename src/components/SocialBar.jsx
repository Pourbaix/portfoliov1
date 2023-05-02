import styled from "styled-components";
import { DiGithubBadge } from "react-icons/di";
import { RiDiscordFill, RiSteamFill, RiLinkedinBoxFill } from "react-icons/ri";

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
					<DiGithubBadge className="icon" />
				</a>
				<a className="element" id="discord">
					<RiDiscordFill className="icon" />
				</a>
				<a className="element" id="steam">
					<RiLinkedinBoxFill className="icon" />
				</a>
				<div className="line"></div>
			</Content>
		</Main>
	);
}

const Main = styled.div`
	height: 35%;
	width: 5%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
	background: none;
	overflow: visible;
`;

const Content = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 5vw;
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
		top: -100%;
		height: 100%;
		left: 0%;
		position: absolute;
		color: var(--third-color);
		transition: 1 ease;
		display: flex;
		align-items: center;
	}
	/* #github:hover::after {
		animation: githubWrite 0.8s ease forwards;
		transition: 0.5s ease;
	}
	#discord:hover::after {
		animation: discordWrite 0.8s ease forwards;
		transition: 0.5s ease;
	}
	#steam:hover::after {
		animation: steamWrite 0.8s ease forwards;
		transition: 0.5s ease;
	} */
	.line {
		height: 1px;
		width: 0;
		border-top: 1px solid var(--second-color);
		animation: slideOut 1s ease 1s forwards;
	}
	.icon {
		transition: 0.25s ease;
		color: var(--second-color);
		font-size: 4vw;
	}
	.icon:hover {
		transform: scale(1.2) translateY(-15%);
		cursor: pointer;
		transition: 0.35s ease;
		filter: drop-shadow(1px 1px 1px var(--third-color));
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
			width: 0;
		}
		100% {
			width: 8vh;
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
	@media (max-width: 750px) {
		.icon {
			font-size: 8vw;
		}
	}
`;

export default SocialBar;
