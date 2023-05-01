import styled from "styled-components";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const ProjectDescription = (props) => {
	const [modalVisibility, setModalVisibility] = useState(true);

	const modal = useRef(null);
	const modalContent = useRef(null);

	const toggleModal = () => {
		if (modalVisibility) {
			modal.current.style.display = "none";
			setModalVisibility(false);
		} else {
			modal.current.style.display = "flex";
			setModalVisibility(true);
		}
	};

	useEffect(() => {
		toggleModal();
	}, [props.toggleModal]);

	return (
		<Main ref={modal}>
			<div className="modal_content" ref={modalContent}>
				<div className="modal_body">
					<div className="modal_closer" onClick={toggleModal}>
						X
					</div>
					<p>Project description</p>
					<p>Pass data via props </p>
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
		height: 70vh;
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
