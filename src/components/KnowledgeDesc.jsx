import styled from "styled-components";

const KnowledgeDesc = (props) => {
	return (
		<Main>
			<Content>
				<div className="title">
					<h1>{props.name}</h1>
				</div>
				<div className="skill">
					<p>How much I know:</p>
					<div className="skill_bar">
						<div
							className="progress_bar"
							style={{ width: props.skill }}
						></div>
						<div className="step" style={{ left: "20%" }}></div>
						<div className="step" style={{ left: "40%" }}></div>
						<div className="step" style={{ left: "60%" }}></div>
						<div className="step" style={{ left: "80%" }}></div>
					</div>
					<p>How much I love:</p>
					<div className="skill_bar">
						<div
							className="progress_bar"
							style={{ width: props.love }}
						></div>
						<div className="step" style={{ left: "20%" }}></div>
						<div className="step" style={{ left: "40%" }}></div>
						<div className="step" style={{ left: "60%" }}></div>
						<div className="step" style={{ left: "80%" }}></div>
					</div>
				</div>
			</Content>
		</Main>
	);
};

const Main = styled.div`
	color: var(--second-color);
	width: 100%;
	height: 100%;
	h1 {
		margin: 0;
		transition: 1s ease;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	.title {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-family: Asap;
		width: 100%;
		margin-top: 15px;
	}
	.skill {
		margin-top: 10px;
		width: 40%;
		/* height: 80px; */
		background: rgb(255, 255, 255, 0.1);
		display: flex;
		flex-direction: column;
		gap: 0px;
		justify-content: center;
		align-items: center;
		p {
			margin: 0;
			margin-top: 30px;
			text-align: left;
			width: 100%;
		}
		.skill_bar {
			width: 100%;
			height: 12px;
			max-height: 30px;
			/* background: red; */
			outline: 2px solid var(--second-color);
			border-radius: 1px;
			overflow: visible;
			position: relative;
			.progress_bar {
				width: 0;
				height: 100%;
				background: linear-gradient(
					90deg,
					rgb(180, 0, 0),
					var(--third-color)
				);
				position: absolute;
				left: 0;
				top: 0;
				transition: 0.5s ease;
			}
			.step {
				width: 2px;
				height: 100%;
				position: absolute;
				background: var(--second-color);
				left: 0;
				top: 0;
			}
		}
	}
`;

export default KnowledgeDesc;
