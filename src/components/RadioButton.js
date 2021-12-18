import React from "react";
import styled from "styled-components";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const OuterBorder = styled.View`
	width: ${wp("6%")}px;
	height: ${wp("6%")}px;
	justify-content: center;
	align-items: center;
	border-radius: ${wp("3%")}px;
	border-width: 1px;
`;

const InnerCircle = styled.View`
	width: ${wp("4%")}px;
	height: ${wp("4%")}px;
	background-color: #343640;
	border-radius: ${wp("2%")}px;
`;

const RadioButton = ({ active }) => {
	return <OuterBorder>{active ? <InnerCircle /> : null}</OuterBorder>;
};

export default RadioButton;
