import React from "react";
import Organizador from "../Organizador";
import { ListContainer } from "./styles";

const OrganizadorDeListas = ({ lists, updateListkName, deleteList }) => {
	return (
		<ListContainer>
			{lists.map((list) => (
				<Organizador
					deleteList={deleteList}
					updateListkName={updateListkName}
					key={list.id}
					list={list}
				/>
			))}
		</ListContainer>
	);
};

export default OrganizadorDeListas;
