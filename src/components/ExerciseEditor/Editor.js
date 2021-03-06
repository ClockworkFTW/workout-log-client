import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import {
	modifyExercise,
	addInstruction,
	modifyInstruction,
	removeInstruction,
	clearExercise
} from "../../reducers/exercise-editor";
import {
	createExercise,
	updateExercise,
	deleteExercise
} from "../../reducers/exercise-list";

import Header from "./Steps/Header";
import Name from "./Steps/Name";
import Difficulty from "./Steps/Difficulty";
import Muscle from "./Steps/Muscle";
import Type from "./Steps/Type";
import Instructions from "./Steps/Instructions";
import Review from "./Steps/Review";
import Pagination from "./Pagination";

const Editor = props => {
	const {
		token,
		exercise,
		createExercise,
		updateExercise,
		deleteExercise,
		modifyExercise,
		addInstruction,
		modifyInstruction,
		removeInstruction,
		clearExercise
	} = props;

	const [step, setStep] = useState(1);

	const handleSubmit = () => {
		exercise.isNew
			? createExercise(token, exercise)
			: updateExercise(token, exercise);
		clearExercise();
	};

	const handleDelete = () => {
		deleteExercise(token, exercise._id);
		clearExercise();
	};

	return (
		<Wrapper>
			<Container>
				{step === 1 && (
					<Step>
						<Header
							step={step}
							title="Name"
							caption="Give your exercise a name"
						/>
						<Name
							name={exercise.name}
							modifyExercise={modifyExercise}
						/>
					</Step>
				)}
				{step === 2 && (
					<Step>
						<Header
							step={step}
							title="Difficulty"
							caption="Set the difficulty level of your exercise"
						/>
						<Difficulty
							difficulty={exercise.difficulty}
							modifyExercise={modifyExercise}
						/>
					</Step>
				)}
				{step === 3 && (
					<Step>
						<Header
							step={step}
							title="Type"
							caption="Set the exercise type"
						/>
						<Type
							type={exercise.type}
							modifyExercise={modifyExercise}
						/>
					</Step>
				)}
				{step === 4 && (
					<Step>
						<Header
							step={step}
							title="Muscle"
							caption="Select the main muscle group"
						/>
						<Muscle
							muscle={exercise.muscle}
							modifyExercise={modifyExercise}
						/>
					</Step>
				)}
				{step === 5 && (
					<Step>
						<Header
							step={step}
							title="Instruction"
							caption="Add a description to your exercise"
						/>
						<Instructions
							instructions={exercise.instructions}
							addInstruction={addInstruction}
							modifyInstruction={modifyInstruction}
							removeInstruction={removeInstruction}
						/>
					</Step>
				)}
				{step === 6 && (
					<Step>
						<Header
							step={step}
							title="Review"
							caption="Make sure everything has been entered correctly"
						/>
						<Review
							exercise={exercise}
							handleSubmit={handleSubmit}
							handleDelete={handleDelete}
						/>
					</Step>
				)}
				<Pagination step={step} setStep={setStep} />
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: 100%;
	padding: 20px;
	overflow: scroll;
`;

const Container = styled.div`
	max-width: 600px;
	margin: 0px auto;
`;

const Step = styled.div`
	padding: 30px 30px 50px 30px;
`;

const mapStateToProps = state => ({
	token: state.user.data.token,
	exercise: state.exerciseEditor
});

const mapActionsToProps = {
	createExercise,
	updateExercise,
	deleteExercise,
	modifyExercise,
	addInstruction,
	modifyInstruction,
	removeInstruction,
	clearExercise
};

export default connect(mapStateToProps, mapActionsToProps)(Editor);
