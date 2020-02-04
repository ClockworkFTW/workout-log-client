import React from "react";
import styled from "styled-components";

import { Header3 } from "../common";

const Profile = ({ user }) => (
	<Container>
		<Header3>Welcome {user.username}!</Header3>
	</Container>
);

const Container = styled.div`
	margin-bottom: 20px;
`;

export default Profile;
