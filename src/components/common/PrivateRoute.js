import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ user, path, children }) => (
	<Route path={path}>{user ? children : <Redirect to="/sign-in" />}</Route>
);

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps)(PrivateRoute);
