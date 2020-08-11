import React, { useEffect, useState, useRef } from "react";
import Axios from "axios";
import ListaDeTarefas from "../../Components/ListaDeTarefas";
import Header from "../../Components/Header";
import { FaPlus } from "react-icons/fa";
import { ContainerPageList } from "./styles";

const ListPage = ({ match }) => {
	const { params } = match;
	const { id } = params;
	const [listInfo, SetListInfo] = useState({ id: null, nome: null });
	const [listaTarefas, setListaTarefas] = useState([]);
	const [newTask, setNewTask] = useState(false);
	const [newTaskName, setNewTaskName] = useState("");

	const newTaskRef = useRef(null);

	useEffect(() => {
		getLista();
	}, []);

	useEffect(() => {
		if (newTask) {
			newTaskRef.current.focus();
		}
	}, [newTask]);

	const getLista = () => {
		Axios.get(`http://localhost:3001/listas/${id}?_embed=tarefas`).then(
			(resultado) => {
				const { id, nome, tarefas } = resultado.data;
				SetListInfo({
					id,
					nome,
				});
				setListaTarefas(tarefas);
			}
		);
	};

	const onClickCheckbox = (tarefa) => {
		Axios.patch(`http://localhost:3001/tarefas/${tarefa.id}`, {
			finalizada: !tarefa.finalizada,
		}).then(() => {
			getLista();
		});
	};

	const updateTaskName = (tarefa, newNameValue) => {
		Axios.patch(`http://localhost:3001/tarefas/${tarefa.id}`, {
			nome: newNameValue,
		}).then(() => {
			getLista();
		});
	};

	const createTask = () => {
		if (newTaskName) {
			const task = {
				nome: newTaskName,
				finalizada: false,
				listaId: Number(id),
			};

			Axios.post("http://localhost:3001/tarefas", task).then(() => {
				setNewTask(false);
				setNewTaskName("");
				getLista();
			});
		} else {
			setNewTask(false);
		}
	};

	const deleteTask = (idTask) => {
		Axios.delete(`http://localhost:3001/tarefas/${idTask}`).then(() => {
			getLista();
		});
	};

	return (
		<>
			<ContainerPageList>
				<Header nome={listInfo.nome} />

				<div className="newItemContainer" onClick={() => setNewTask(true)}>
					{newTask ? (
						<div>
							<input
								onChange={(e) => setNewTaskName(e.target.value)}
								value={newTaskName}
								onBlur={createTask}
								ref={newTaskRef}
								type="text"
							/>
						</div>
					) : (
						<span>
							<FaPlus color="#fff" />
							<span> Novo Item na Lista</span>
						</span>
					)}
				</div>
			</ContainerPageList>
			<ListaDeTarefas
				onClickCheckbox={onClickCheckbox}
				tarefas={listaTarefas}
				updateTaskName={updateTaskName}
				deleteTask={deleteTask}
			/>
		</>
	);
};

export default ListPage;
