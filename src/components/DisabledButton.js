import React from "react";
import styled from "styled-components";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const LoginButton = styled.Pressable`
	width: ${wp("40%")}px;
	height: ${hp("5.5%")}px;
	background-color: #ccc;
	align-items: center;
	justify-content: space-evenly;
	border-radius: ${hp("1%")}px;
	margin-top: ${hp("2")}px;
	elevation: 5;
	flex-direction: row;
	/* border-radius:${hp("3.25%")}px; */
`;

const DisabledButton = ({ children }) => {
	return <LoginButton>{children}</LoginButton>;
};

export default DisabledButton;
