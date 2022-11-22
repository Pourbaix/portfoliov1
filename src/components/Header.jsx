import styled from "styled-components";
import { AiOutlineUser, AiOutlineBook } from "react-icons/ai";
import { HiOutlineBookOpen } from "react-icons/hi";
import { BsPin } from "react-icons/bs";
import { useRef, useState } from "react";

function Header(props) {
	const [pinEnabled, setPinEnabled] = useState(true);

	const pin = useRef(null);
	const header = useRef(null);

	const swapHeaderMode = () => {
		// console.log(pin.current);
		if (pinEnabled) {
			pin.current.childNodes[0].style.color = "var(--main-color)";
			setPinEnabled(false);
		} else {
			pin.current.childNodes[0].style.color = "var(--third-color)";
			setPinEnabled(true);
		}
	};

	const showHeader = () => {
		if (!pinEnabled) {
			pin.current.style.top = "24px";
			header.current.style.top = "";
		}
	};
	const hideHeader = () => {
		if (!pinEnabled) {
			pin.current.style.top = "-26px";
			header.current.style.top = "-50px";
		}
	};
	return (
		<Main>
			<div
				className="content"
				onMouseEnter={showHeader}
				onMouseLeave={hideHeader}
			>
				<div className="header_pin" ref={pin}>
					<BsPin
						className="pin_logo"
						color="red"
						size="1.5em"
						onClick={swapHeaderMode}
					/>
				</div>
				<div className="header_content" ref={header}>
					<div className="header">
						<div
							id="tab1"
							className="tab"
							onClick={() => {
								props.onSwapToContent(0);
							}}
						>
							<AiOutlineUser
								id="tab1Icon"
								className="header_icon"
							/>
							<p className="sub_p">About me</p>
						</div>
						<div
							id="tab2"
							className="tab"
							onClick={() => {
								props.onSwapToContent(1);
							}}
						>
							<AiOutlineBook
								id="tab2Icon"
								className="header_icon"
							/>
							<p className="sub_p">My Projects</p>
						</div>
						<div
							id="tab3"
							className="tab"
							onClick={() => {
								props.onSwapToContent(2);
							}}
						>
							<HiOutlineBookOpen
								id="tab3Icon"
								className="header_icon"
							/>
							<p className="sub_p">Knowledges</p>
						</div>
						<div id="tab4" className="tab">
							<AiOutlineUser
								id="tab4Icon"
								className="header_icon"
							/>
							<p className="sub_p">About me</p>
						</div>
					</div>
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
	.content {
		width: 100%;
		height: 70px;
		position: relative;
		.header_pin {
			left: 2%;
			/* top: -60px; */
			top: 24px;
			transition: 0.5s ease;
			position: absolute;
			z-index: 10;
			cursor: pointer;
			transform-origin: center;
			animation: appearTab 0.5s ease 1s forwards;
			opacity: 0;
		}
		.pin_logo {
			transition: 0.5s ease;
		}
		.header_content {
			width: 100%;
			height: 70px;
			position: absolute;
			/* top: -60px; */
			top: 0;
			transition: 0.5s ease;
			.header {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: 5%;
				width: 100%;
				/* max-width: 1200px; */
				height: 100%;
				/* background: #383838; */
				background: rgb(0, 0, 0, 0.8);
				backdrop-filter: blur(4px);
				position: relative;
				overflow: visible;
				animation: openHeader 0.8s linear forwards;
				box-shadow: black 0px 20px 45px -34px;
				color: var(--main-color);
				transition: 0.3s ease;
				.tab {
					font-size: 1.5em;
					opacity: 0;
					cursor: pointer;
					font-family: Orbitron;
					display: flex;
					flex-direction: row;
					gap: 5px;
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
			}
			.header:hover {
				backdrop-filter: blur(0px);
				background: var(--second-color);
				transition: 0.3s ease;
			}
			.header::before {
				content: "";
				width: 100%;
				height: 0;
				background: none;
				position: absolute;
				bottom: -5px;
				border-bottom: 2px solid var(--third-color);
			}
		}
	}
	.content:hover {
		.header_content {
			top: 0;
			transition: 0.5s ease;
		}
		.header_pin {
			top: 24px;
			transition: 0.5s ease;
		}
	}
	@media (max-width: 950px) {
		.sub_p {
			display: none;
		}
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
