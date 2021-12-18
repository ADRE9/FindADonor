import styled from "styled-components";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const DonateButton = styled.TouchableOpacity`
	width: ${wp("50%")}px;
	height: ${hp("6.5%")}px;
	background-color: #c4c4c4;
	align-items: center;
	justify-content: space-evenly;
	border-radius: ${hp("1%")}px;
	margin-top: ${hp("3%")}px;
	elevation: 5;
	flex-direction: row;
`;

export const DonateText = styled.Text`
	color: white;
	font-size: ${hp("3%")}px;
`;

export const DonorButton = styled.TouchableOpacity`
	width: ${wp("50%")}px;
	elevation: 5;
	height: ${hp("6.5%")}px;
	background-color: #343640;
	align-items: center;
	justify-content: space-evenly;
	border-radius: ${hp("1%")}px;
	margin-top: ${hp("3%")}px;
	flex-direction: row;
`;

export const TopView = styled.View`
	position: absolute;
	margin: ${hp("10%")}px ${wp("10%")}px ${wp("0%")}px ${wp("10%")}px;
	align-self: center;
`;

export const BottomView = styled.View`
	flex: 1;
	/* background-color: aliceblue; */
	align-items: center;
`;
