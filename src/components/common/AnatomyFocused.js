import React from "react";
import { ReactComponent as AnatomyFrontUpper1SVG } from "../../assets/anatomy-front-upper-1.svg";
import { ReactComponent as AnatomyFrontUpper2SVG } from "../../assets/anatomy-front-upper-2.svg";
import { ReactComponent as AnatomyFrontLowerSVG } from "../../assets/anatomy-front-upper-1.svg";
import { ReactComponent as AnatomyBackUpperSVG } from "../../assets/anatomy-front-upper-1.svg";
import { ReactComponent as AnatomyBackLowerSVG } from "../../assets/anatomy-front-upper-1.svg";
import styled, { css } from "styled-components";

const setFill = (active, muscle) =>
	active.includes(muscle) ? "#F56565" : "#4b5668";

const sharedStyles = css`
	display: block;
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
	#forearms {
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
	#abs {
		fill: ${props => setFill(props.active, "abs")};
	}
	#neck-front,
	#neck-back {
		fill: ${props => setFill(props.active, "neck")};
	}
`;

const SVGFrontUpper1 = styled(AnatomyFrontUpper1SVG)`
	${sharedStyles}
`;
const SVGFrontUpper2 = styled(AnatomyFrontUpper2SVG)`
	${sharedStyles}
`;
const SVGFrontLower = styled(AnatomyFrontLowerSVG)`
	${sharedStyles}
`;
const SVGBackUpper = styled(AnatomyBackUpperSVG)`
	${sharedStyles}
`;
const SVGBackLower = styled(AnatomyBackLowerSVG)`
	${sharedStyles}
`;

const setSection = active => {
	switch (active) {
		case "chest":
			return "front-upper-1";
		case "deltoids":
			return "front-upper-1";
		case "biceps":
			return "front-upper-2";
		case "neck":
			return "front-upper-1";
		case "abs":
			return "front-upper-2";
		case "forearms":
			return "front-upper-2";
		case "quadriceps":
			return "front-lower";
		case "triceps":
			return "back-upper";
		case "lats":
			return "back-upper";
		case "back":
			return "back-upper";
		case "trapezius":
			return "back-upper";
		case "neck":
			return "back-upper";
		case "hamstrings":
			return "back-lower";
		case "calves":
			return "back-lower";
		case "glutes":
			return "back-lower";
		default:
			return null;
	}
};

const AnatomyFocused = ({ active, width }) => {
	switch (setSection(active)) {
		case "front-upper-1":
			return <SVGFrontUpper1 active={active} width={width} />;
		case "front-upper-2":
			return <SVGFrontUpper2 active={active} width={width} />;
		case "front-lower":
			return <SVGFrontLower active={active} width={width} />;
		case "back-upper":
			return <SVGBackUpper active={active} width={width} />;
		case "back-lower":
			return <SVGBackLower active={active} width={width} />;
		default:
			return null;
	}
};

export default AnatomyFocused;
