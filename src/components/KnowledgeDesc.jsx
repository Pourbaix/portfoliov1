import styled from "styled-components";

import BackImage from "/src/assets/logo/knowledges/backimage.svg";

import { useRef, useEffect } from "react";

const KnowledgeDesc = (props) => {
	const logoContainer = useRef(null);

	useEffect(() => {
		if (logoContainer.current) {
			logoContainer.current.style.backgroundImage =
				"url(" + BackImage + ")";
		}
	}, [logoContainer]);

	return (
		<Main>
			<Content>
				{props.name ? (
					<>
						<div className="desc">
							<div className="filler"></div>
							<div
								className="logo_container"
								ref={logoContainer}
								style={{
									backgroundImage: "url(" + BackImage + ")",
								}}
							>
								<img
									src={props.image}
									className="logo"
									style={{
										filter:
											"drop-shadow( 0 8px 4px " +
											props.colorTheme +
											")",
									}}
								/>
							</div>
							<h2>{props.name}</h2>
							<p className="description">
								<span
									style={{
										color: getComputedStyle(
											document.documentElement
										).getPropertyValue("--third-color"),
									}}
								>
									▹
								</span>
								{props.description}
							</p>
							<p>How much I know:</p>
							<div className="skill_bar">
								<div
									className="progress_bar"
									style={{ width: props.skill }}
								></div>
								<div
									className="step"
									style={{ left: "20%" }}
								></div>
								<div
									className="step"
									style={{ left: "40%" }}
								></div>
								<div
									className="step"
									style={{ left: "60%" }}
								></div>
								<div
									className="step"
									style={{ left: "80%" }}
								></div>
							</div>
							<p>How much I love:</p>
							<div className="skill_bar">
								<div
									className="progress_bar"
									style={{ width: props.love }}
								></div>
								<div
									className="step"
									style={{ left: "20%" }}
								></div>
								<div
									className="step"
									style={{ left: "40%" }}
								></div>
								<div
									className="step"
									style={{ left: "60%" }}
								></div>
								<div
									className="step"
									style={{ left: "80%" }}
								></div>
							</div>
						</div>
					</>
				) : (
					""
				)}
			</Content>
		</Main>
	);
};

const Main = styled.div`
	color: var(--second-color);
	width: 100%;
	h1 {
		margin: 0;
		transition: 1s ease;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	.desc {
		margin-top: 10px;
		width: 85%;
		/* height: 80px; */
		display: flex;
		flex-direction: column;
		gap: 0;
		justify-content: center;
		align-items: center;
		background: var(--main-color);
		position: relative;
		p {
			margin: 0;
			margin-top: 0px;
			text-align: left;
			width: 100%;
			font-size: 13px;
			font-family: Orbitron;
			color: var(--third-color);
			text-align: center;
		}
		h2 {
			margin: 0;
			font-size: 30px;
			margin-top: 10px;
			margin-bottom: 35px;
			font-family: Russo One;
		}
		.filler {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background: var(--main-color);
			content: "";
			z-index: 10;
			animation: deployVertical 1s ease 1s forwards;
		}
		.logo_container {
			width: 200px;
			display: flex;
			justify-content: center;
			align-items: center;
			background-size: 15px;
			box-shadow: inset 0 0 5px 10px var(--main-color);
			.logo {
				width: auto;
				height: 65px;
				margin: 35px 0;
				animation: levitate 3s linear infinite;
			}
		}
		.description {
			font-size: 15px;
			color: var(--second-color);
			width: 90%;
			margin: 0;
			margin-bottom: 25px;
		}
		.skill_bar {
			width: 35%;
			height: 10px;
			max-height: 30px;
			outline: 1px solid var(--fourth-color);
			background: rgb(0, 0, 0, 0.05);
			border-radius: 2px;
			overflow: hidden;
			position: relative;
			margin: 5px;
			.progress_bar {
				width: 0;
				height: 100%;
				background: var(--third-color);
				position: absolute;
				left: 0;
				top: 0;
				transition: 0.5s ease;
			}
			.step {
				width: 1px;
				height: 100%;
				position: absolute;
				background: var(--second-color);
				left: 0;
				top: 0;
			}
		}
	}
	.desc:before {
		position: absolute;
		width: 100%;
		border-top: 2px solid var(--third-color);
		top: -10px;
		left: 0;
		content: "";
		transform-origin: right;
		animation: deployLine 0.5s ease reverse forwards;
		opacity: 0;
	}
	.desc:after {
		position: absolute;
		width: 100%;
		border-bottom: 2px solid var(--third-color);
		bottom: -10px;
		left: 0;
		content: "";
		transform-origin: left;
		animation: deployLine 0.5s ease reverse forwards;
		opacity: 0;
	}
	@keyframes levitate {
		0% {
			transform: translateX(0);
			transform: translateY(0);
		}
		50% {
			transform: translateY(-2px);
		}
		100% {
			transform: translateY(0);
		}
	}
	@keyframes deployLine {
		0% {
			opacity: 1;
			transform: scaleX(1);
		}
		100% {
			opacity: 1;
			transform: scaleX(0);
		}
	}
	@keyframes deployVertical {
		0% {
			transform: scaleY(1);
		}
		100% {
			transform: scaleY(0);
		}
	}
`;

export default KnowledgeDesc;
