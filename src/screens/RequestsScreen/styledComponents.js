import styled from "styled-components";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const Body = styled.View`
	/* background-color: aliceblue; */
	flex: 1;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: row;
	flex-wrap: wrap;
`;

export const CardTitle = styled.Text`
	color: #343640;
`;

export const Name = styled.Text`
	position: absolute;
	color: #fff;
	font-size: ${hp("4")}px;
	top: ${hp("25")}px;
	align-self: center;
`;
