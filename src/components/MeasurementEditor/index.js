import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import {
	addMeasurement,
	modifyMeasurement,
	deleteMeasurement,
	clearMeasurement
} from "../../reducers/measurement-editor";
import { updateMeasurements } from "../../reducers/measurement-list";
import Menu from "./Menu";
import History from "./History";
import Chart from "../common/Chart";
import MainLayout from "../common/MainLayout";

const Main = styled.div`
	height: 100%;
	display: flex;
`;

const MeasurementEditor = props => {
	// Destructure props
	const {
		token,
		isEditing,
		measurements,
		addMeasurement,
		modifyMeasurement,
		deleteMeasurement,
		updateMeasurements,
		clearMeasurement
	} = props;

	// Save measurement changes to database and clear editor state
	const handleSave = () => {
		const sections = measurements.sections.map(section =>
			section.id === isEditing.id ? isEditing : section
		);
		updateMeasurements(token, { sections });
		clearMeasurement();
	};

	// Sort data from newest to oldest
	const sortDescending = data =>
		data.sort((a, b) => new Date(b.x) - new Date(a.x));

	// Redirect to measurement list if editor state is empty
	return isEditing ? (
		<MainLayout>
			<Menu
				addMeasurement={addMeasurement}
				handleSave={handleSave}
				clearMeasurement={clearMeasurement}
			/>
			<Main>
				<History
					data={sortDescending(isEditing.data)}
					addMeasurement={addMeasurement}
					modifyMeasurement={modifyMeasurement}
					deleteMeasurement={deleteMeasurement}
				/>
				<Chart
					width="100%"
					height="100%"
					padding="20px 20px 20px 0px"
					color="#687eea"
					grid={true}
					area={true}
					data={isEditing}
				/>
			</Main>
		</MainLayout>
	) : (
		<Redirect to="/measurement-list" />
	);
};

const mapStateToProps = state => ({
	token: state.user.data.token,
	measurements: state.measurementList.data,
	isEditing: state.measurementEditor
});

const mapActionsToProps = {
	addMeasurement,
	modifyMeasurement,
	deleteMeasurement,
	updateMeasurements,
	clearMeasurement
};

export default connect(mapStateToProps, mapActionsToProps)(MeasurementEditor);
