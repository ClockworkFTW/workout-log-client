import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { editMeasurement } from "../../reducers/measurement-editor";

import Card from "./Card";
import ErrorMessage from "../common/ErrorMessage";

const List = ({ measurements, editMeasurement, error }) => {
	return !error ? (
		<Container>
			{measurements.sections.map(section => (
				<Card
					key={section.id}
					section={section}
					editMeasurement={editMeasurement}
				/>
			))}
		</Container>
	) : (
		<ErrorMessage message={error.response.data.message} />
	);
};

const Container = styled.div`
	padding: 20px 20px 0px 20px;
`;

const mapStateToProps = state => ({
	measurements: state.measurementList.data,
	error: state.measurementList.error
});

const mapActionsToProps = { editMeasurement };

export default connect(mapStateToProps, mapActionsToProps)(List);
