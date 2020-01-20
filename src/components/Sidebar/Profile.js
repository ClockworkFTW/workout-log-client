import React from "react";
import styled from "styled-components";

const Container = styled.div`
	padding: 20px;
`;

const Profile = ({ toggle }) => (
	<Container toggle={toggle}>
		<h1>Profile</h1>
	</Container>
);

export default Profile;
