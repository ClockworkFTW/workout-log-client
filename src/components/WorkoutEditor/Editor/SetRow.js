import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { setType } from "../../../config";
import { modifySet, removeSet } from "../../../reducers/workout-editor";
import SelectInput from "../../common/SelectInput";
import { Input, ButtonPrimary } from "../../common";

const Container = styled.tr`
	margin: 15px 0px;
`;

const Td = styled.td`
	padding: 5px;
	text-align: ${props => props.align};
`;

const Index = styled.span`
	font-size: 14px;
	font-weight: 700;
	color: #2d3748;
`;

const SetRow = ({ id, index, set, modifySet, removeSet }) => (
	<Container>
		<Td align="left">
			<Index>{index + 1}</Index>
		</Td>
		<Td align="left">
			<SelectInput
				id="type"
				width="100px"
				options={setType}
				value={set.setType}
				setValue={option => modifySet(id, index, "setType", option)}
			/>
		</Td>
		<Td align="left">
			<Input
				width="100%"
				type="number"
				value={set.reps}
				onChange={event =>
					modifySet(id, index, "reps", event.target.value)
				}
			/>
		</Td>
		<Td align="left">
			<Input
				id="weight"
				width="100%"
				type="number"
				value={set.weight}
				onChange={event =>
					modifySet(id, index, "weight", event.target.value)
				}
			/>
		</Td>
		<Td align="left">
			<Input
				id="rest"
				width="100%"
				type="number"
				value={set.rest}
				onChange={event =>
					modifySet(id, index, "rest", event.target.value)
				}
			/>
		</Td>
		<Td align="right">
			<ButtonPrimary onClick={() => removeSet(id, index)}>
				remove
			</ButtonPrimary>
		</Td>
	</Container>
);

export default connect(null, { modifySet, removeSet })(SetRow);
