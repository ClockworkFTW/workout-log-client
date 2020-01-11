import React from "react";
import { connect } from "react-redux";

import { setExerciseFilter } from "../../../reducers/exercise-filter";
import SelectInput from "../../common/SelectInput";
import { muscle } from "../../../config";

const Muscle = ({ muscleFilter, setExerciseFilter }) => (
	<SelectInput
		options={["all", ...muscle]}
		width="120px"
		margin="0px 10px 0px 0px"
		value={muscleFilter}
		setValue={option => setExerciseFilter("muscle", option)}
	/>
);

const mapStateToProps = state => ({
	muscleFilter: state.exerciseFilter.muscle
});

export default connect(mapStateToProps, { setExerciseFilter })(Muscle);
