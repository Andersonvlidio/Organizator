import styled from "styled-components";

export const ListContainerCard = styled.li`
	padding: 15px;
	margin: 15px;
	min-width: 237px;
	border: 1px solid var(--primary-color);
	background-color: var(--primary-color);
	color: #fff;
	border-radius: 15px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.close-button {
		visibility: hidden;
		opacity: 0;
		transition: all 0.3s;
	}

	&:hover .close-button {
		visibility: visible;
		opacity: 1;
		cursor: pointer;
	}

	input {
		color: #fff;
		text-align: center;
		background-color: var(--primary-color);
		border: 0;
		outline: 0;
	}
	button {
		background-color: var(--primary-color);
		border: 0;
		outline: 0;
		padding: 0 15px;
		cursor: pointer;
	}
	span {
		font-size: 15px;
		margin: 5px;
	}
`;
