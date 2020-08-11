import React from "react";
import Tarefa from "../Tarefa";
import { TaskContainer } from "./styles";

const ListaDeTarefas = ({
	tarefas,
	onClickCheckbox,
	updateTaskName,
	deleteTask,
}) => {
	return (
		<TaskContainer>
			{tarefas.map((item) => (
				<Tarefa
					deleteTask={deleteTask}
					updateTaskName={updateTaskName}
					onClickCheckbox={onClickCheckbox}
					key={item.id}
					tarefa={item}
				/>
			))}
		</TaskContainer>
	);
};

export default ListaDeTarefas;
