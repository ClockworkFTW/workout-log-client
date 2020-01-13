import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { setType } from "../../../config";
import { modifySet, removeSet } from "../../../reducers/workout-editor";
import SelectInput from "../../common/SelectInput";
import { Input, Label, Group, Button } from "../../common";

const Container = styled.div`
	display: flex;
`;

const Set = ({ id, index, set, modifySet, removeSet }) => (
	<Container>
		<Group margin="0px 10px 0px 0px">
			<Label htmlFor="reps">reps</Label>
			<Input
				id="reps"
				type="number"
				width="60px"
				value={set.reps}
				onChange={event =>
					modifySet(id, index, "reps", event.target.value)
				}
			/>
		</Group>
		<Group margin="0px 10px 0px 0px">
			<Label htmlFor="weight">weight</Label>
			<Input
				id="weight"
				type="number"
				width="60px"
				value={set.weight}
				onChange={event =>
					modifySet(id, index, "weight", event.target.value)
				}
			/>
		</Group>
		<Group margin="0px 10px 0px 0px">
			<Label htmlFor="rest">rest</Label>
			<Input
				id="rest"
				type="number"
				width="60px"
				value={set.rest}
				onChange={event =>
					modifySet(id, index, "rest", event.target.value)
				}
			/>
		</Group>
		<Group margin="0px 10px 0px 0px">
			<Label htmlFor="type">type</Label>
			<SelectInput
				id="type"
				width="100px"
				options={setType}
				value={set.setType}
				setValue={option => modifySet(id, index, "setType", option)}
			/>
		</Group>
		<Button onClick={() => removeSet(id, index)}>remove</Button>
	</Container>
);

export default connect(null, { modifySet, removeSet })(Set);
