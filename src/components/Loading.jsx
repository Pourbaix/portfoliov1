import styled from "styled-components";

const Loading = () => {
	return (
		<Main>
			<div className="animated_dots"></div>
		</Main>
	);
};

const Main = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 250px;
	.animated_dots {
		width: 10px;
		height: 10px;
		background: var(--third-color);
		position: relative;
		overflow: visible;
		animation: loadingAnim 2s ease-in-out infinite;
		border-radius: 50%;
	}
	.animated_dots::before,
	.animated_dots::after {
		content: "";
		position: absolute;
		width: 10px;
		height: 10px;
		background: var(--third-color);
		top: 0;
		border-radius: 50%;
	}
	.animated_dots::before {
		left: -20px;
		transform-origin: right;
		margin-right: 40px;
	}
	.animated_dots::after {
		right: -20px;
		transform-origin: left;
		margin-left: 40px;
	}

	@keyframes loadingAnim {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(180deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export default Loading;
