import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { userInit } from "./reducers/user";

import Landing from "./components/Landing";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import Settings from "./components/Settings";
import Dashboard from "./components/Dashboard";
import ExerciseList from "./components/ExerciseList";
import ExerciseView from "./components/ExerciseView";
import ExerciseEditor from "./components/ExerciseEditor";
import WorkoutList from "./components/WorkoutList";
import WorkoutEditor from "./components/WorkoutEditor";
import WorkoutSession from "./components/WorkoutSession";
import MeasurementList from "./components/MeasurementList";
import MeasurementEditor from "./components/MeasurementEditor";

import PrivateRoute from "./components/common/PrivateRoute";

const App = ({ userInit }) => {
	useEffect(() => {
		userInit();
	}, []);

	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Landing />
				</Route>
				<Route path="/sign-up">
					<SignUp />
				</Route>
				<Route path="/sign-in">
					<SignIn />
				</Route>
				<PrivateRoute path="/sign-out">
					<SignOut />
				</PrivateRoute>
				<PrivateRoute path="/settings">
					<Settings />
				</PrivateRoute>
				<PrivateRoute path="/dashboard">
					<Dashboard />
				</PrivateRoute>
				<PrivateRoute path="/exercise-list" exact>
					<ExerciseList />
				</PrivateRoute>
				<PrivateRoute path="/exercise-list/:id">
					<ExerciseView />
				</PrivateRoute>
				<PrivateRoute path="/exercise-editor">
					<ExerciseEditor />
				</PrivateRoute>
				<PrivateRoute path="/workout-list" exact>
					<WorkoutList />
				</PrivateRoute>
				<PrivateRoute path="/workout-editor">
					<WorkoutEditor />
				</PrivateRoute>
				<PrivateRoute path="/workout-session">
					<WorkoutSession />
				</PrivateRoute>
				<PrivateRoute path="/measurement-list">
					<MeasurementList />
				</PrivateRoute>
				<PrivateRoute path="/measurement-editor">
					<MeasurementEditor />
				</PrivateRoute>
			</Switch>
		</Router>
	);
};

export default connect(null, { userInit })(App);
