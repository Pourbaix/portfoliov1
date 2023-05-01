import styled from "styled-components";

import LogoComponent from "/src/assets/logo/Logo.svg";

function Logo() {
	return (
		<Main>
			<div className="logo_container">
				<div className="line shape1"></div>
				<div className="line shape2"></div>
				<div className="line shape3"></div>
				<div className="line shape4"></div>
				<div className="line shape5"></div>
				<div className="line shape6"></div>
				<img src={LogoComponent} alt="My portfolio logo" />
			</div>
			<div className="loading_message">Chargement du portfolio . . .</div>
		</Main>
	);
}

const Main = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 0vh;
	margin-bottom: 50px;
	.logo_container {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 250px;
		width: 250px;
		overflow: visible;
		margin-bottom: 160px;
		animation: fadeOut 0.5s ease 4s forwards;
		img {
			top: 55%;
			position: absolute;
			animation: genLogo 1s ease 1.5s forwards;
			opacity: 0;
		}
		.line {
			position: absolute;
			width: 5%;
			height: 0%;
			border-radius: 5px;
			background: var(--third-color);
			top: 50%;
			left: 50%;
			transform-origin: top;
		}
		.shape1 {
			transform: rotate(-148.5deg);
			top: 75.5%;
			left: 15%;
			animation: generateEffect 0.2s linear 0.5s forwards;
		}
		.shape2 {
			transform: rotate(-90deg);
			top: 47.5%;
			left: 30%;
			animation: generateEffect 0.2s linear 0.7s forwards;
		}
		.shape3 {
			transform: rotate(-29deg);
			top: 45.5%;
			left: 62%;
			animation: generateEffect 0.2s linear 0.9s forwards;
		}
		.shape4 {
			left: 79%;
			top: 72%;
			transform: rotate(31.5deg);
			animation: generateEffect 0.2s linear 1.1s forwards;
		}
		.shape5 {
			left: 64.5%;
			top: 100%;
			transform: rotate(90deg);
			animation: generateEffect 0.2s linear 1.3s forwards;
		}
		.shape6 {
			left: 32.5%;
			top: 102%;
			transform: rotate(150.5deg);
			animation: generateEffect 0.2s linear 1.5s forwards;
		}
	}
	.loading_message {
		opacity: 0;
		font-size: 1.3em;
		text-align: center;
		position: relative;
		overflow: visible;
		margin-bottom: 160px;
		animation: fadeOut 0.2s ease 4s forwards;
	}
	.loading_message::after {
		content: "";
		position: absolute;
		width: 12%;
		height: 100%;
		background: #292929;
		top: 0;
		right: 0%;
		animation: textLoadingAnim 2s none infinite;
		transition: none;
	}
	@keyframes textLoadingAnim {
		0% {
			width: 12%;
		}
		33% {
			width: 8%;
		}
		66% {
			width: 4%;
		}
		100% {
			width: 0;
		}
	}
	@keyframes generateEffect {
		0% {
			height: 1px;
		}
		100% {
			height: 35%;
		}
	}
	@keyframes colored {
		100% {
			/* box-shadow: -1px 0 3px 1px var(--third-color); */
		}
	}
	@keyframes genLogo {
		0% {
			opacity: 0;
			transform: scale(0.5);
		}
		100% {
			opacity: 1;
			transform: scale(0.7);
		}
	}
	@keyframes fadeOut {
		0% {
			transform: scale(0.7);
		}
		100% {
			opacity: 0;
			transform: scale(0.5);
		}
	}
`;

export default Logo;
