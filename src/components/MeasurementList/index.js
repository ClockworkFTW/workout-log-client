import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchMeasurements } from "../../reducers/measurement-list";
import Menu from "./Menu";
import List from "./List";
import MainLayout from "../common/MainLayout";

const MeasurementList = ({ token, measurements, fetchMeasurements }) => {
	useEffect(() => {
		fetchMeasurements(token);
	}, []);

	return (
		<MainLayout>
			<Menu />
			<List measurements={measurements} />
		</MainLayout>
	);
};

const mapStateToProps = state => ({
	token: state.user.data.token,
	measurements: state.measurementList.data
});

export default connect(mapStateToProps, { fetchMeasurements })(MeasurementList);
