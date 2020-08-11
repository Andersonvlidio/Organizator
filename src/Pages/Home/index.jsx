import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import OrganizadorDeListas from "../../Components/OrganizadorDeListas";
import Axios from "axios";
import { FaPlus } from "react-icons/fa";
import { ContainerHome } from "./styled";

const Home = () => {
	const [lists, setLists] = useState([]);
	const [newList, setNewList] = useState(false);
	const [newListName, setNewListName] = useState("");

	const newListRef = useRef(null);

	const data = Date.now();

	useEffect(() => {
		if (newList) {
			newListRef.current.focus();
		}
	}, [newList]);

	useEffect(() => {
		getListOrganization();
	}, []);

	const getListOrganization = () => {
		axios.get("http://localhost:3001/listas").then((resultado) => {
			setLists(resultado.data);
		});
	};

	const updateListkName = (lists, newNameValue) => {
		Axios.patch(`http://localhost:3001/listas/${lists.id}`, {
			nome: newNameValue,
		}).then(() => {
			getListOrganization();
		});
	};

	const createList = () => {
		if (newListName) {
			const list = {
				id: data,
				nome: newListName,
			};

			Axios.post("http://localhost:3001/listas", list).then(() => {
				setNewList(false);
				setNewListName("");
				getListOrganization();
			});
		} else {
			setNewList(false);
		}
	};

	const deleteList = (idList) => {
		Axios.delete(`http://localhost:3001/listas/${idList}`).then(() => {
			getListOrganization();
		});
	};

	return (
		<ContainerHome>
			<h1>Organizator</h1>
			<p>Gerencie suas tarefas de uma forma simples e prática!</p>

			<div className="newListContainer" onClick={() => setNewList(true)}>
				{newList ? (
					<input
						onChange={(e) => setNewListName(e.target.value)}
						value={newListName}
						onBlur={createList}
						type="text"
						ref={newListRef}
						placeholder="Nome"
					/>
				) : (
					<span>
						<FaPlus color="#fff" />
						<span> Nova Lista</span>
					</span>
				)}
			</div>
			<OrganizadorDeListas
				deleteList={deleteList}
				updateListkName={updateListkName}
				lists={lists}
			/>
		</ContainerHome>
	);
};

export default Home;
