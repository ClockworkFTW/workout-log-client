import React, { useState } from "react";
import styled from "styled-components";

import { measurements as measurementOptions } from "../../config";
import SelectInput from "../common/SelectInput";
import Chart from "../common/Chart";

const Measurements = ({ measurements }) => {
	const [selection, setSelection] = useState("weight");

	return measurements ? (
		<Container>
			<SelectInput
				options={measurementOptions}
				value={selection}
				setValue={option => setSelection(option)}
			/>
			<Chart
				spark={true}
				width="100%"
				height="200px"
				color="#687eea"
				grid={false}
				area={true}
				data={measurements.find(e => e.id === selection)}
			/>
		</Container>
	) : null;
};

const Container = styled.div``;

export default Measurements;
