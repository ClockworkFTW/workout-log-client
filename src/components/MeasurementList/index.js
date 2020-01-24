import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { fetchMeasurements } from "../../reducers/measurement-list";
import { editMeasurement } from "../../reducers/measurement-editor";
import Menu from "./Menu";
import List from "./List";
import MainLayout from "../common/MainLayout";

const MeasurementList = props => {
	// Destructure props
	const {
		token,
		measurements,
		fetchMeasurements,
		editMeasurement,
		isEditing
	} = props;

	// Fetch measurements from database
	useEffect(() => {
		fetchMeasurements(token);
	}, []);

	// Redirect to measurement editor if editor state exists
	return !isEditing ? (
		<MainLayout>
			<Menu />
			<List
				measurements={measurements}
				editMeasurement={editMeasurement}
			/>
		</MainLayout>
	) : (
		<Redirect to="/measurement-editor" />
	);
};

const mapStateToProps = state => ({
	token: state.user.data.token,
	measurements: state.measurementList.data,
	isEditing: state.measurementEditor
});

const mapActionsToProps = { fetchMeasurements, editMeasurement };

export default connect(mapStateToProps, mapActionsToProps)(MeasurementList);
