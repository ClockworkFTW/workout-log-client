import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
	addMeasurement,
	modifyMeasurement,
	deleteMeasurement,
	clearMeasurement
} from "../../reducers/measurement-editor";
import { updateMeasurements } from "../../reducers/measurement-list";
import Menu from "./Menu";
import Editor from "./Editor";
import MainLayout from "../common/MainLayout";

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

	// Redirect to measurement list if editor state is empty
	return isEditing ? (
		<MainLayout>
			<Menu handleSave={handleSave} clearMeasurement={clearMeasurement} />
			<Editor
				section={isEditing}
				addMeasurement={addMeasurement}
				modifyMeasurement={modifyMeasurement}
				deleteMeasurement={deleteMeasurement}
			/>
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
