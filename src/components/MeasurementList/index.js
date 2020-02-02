import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Menu from "./Menu";
import List from "./List";
import MainLayout from "../common/MainLayout";

const MeasurementList = ({ isEditing }) => {
	// Redirect to measurement editor if editor state exists
	return !isEditing ? (
		<MainLayout>
			<Menu />
			<List />
		</MainLayout>
	) : (
		<Redirect to="/measurement-editor" />
	);
};

const mapStateToProps = state => ({
	isEditing: state.measurementEditor
});

export default connect(mapStateToProps)(MeasurementList);
