import React from "react";
import { ReactComponent as AnatomySVG } from "../../assets/anatomy.svg";
import styled from "styled-components";

const setFill = (active, muscle) =>
	active.includes(muscle) ? "#F56565" : "#4b5668";

const SVG = styled(AnatomySVG)`
	display: block;
	flex: ${props => props.flex};
	width: ${props => props.width};
	height: auto;
	path {
		transition: all ease-in-out 0.3s;
	}
	#chest {
		fill: ${props => setFill(props.active, "chest")};
	}
	#biceps {
		fill: ${props => setFill(props.active, "biceps")};
	}
	#triceps {
		fill: ${props => setFill(props.active, "triceps")};
	}
	#deltoids-front,
	#deltoids-back {
		fill: ${props => setFill(props.active, "deltoids")};
	}
	#quadriceps {
		fill: ${props => setFill(props.active, "quadriceps")};
	}
	#back-lower,
	#back-upper {
		fill: ${props => setFill(props.active, "back")};
	}
	#lats-front,
	#lats-back {
		fill: ${props => setFill(props.active, "lats")};
	}
	#forearms-front,
	#forearms-back {
		fill: ${props => setFill(props.active, "forearms")};
	}
	#trapezius-front,
	#trapezius-back {
		fill: ${props => setFill(props.active, "trapezius")};
	}
	#glutes {
		fill: ${props => setFill(props.active, "glutes")};
	}
	#hamstrings {
		fill: ${props => setFill(props.active, "hamstring")};
	}
	#calves-front,
	#calves-back {
		fill: ${props => setFill(props.active, "calves")};
	}
	#abs-front,
	#abs-back {
		fill: ${props => setFill(props.active, "abs")};
	}
	#neck-front,
	#neck-back {
		fill: ${props => setFill(props.active, "neck")};
	}
`;

const setViewbox = active => {
	switch (active) {
		case "chest":
			return "52 80 200 120";
		case "deltoids":
			return "52 80 200 120";
		case "biceps":
			return "52 130 200 120";
		case "abs":
			return "40 160 230 140";
		default:
			return "0 0 595.28 595.28";
	}
};

const Anatomy = ({ active, focused, width, flex }) => (
	<SVG
		active={active}
		viewBox={focused ? setViewbox(active) : "0 0 595.28 595.28"}
		width={width}
		flex={flex}
	/>
);

export default Anatomy;
