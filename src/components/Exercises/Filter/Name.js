import React from "react";
import { connect } from "react-redux";

import { setNameFilter } from "../../../reducers/filter";
import Input from "../../common/Input";

const Search = ({ nameFilter, setNameFilter }) => (
	<Input
		type="text"
		placeholder="search"
		value={nameFilter}
		setValue={setNameFilter}
	/>
);

const mapStateToProps = state => ({ nameFilter: state.filter.name });

export default connect(mapStateToProps, { setNameFilter })(Search);
