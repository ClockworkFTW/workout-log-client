import React from "react";
import styled from "styled-components";

import { Header3, Input, ButtonAction } from "../common";
import DatePicker from "../common/DatePicker";
import Chart from "../MeasurementList/Chart";

const Container = styled.div`
	height: 100%;
	padding: 20px;
	overflow: scroll;
`;
const Display = styled.div`
	margin-bottom: 20px;
	padding: 20px;
	border: 1px solid #e2e8f0;
	border-radius: 5px;
	background: #ffffff;
`;
const History = styled.ul``;
const DataPoint = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
	padding: 10px;
	border: 1px solid #e2e8f0;
	border-radius: 5px;
	background: #ffffff;
`;
const Group = styled.div``;

const Editor = ({
	section,
	addMeasurement,
	modifyMeasurement,
	deleteMeasurement
}) => (
	<Container>
		<Header3>chart</Header3>
		<Display>
			<Chart width="100%" height="200px" data={section} />
		</Display>
		<History>
			<Header3>history</Header3>
			{section.data.map((data, index) => (
				<DataPoint key={index}>
					<DatePicker
						value={data.x}
						onChange={day => modifyMeasurement(index, day, data.y)}
					/>
					<Group>
						<Input
							type="number"
							width="100px"
							margin="none"
							align="center"
							value={data.y}
							onChange={event =>
								modifyMeasurement(
									null,
									data.x,
									event.target.value
								)
							}
						/>
						<ButtonAction onClick={() => deleteMeasurement(data.x)}>
							delete
						</ButtonAction>
					</Group>
				</DataPoint>
			))}
			<ButtonAction width="100%" onClick={addMeasurement}>
				add measurement
			</ButtonAction>
		</History>
	</Container>
);

export default Editor;
