import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import MainLayout from "../common/MainLayout";

const Container = styled.div`
	padding: 20px;
`;

const Editor = ({ token }) => (
	<MainLayout>
		<Container>
			<h1>editor</h1>
		</Container>
	</MainLayout>
);

const mapStateToProps = state => ({ token: state.user.data.token });

export default connect(mapStateToProps)(Editor);
