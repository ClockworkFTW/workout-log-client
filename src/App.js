import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { userInit } from "./reducers/user";

import Header from "./components/Header";
import Landing from "./components/Landing";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import Dashboard from "./components/Dashboard";
import ExerciseList from "./components/ExerciseList";
import ExerciseView from "./components/ExerciseView";
import ExerciseEditor from "./components/ExerciseEditor";
import WorkoutList from "./components/WorkoutList";
import WorkoutEditor from "./components/WorkoutEditor";
import Schedule from "./components/Schedule";

import PrivateRoute from "./components/common/PrivateRoute";

const App = ({ userInit }) => {
	useEffect(() => {
		userInit();
	}, []);

	return (
		<Router>
			<Header title="Gainz" />
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
				<PrivateRoute path="/schedule">
					<Schedule />
				</PrivateRoute>
			</Switch>
		</Router>
	);
};

export default connect(null, { userInit })(App);
