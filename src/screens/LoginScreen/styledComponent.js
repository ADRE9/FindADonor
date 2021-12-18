import styled from "styled-components";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const LoginButton = styled.TouchableOpacity`
	width: ${wp("40%")}px;
	height: ${hp("5.5%")}px;
	background-color: #f88386;
	align-items: center;
	justify-content: space-evenly;
	border-radius: ${hp("1%")}px;
	margin-top: ${hp("2")}px;
	elevation: 5;
	flex-direction: row;
	/* border-radius:${hp("3.25%")}px; */
`;

export const SignupButton = styled.TouchableOpacity`
	width: ${wp("40%")}px;
	height: ${hp("5.5%")}px;
	background-color: #343640;
	align-items: center;
	justify-content: space-evenly;
	border-radius: ${hp("1%")}px;
	margin-top: ${hp("3")}px;
	elevation: 5;
	flex-direction: row;
	/* border-radius:${hp("3.25%")}px; */
`;

export const LoginText = styled.Text`
	color: white;
	font-size: ${hp("2%")}px;
`;

export const TopView = styled.View`
	position: absolute;
	margin: ${hp("18%")}px ${wp("10%")}px ${wp("0%")}px ${wp("10%")}px;
	/* align-self:center */
`;

export const BottomView = styled.View`
	flex: 1;
	/* background-color: aliceblue; */
	align-items: center;
`;

export const StyledInput = styled.TextInput`
	width: ${wp("80%")}px;
	height: ${hp("5.5%")}px;
	border-width: 1px;
	border-radius: ${hp("1%")}px;
	margin-bottom: ${hp("2%")}px;
	padding: ${hp("0%")}px ${wp("2%")}px;
`;

export const BreakLine = styled.View`
	border-width: 0.4px;
	margin: ${hp("5%")}px ${wp("0%")}px;
	width: ${wp("80%")}px;
`;

export const ExtraText = styled.Text`
	color: #c4c4c4;
`;
