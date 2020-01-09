import React from "react";
import styled from "styled-components";

import Name from "./Name";
import Category from "./Category";
import Bodypart from "./Bodypart";

const Container = styled.div`
	display: flex;
`;

const Filter = () => (
	<Container>
		<Name />
		<Category />
		<Bodypart />
	</Container>
);

export default Filter;
