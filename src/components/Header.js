import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link as A } from "react-router-dom";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	background: #2d3748;
`;
const Logo = styled(A)`
	font-size: 25px;
	font-weight: 700;
	text-decoration: none;
	color: #ffffff;
`;
const Links = styled.div``;
const Link = styled(A)`
	margin-left: 20px;
	text-decoration: none;
	color: #ffffff;
`;

const Header = ({ user, title }) => (
	<Container>
		<Logo to="/">{title}</Logo>
		{user ? (
			<Links>
				<Link to="/dashboard">dashboard</Link>
				<Link to="/sign-out">sign out</Link>
			</Links>
		) : (
			<Links>
				<Link to="/sign-in">sign in</Link>
			</Links>
		)}
	</Container>
);

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps)(Header);
