import React, { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { TaskListContainer } from "./styles";

const Tarefa = ({ tarefa, onClickCheckbox, updateTaskName, deleteTask }) => {
	const [edit, setEdit] = useState(false);
	const [fieldValue, setFildValue] = useState(tarefa.nome);
	const editFild = useRef(null);

	useEffect(() => {
		if (edit) editFild.current.focus();
	}, [edit]);

	const onBlurEdit = () => {
		setEdit(false);
		updateTaskName(tarefa, fieldValue);
	};

	return (
		<TaskListContainer>
			<div>
				<input
					checked={tarefa.finalizada}
					type="checkbox"
					onChange={() => onClickCheckbox(tarefa)}
				/>
				{edit ? (
					<input
						onBlur={onBlurEdit}
						type="text"
						value={fieldValue}
						ref={editFild}
						onChange={(e) => setFildValue(e.target.value)}
					/>
				) : (
					<>
						<span
							onClick={() => {
								setEdit(true);
							}}
						>
							{tarefa.nome}
						</span>
						<span
							className="close-button-task"
							onClick={() => {
								deleteTask(tarefa.id);
							}}
						>
							<FaTimes color="#fff" />
						</span>
					</>
				)}
			</div>
		</TaskListContainer>
	);
};

export default Tarefa;
