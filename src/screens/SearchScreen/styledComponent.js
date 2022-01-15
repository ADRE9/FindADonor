import styled from "styled-components";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const FilterView = styled.Pressable`
	position: absolute;
	bottom: ${hp("5")}px;
	left: ${wp("5")}px;
	width: ${wp("30")}px;
	height: ${hp("6")}px;
	padding-left: 10px;
	border-radius: ${hp("1")}px;
	background-color: #f88386;
	justify-content: flex-start;
	align-items: center;
	flex-direction: row;
`;

export const FilterText = styled.Text`
	color: white;
	font-size: ${hp("2.4")}px;
	margin-left: 8px;
`;

export const MapCard = styled.View`
	width: ${wp("60")}px;
	border-radius: ${hp("1")}px;
	background-color: black;
	justify-content: flex-start;
	align-items: flex-start;
	padding: ${hp("2")}px ${hp("2")}px ${hp("2")}px ${hp("2")}px;
`;

export const Profile = styled.View`
	flex-direction: row;
`;

export const Avatar = styled.View`
	width: ${wp("15")}px;
	height: ${wp("15")}px;
	margin: ${wp("2")}px;
	border-radius: 200px;
	background-color: #0f0;
`;

export const Title = styled.Text`
	color: white;
	font-size: ${hp("2.4")}px;
	margin-bottom: ${hp("1")}px;
`;
export const Description = styled.Text`
	color: white;
	font-size: ${hp("1.3")}px;
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

export const RequestButton = styled.TouchableOpacity`
	width: 100%;
	height: ${hp("5")}px;
	background-color: #f88386;
	align-items: center;
	justify-content: space-evenly;
	border-radius: 100px;
	margin-top: 10px;
	elevation: 5;
	flex-direction: row;
`;

export const ActionButton = styled.TouchableOpacity`
	height: ${hp("4.5")}px;
	background-color: #fff;
	align-items: center;
	justify-content: center;
	padding: 0 20px;
	border-radius: 10px;
	margin-top: 10px;
	margin-right: 10px;
	flex-direction: row;
`;
export const ButtonText = styled.Text`
	color: #f88386;
	font-size: ${hp("2.4")}px;
`;

