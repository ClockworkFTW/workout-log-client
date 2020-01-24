import React from "react";
import styled from "styled-components";
import { ResponsiveLine } from "@nivo/line";

const Container = styled.div`
	width: ${props => props.width};
	height: ${props => props.height};
`;

const margin = { top: 10, right: 10, bottom: 30, left: 40 };

const xScale = {
	type: "time",
	format: "%Y-%m-%d",
	precision: "day"
};

const yScale = {
	type: "linear",
	stacked: true,
	min: "auto",
	max: "auto"
};

const axisBottom = {
	orient: "bottom",
	tickSize: 5,
	tickPadding: 5,
	tickRotation: 0,
	format: "%b %e"
};

const axisLeft = {
	orient: "left",
	tickSize: 5,
	tickPadding: 5,
	tickRotation: 0
};

const Chart = ({ width, height, data }) => (
	<Container width={width} height={height}>
		<ResponsiveLine
			data={[data]}
			colors="#5A67D8"
			margin={margin}
			xScale={xScale}
			yScale={yScale}
			curve="linear"
			enableArea={true}
			axisTop={null}
			axisRight={null}
			axisBottom={axisBottom}
			axisLeft={axisLeft}
			enableGridX={false}
			enableGridY={false}
			enablePoints={true}
			pointSize={6}
		/>
	</Container>
);

export default Chart;
