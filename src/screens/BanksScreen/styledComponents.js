import styled from "styled-components";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const Flex = styled.View`
	align-items: center;
	justify-content: center;
	flex-direction: row;
`;

export const Filters = styled.View`
	background-color: #fff;
	padding-bottom: 15px;
	elevation: 2;
`;

export const Card = styled.View`
	background-color: #fff;
	padding: 10px 15px;
	margin: 0px 10px;
	elevation: 5;
	border-radius: 5px;
`;

export const Profile = styled.View`
	flex-direction: row;
`;

export const Avatar = styled.View`
	width: ${wp("15")}px;
	height: ${wp("15")}px;
	margin: ${wp("2")}px;
	border-radius: 200px;
`;

export const Title = styled.Text`
	color: #707070;
	font-size: ${hp("2.4")}px;
	margin-bottom: ${hp("1")}px;
	font-weight: 600
	margin-left: 10px;
`;
export const Description = styled.Text`
	color: #909090;
	font-size: ${hp("1.3")}px;
	margin-left: 10px;
`;

export const ActionButton = styled.TouchableOpacity`
	height: ${hp("3.5")}px;
	background-color: #f88386;
	align-items: center;
	justify-content: center;
	padding: 0 20px;
	border-radius: 10px;
	margin-top: 10px;
	margin-right: 10px;
	flex-direction: row;
`;

export const Capitalize = styled.Text`
	text-transform: capitalize;
`;
export const Bold = styled.Text`
	font-weight: bold;
`;
export const Italic = styled.Text`
	font-style: italic;
`;

export const Name = styled.Text`
	position: absolute;
	color: #fff;
	font-size: ${hp("4")}px;
	top: ${hp("25")}px;
	align-self: center;
`;
