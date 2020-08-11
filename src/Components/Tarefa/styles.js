import styled from "styled-components";

export const TaskListContainer = styled.li`
	list-style: none;
	margin: 5px;

	.close-button-task {
		visibility: hidden;
		opacity: 0;
		transition: all 0.3s;
	}

	&:hover .close-button-task {
		visibility: visible;
		opacity: 1;
		cursor: pointer;
	}
	input:checked {
		background-color: red;
	}
	input {
		color: #000;
		border: 0;
		outline: 0;
	}
	span {
		font-size: 15px;
		margin: 8px;
		color: var(--primary-color);
	}
`;
