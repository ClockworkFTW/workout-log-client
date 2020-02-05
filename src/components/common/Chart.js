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
	padding-top: 20px;
	position: relative;
	border-radius: 4px;
	background: #ffffff;
	overflow: hidden;
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
const sparkMargin = { top: 10, right: 0, bottom: 30, left: 0 };

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

const Chart = ({ spark, width, height, padding, color, grid, area, data }) => (
	<Wrapper width={width} height={height} padding={padding}>
		{data.data.length !== 0 ? (
			<Container>
				<Overlay />
				<ResponsiveLine
					data={[data]}
					colors={color}
					margin={spark ? sparkMargin : margin}
					xScale={xScale}
					yScale={yScale}
					curve="cardinal"
					axisTop={null}
					axisRight={null}
					axisBottom={spark ? null : axisBottom}
					axisLeft={spark ? null : axisLeft}
					enableGridX={grid}
					enableGridY={grid}
					enablePoints={spark ? false : true}
					pointSize={10}
					pointColor="#ffffff"
					pointBorderWidth={2}
					pointBorderColor={color}
					enableArea={area}
				/>
			</Container>
		) : (
			<Container>
				<Info>
					<FontAwesomeIcon
						icon={["far", "sticky-note"]}
						style={{ marginRight: "10px" }}
					/>
					No Data
				</Info>
			</Container>
		)}
	</Wrapper>
);

const Overlay = styled.div`
	z-index: 10;
	position: absolute;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
	background: linear-gradient(
		rgba(255, 255, 255, 0) 50%,
		rgba(255, 255, 255, 1) 100%
	);
`;

export default Chart;
