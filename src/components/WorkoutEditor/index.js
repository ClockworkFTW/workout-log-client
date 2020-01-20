import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import MainLayout from "../common/MainLayout";
import Menu from "./Menu";
import Picker from "./Picker";
import Editor from "./Editor";

const Main = styled.div`
	height: 100%;
	display: flex;
`;

const WorkoutEditor = ({ workout }) =>
	workout ? (
		<MainLayout>
			<Menu />
			<Main>
				<Picker />
				<Editor workout={workout} />
			</Main>
		</MainLayout>
	) : (
		<Redirect to="/workout-list" />
	);

const mapStateToProps = state => ({ workout: state.workoutEditor });

export default connect(mapStateToProps)(WorkoutEditor);
