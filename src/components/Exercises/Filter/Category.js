import React from "react";
import { connect } from "react-redux";

import { setCategoryFilter } from "../../../reducers/filter";
import SelectInput from "../../common/SelectInput";
import { categories } from "../../../config";

const Search = ({ categoryFilter, setCategoryFilter }) => (
	<SelectInput
		options={["all", ...categories]}
		width="120px"
		margin="0px 10px 0px 10px"
		value={categoryFilter}
		setValue={setCategoryFilter}
	/>
);

const mapStateToProps = state => ({ categoryFilter: state.filter.category });

export default connect(mapStateToProps, { setCategoryFilter })(Search);
