import React from "react";
import { connect } from "react-redux";

import { setBodypartFilter } from "../../../reducers/exercise-filter";
import SelectInput from "../../common/SelectInput";
import { bodyparts } from "../../../config";

const Bodypart = ({ bodypartFilter, setBodypartFilter }) => (
	<SelectInput
		options={["all", ...bodyparts]}
		width="120px"
		value={bodypartFilter}
		setValue={setBodypartFilter}
	/>
);

const mapStateToProps = state => ({ bodypartFilter: state.filter.bodypart });

export default connect(mapStateToProps, { setBodypartFilter })(Bodypart);
