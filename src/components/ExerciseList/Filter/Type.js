import React from "react";
import { connect } from "react-redux";

import { setExerciseFilter } from "../../../reducers/exercise-filter";
import SelectInput from "../../common/SelectInput";
import { type } from "../../../config";

const Type = ({ typeFilter, setExerciseFilter }) => (
	<SelectInput
		options={["all", ...type]}
		width="120px"
		margin="0px 10px 0px 0px"
		value={typeFilter}
		setValue={option => setExerciseFilter("type", option)}
	/>
);

const mapStateToProps = state => ({ typeFilter: state.exerciseFilter.type });

export default connect(mapStateToProps, { setExerciseFilter })(Type);
