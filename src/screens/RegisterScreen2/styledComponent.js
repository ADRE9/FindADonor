import styled from "styled-components";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const DonateButton = styled.TouchableOpacity`
	width: ${wp("70%")}px;
	height: ${hp("6.5%")}px;
	background-color: #c4c4c4;
	align-items: center;
	justify-content: center;
	border-radius: ${hp("1%")}px;
	margin-top: ${hp("3%")}px;
	elevation: 5;
`;

export const DonateText = styled.Text`
	color: white;
	font-size: ${hp("3%")}px;
`;

export const DonorButton = styled.TouchableOpacity`
	width: ${wp("70%")}px;
	elevation: 5;
	height: ${hp("6.5%")}px;
	background-color: #343640;
	align-items: center;
	justify-content: center;
	border-radius: ${hp("1%")}px;
	margin-top: ${hp("3%")}px;
`;

export const BottomView = styled.View`
	flex: 1;
	/* background-color: aliceblue; */
	align-items: center;
`;
