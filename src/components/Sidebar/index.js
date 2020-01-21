import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { toggleSidebar } from "../../reducers/sidebar";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Toggle from "./Toggle";

const Container = styled.div`
	position: relative;
	flex: ${props => (props.toggle ? "0 0 200px" : "0 0 auto")};
	background: #2e3749;
`;

const Sidebar = ({ user, toggle, toggleSidebar, headerHeight }) => (
	<Container toggle={toggle}>
		<Logo toggle={toggle} headerHeight={headerHeight} />
		<Navigation toggle={toggle} />
		<Toggle toggle={toggle} toggleSidebar={toggleSidebar} />
	</Container>
);

const mapStateToProps = state => ({
	user: state.user.data,
	toggle: state.sidebar
});

export default connect(mapStateToProps, { toggleSidebar })(Sidebar);
