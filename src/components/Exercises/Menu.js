import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { setActive, setEditing } from "../../reducers/exercise";
import Filter from "./Filter";
import Button from "../common/Button";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;
`;
const Title = styled.h1`
	font-size: 30px;
	font-weight: 700;
	text-transform: capitalize;
	color: #2d3748;
`;

const Menu = ({ active, setActive, editing, setEditing }) => {
	const toggleLibrary = () => {
		setActive(null);
		setEditing(null);
	};

	const toggleEditor = () => {
		setEditing({
			name: "",
			difficulty: "beginner",
			category: "barbell",
			bodypart: "chest",
			description: "",
			new: true
		});
	};

	return active || editing ? (
		<Container>
			<Title>{active ? "exercise view" : "exercise editor"}</Title>
			<Button
				width="90px"
				icon={["fas", "th"]}
				text="library"
				render={true}
				onClick={toggleLibrary}
			/>
		</Container>
	) : (
		<Container>
			<Filter />
			<Button
				width="90px"
				icon={["fas", "plus-square"]}
				text="create"
				render={true}
				onClick={toggleEditor}
			/>
		</Container>
	);
};

const mapStateToProps = state => ({
	active: state.exercises.active,
	editing: state.exercises.editing
});

export default connect(mapStateToProps, { setActive, setEditing })(Menu);
