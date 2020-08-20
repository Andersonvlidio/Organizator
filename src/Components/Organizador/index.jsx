import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { BsChevronDoubleRight } from "react-icons/bs";
import { ListContainerCard } from "./styles";

const Organizador = ({ list, updateListkName, deleteList }) => {
	const [edit, setEdit] = useState(false);
	const [nameFildValue, setNameFieldValue] = useState(list.nome);
	const nameEditField = useRef(null);

	useEffect(() => {
		if (edit) {
			nameEditField.current.focus();
		}
	}, [edit]);

	const onBlurEdit = () => {
		setEdit(false);
		updateListkName(list, nameFildValue);
	};

	return (
		<ListContainerCard>
			<div>
				{edit ? (
					<input
						onBlur={onBlurEdit}
						type="text"
						value={nameFildValue}
						ref={nameEditField}
						onChange={(e) => setNameFieldValue(e.target.value)}
					/>
				) : (
					<>
						<span
							className="close-button-"
							onClick={() => {
								deleteList(list.id);
							}}
						>
							<FaTimes />
						</span>
						<span
							onClick={() => {
								setEdit(true);
							}}
						>
							{list.nome}
						</span>
					</>
				)}
			</div>

			<Link to={`/list/${list.id}`}>
				<button>
					<BsChevronDoubleRight color="#fff" size="25px" />
				</button>
			</Link>
		</ListContainerCard>
	);
};

export default Organizador;
