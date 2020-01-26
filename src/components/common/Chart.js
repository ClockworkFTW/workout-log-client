import React from "react";
import styled from "styled-components";
import { ResponsiveLine } from "@nivo/line";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
	width: ${props => props.width};
	height: ${props => props.height};
	padding: ${props => props.padding};
`;

const Container = styled.div`
	width: inherit;
	height: inherit;
	position: relative;
	padding: 20px;
	border: 1px solid #e2e8f0;
	border-radius: 5px;
	background: #ffffff;
`;

const Info = styled.h1`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 26px;
	color: #cbd5e0;
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

const Chart = ({ width, height, padding, color, grid, area, data }) => (
	<Wrapper width={width} height={height} padding={padding}>
		<Container>
			{data.data.length !== 0 ? (
				<ResponsiveLine
					data={[data]}
					colors={color}
					margin={margin}
					xScale={xScale}
					yScale={yScale}
					curve="linear"
					axisTop={null}
					axisRight={null}
					axisBottom={axisBottom}
					axisLeft={axisLeft}
					enableGridX={grid}
					enableGridY={grid}
					enablePoints={true}
					pointSize={10}
					pointColor="#ffffff"
					pointBorderWidth={2}
					pointBorderColor={color}
					enableArea={area}
				/>
			) : (
				<Info>
					<FontAwesomeIcon
						icon={["far", "sticky-note"]}
						style={{ marginRight: "10px" }}
					/>
					No Data
				</Info>
			)}
		</Container>
	</Wrapper>
);

export default Chart;
