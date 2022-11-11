import styled from "styled-components";
import { AiOutlineUser, AiOutlineBook } from "react-icons/ai";

function Header(props) {
	return (
		<Main>
			<div className="header">
				<div
					id="tab1"
					className="tab"
					onClick={() => {
						props.onSwapToContent(0);
					}}
				>
					<AiOutlineUser id="tab1Icon" className="header_icon" />
					<p className="sub_p">About me</p>
				</div>
				<div
					id="tab2"
					className="tab"
					onClick={() => {
						props.onSwapToContent(1);
					}}
				>
					<AiOutlineBook id="tab2Icon" className="header_icon" />
					<p className="sub_p">My Projects</p>
				</div>
				<div id="tab3" className="tab">
					<AiOutlineUser id="tab3Icon" className="header_icon" />
					<p className="sub_p">About me</p>
				</div>
				<div id="tab4" className="tab">
					<AiOutlineUser id="tab4Icon" className="header_icon" />
					<p className="sub_p">About me</p>
				</div>
			</div>
		</Main>
	);
}

const Main = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	position: fixed;
	z-index: 10;
	top: 0;
	.header {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 5%;
		width: 100%;
		/* max-width: 1200px; */
		height: 70px;
		/* background: #383838; */
		background: rgb(0, 0, 0, 0.75);
		backdrop-filter: blur(4px);
		position: relative;
		overflow: visible;
		animation: openHeader 0.8s linear forwards;
		box-shadow: black 0px 20px 45px -34px;
		color: var(--main-color);
		.tab {
			font-size: 1.5em;
			opacity: 0;
			cursor: pointer;
			font-family: Orbitron;
			display: flex;
			flex-direction: row;
			gap: 10px;
			width: fit-content;
			position: relative;
			overflow: visible;
		}
		.tab:hover {
			.sub_p::after {
				position: absolute;
				height: 2px;
				width: 100%;
				content: "";
				bottom: -8px;
				left: 0;
				background: var(--third-color);
				transition: 1s ease;
			}
			.header_icon {
				transform: scale(1.1) translateY(-1px);
			}
		}
		#tab1 {
			animation: appearTab 0.5s ease 1s forwards;
		}
		#tab1Icon:hover #tab1 {
			color: var(--third-color);
		}
		#tab2 {
			animation: appearTab 0.5s ease 1.3s forwards;
		}
		#tab3 {
			animation: appearTab 0.5s ease 1.6s forwards;
		}
		#tab4 {
			animation: appearTab 0.5s ease 1.9s forwards;
		}
		.sub_p {
			padding: 0;
			margin: 0;
			position: relative;
			transition: 1s ease;
		}
		.sub_p::after {
			position: absolute;
			height: 2px;
			width: 0;
			content: "";
			bottom: -8px;
			left: 0;
			background: var(--third-color);
			transition: 1s ease;
		}
		/* .sub_p::before {
			position: absolute;
			height: 100%;
			width: 100%;
			content: "About me";
			top: 0;
			left: 0;
			background: var(--main-color);
		} */
	}
	/* .header::after {
		content: "";
		width: 15%;
		height: 35%;
		background: none;
		position: absolute;
		top: -10px;
		left: -10px;
		border-top: 2px solid var(--third-color);
		border-left: 2px solid var(--third-color);
	} */
	/* .header::before {
		content: "";
		width: 15%;
		height: 35%;
		background: none;
		position: absolute;
		bottom: -10px;
		right: -10px;
		border-bottom: 2px solid var(--third-color);
		border-right: 2px solid var(--third-color);
	} */
	.header::before {
		content: "";
		width: 100%;
		height: 0;
		background: none;
		position: absolute;
		bottom: -5px;
		border-bottom: 2px solid var(--third-color);
	}
	@keyframes openHeader {
		0% {
			width: 0;
		}
		100% {
			opacity: 1;
			width: 100%;
		}
	}
	@keyframes appearTab {
		0% {
			opacity: 0;
			transform: translateX(-40px);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes slide_out {
		0% {
			width: 0;
		}
		100% {
			width: 100%;
		}
	}
`;

export default Header;
