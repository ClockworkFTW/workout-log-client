import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import MainLayout from "../common/MainLayout";
import Menu from "./Menu";
import Library from "./Library";
import Editor from "./Editor";
import View from "./View";

const Main = styled.div`
	width: 100%;
	height: calc(100% - 70px);
	overflow: scroll;
`;

const Exercises = ({ active, editing }) => {
	return (
		<MainLayout>
			<Menu />
			<Main>
				{editing && <Editor />}
				{active && <View />}
				{!editing && !active && <Library />}
			</Main>
		</MainLayout>
	);
};

const mapStateToProps = state => ({
	active: state.exercises.active,
	editing: state.exercises.editing
});

export default connect(mapStateToProps)(Exercises);
