import styled from "styled-components";

import CornerLogoComponent from "/src/assets/logo/fullLogo2.svg";

function CornerLogo() {
	return (
		<Main>
			<Content>
				<img src={CornerLogoComponent} alt="Logo of my portfolio." />
			</Content>
		</Main>
	);
}

const Main = styled.div`
	position: fixed;
	bottom: 10px;
	right: 10px;
	height: fit-content;
	width: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 15px;
	img {
		width: 50px;
		height: auto;
		transition: 1s ease;
		/* animation: rotateSlowly 15s linear infinite; */
	}
	img:hover {
		transform: rotateY(-360deg);
		transition: 1s ease;
	}
	@keyframes rotateSlowly {
		100% {
			transform: rotateY(-360deg);
		}
	}
`;

export default CornerLogo;
