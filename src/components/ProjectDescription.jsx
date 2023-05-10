import styled from "styled-components";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const ProjectDescription = (props) => {
	const [modalVisibility, setModalVisibility] = useState(props.toggleModal);

	const modal = useRef(null);
	const modalContent = useRef(null);

	const toggleModal = () => {
		if (props.toggleModal) {
			modal.current.style.display = "flex";
		} else {
			modal.current.style.display = "none";
		}
		setModalVisibility(props.toggleModal);
	};

	useEffect(() => {
		toggleModal();
	}, [props.toggleModal]);

	return (
		<Main ref={modal}>
			<div className="modal_content" ref={modalContent}>
				<div className="modal_body">
					<div
						className="modal_closer"
						onClick={() => {
							props.closeFuntion();
						}}
					>
						X
					</div>
					<p className="modal_title">Hours resume table</p>
					<table className="table">
						<thead>
							<tr>
								<th>Hours resume table</th>
								<th>OCR course 1: Machine Learning</th>
								<th>OCR course 2: C++</th>
								<th>EPHEC Hackathon</th>
								<th>Music: Piano</th>
								<th>Video editing</th>
								<th>Portfolio</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th>Realisation period</th>
								<th>2021-2022</th>
								<th>2022 Summer Holidays</th>
								<th>2022</th>
								<th>2018-2023</th>
								<th>2017-2023</th>
								<th>2022-2023</th>
							</tr>
							<tr className="mark">
								<th>Number of hours valorized</th>
								<th>10h</th>
								<th>10h</th>
								<th>10h</th>
								<th>10h</th>
								<th>10h</th>
								<th>10h</th>
							</tr>
							<tr>
								<th>Number of real hours</th>
								<th>12h</th>
								<th>20h</th>
								<th>48h</th>
								<th>800h+</th>
								<th>100h</th>
								<th>50h</th>
							</tr>
						</tbody>
					</table>
					<div className="mobile_display">
						<span>🤳🏼</span>
						<h4>
							For the summary, please follow{" "}
							<a
								href="https://drive.google.com/drive/folders/1AKggq4zqF6F_KqvEUIGCH_fGh9WfHQm_?usp=sharing"
								className="mobile_version_link"
							>
								this link
							</a>
							.
						</h4>
					</div>
				</div>
			</div>
		</Main>
	);
};

const Main = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.2);
	backdrop-filter: blur(0px);
	animation: bluring 0.3s ease forwards;
	transition: backdrop-filter 1s ease;
	color: var(--fourth-color);
	font-size: 28px;
	z-index: 400;
	display: none;
	justify-content: center;
	align-items: center;
	.modal_content {
		width: 0;
		height: 75vh;
		background: var(--main-color);
		position: relative;
		opacity: 1;
		animation: opening 0.6s ease forwards 0.3s;
		will-change: width;
		.modal_body {
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			height: 100%;
			opacity: 0;
			animation: appearing 0.1s ease forwards 0.9s;
			.modal_closer {
				position: absolute;
				right: 0;
				top: 0;
				padding: 15px;
				cursor: pointer;
			}
			.table {
				width: 95%;
				/* border: 1px solid green; */
				height: 100%;
				box-sizing: border-box;
				font-size: 16px;
				margin-bottom: 25px;
				thead th:nth-child(1) {
					background: var(--amin-color);
					color: var(--second-color);
					font-family: russo one;
					font-size: 20px;
					border: 1px solid var(--second-color);
				}
				thead th {
					background: var(--third-color);
					color: var(--main-color);
				}
				tbody th:nth-child(1) {
					background: var(--second-color);
					color: var(--main-color);
					font-family: russo one;
				}
				tbody th {
					background: var(--fourth-color);
					color: var(--main-color);
					border: var(--main-color);
				}
				.mark {
					* {
						color: var(--third-color);
						font-size: 18px;
					}
				}
			}
			.mobile_display {
				display: flex;
				flex-direction: column;
				width: 100%;
				height: 100%;
				justify-content: center;
				align-items: center;
				text-align: center;
				font-size: 25px;
				.mobile_version_link {
					color: var(--third-color);
					text-decoration: underline;
				}
				a {
					cursor: pointer;
				}
				span {
					margin: 0;
					font-size: 45px;
				}
			}
			.modal_title {
				font-family: Russo One;
				margin: 15px;
			}
		}
	}
	.modal_content::after {
		content: "";
		width: 100%;
		height: 2px;
		position: absolute;
		top: -10px;
		left: 0;
		background: var(--third-color);
	}
	.modal_content::before {
		content: "";
		width: 100%;
		height: 2px;
		position: absolute;
		bottom: -10px;
		left: 0;
		background: var(--third-color);
	}
	@media (max-width: 580px) {
		.table {
			display: none;
		}
	}

	@media (min-width: 580px) {
		.mobile_display {
			display: none !important;
		}
	}

	@keyframes bluring {
		0% {
			backdrop-filter: blur(0px);
		}
		100% {
			backdrop-filter: blur(5px);
		}
	}
	@keyframes appearing {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes deopening {
		0% {
			width: 90vw;
		}
		100% {
			width: 0;
		}
	}

	@keyframes opening {
		0% {
			width: 0;
		}
		100% {
			width: 90vw;
		}
	}
`;

export default ProjectDescription;
