import styled from "styled-components";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const BottomView = styled.View`
	flex: 1;
	/* background-color: aliceblue; */
	align-items: center;
`;

export const CheckBoxView = styled.View`
	width: ${wp("80%")}px;
	height: ${hp("5%")}px;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

export const RoleText = styled.Text`
	font-size: ${hp("2%")}px;
`;
