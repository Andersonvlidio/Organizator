import styled from "styled-components";

export const ContainerHome = styled.div`
	display: flex;
	justify-contente: center;
	align-items: center;
	flex-direction: column;
	h1 {
		text-align: center;
		color: var(--primary-color);
		padding: 14px;
	}
	p {
		text-align: center;
		font-size: 18px;
	}

	.newListContainer {
		background-color: var(--primary-color);
		border: 1px solid var(--primary-color);
		border-radius: 50px;
		color: #fff;
		width: 50%;
		height: 45px;
		display: flex;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		margin: 14px;
		font-size: 18px;

		input {
			color: #fff;
			text-align: center;
			background-color: var(--primary-color);
			border: 0;
			outline: 0;
		}
	}
`;
