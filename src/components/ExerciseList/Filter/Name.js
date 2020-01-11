import React from "react";
import { connect } from "react-redux";

import { setExerciseFilter } from "../../../reducers/exercise-filter";
import { Input } from "../../common";

const Name = ({ nameFilter, setExerciseFilter }) => (
	<Input
		type="text"
		placeholder="search"
		margin="0px 10px 0px 0px"
		value={nameFilter}
		onChange={event => setExerciseFilter("name", event.target.value)}
	/>
);

const mapStateToProps = state => ({ nameFilter: state.exerciseFilter.name });

export default connect(mapStateToProps, { setExerciseFilter })(Name);
