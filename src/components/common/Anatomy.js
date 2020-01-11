import React from "react";
import { ReactComponent as AnatomySVG } from "../../assets/anatomy.svg";
import styled from "styled-components";

const highlight = "#F56565";
const fill = "#4b5668";

const StyledAnatomySVG = styled(AnatomySVG)`
	display: block;
	width: ${props => props.width};
	height: auto;
	path {
		transition: all ease-in-out 0.3s;
	}
	#chest {
		fill: ${props => (props.active.includes("chest") ? highlight : fill)};
	}
	#biceps {
		fill: ${props => (props.active.includes("biceps") ? highlight : fill)};
	}
	#triceps {
		fill: ${props => (props.active.includes("triceps") ? highlight : fill)};
	}
	#deltoids-front,
	#deltoids-back {
		fill: ${props =>
			props.active.includes("deltoids") ? highlight : fill};
	}
	#quadriceps {
		fill: ${props =>
			props.active.includes("quadriceps") ? highlight : fill};
	}
	#back-lower,
	#back-upper {
		fill: ${props => (props.active.includes("back") ? highlight : fill)};
	}
	#lats-front,
	#lats-back {
		fill: ${props => (props.active.includes("lats") ? highlight : fill)};
	}
	#forearms-front,
	#forearms-back {
		fill: ${props =>
			props.active.includes("forearms") ? highlight : fill};
	}
	#trapezius-front,
	#trapezius-back {
		fill: ${props =>
			props.active.includes("trapezius") ? highlight : fill};
	}
	#glutes {
		fill: ${props => (props.active.includes("glutes") ? highlight : fill)};
	}
	#hamstrings {
		fill: ${props =>
			props.active.includes("hamstrings") ? highlight : fill};
	}
	#calves-front,
	#calves-back {
		fill: ${props => (props.active.includes("calves") ? highlight : fill)};
	}
	#abs-front,
	#abs-back {
		fill: ${props => (props.active.includes("abs") ? highlight : fill)};
	}
	#neck-front,
	#neck-back {
		fill: ${props => (props.active.includes("neck") ? highlight : fill)};
	}
`;

const Anatomy = ({ active, width }) => (
	<StyledAnatomySVG active={active} width={width} />
);

export default Anatomy;
