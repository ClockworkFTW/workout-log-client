import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
	padding: 20px;
`;

const Editor = () => (
	<Container>
		<h1>editor</h1>
	</Container>
);

const mapStateToProps = state => ({
	token: state.user.data.token
});

export default connect(mapStateToProps)(Editor);
