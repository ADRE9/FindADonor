import styled from "styled-components";
import pixelPerfect from "../../utils/pixelPerfect";

export const ProfileCircle = styled.View`
	width: ${pixelPerfect(170)}px;
	height: ${pixelPerfect(170)}px;
	border-radius: ${pixelPerfect(85)}px;
	background-color: #ebebeb;
`;

export const TopView = styled.View`
	position: absolute;
	width: 100%;
	height: ${pixelPerfect(411)}px;
	background-color: transparent;
	align-items: center;
	justify-content: center;
`;

export const BottomView = styled.View`
	width: 100%;
	height: ${pixelPerfect(411)}px;
	align-items: center;
`;

export const Name = styled.Text`
	font-size: ${pixelPerfect(25)}px;
	color: #fff;
	align-items: center;
	top: ${pixelPerfect(20)}px;
`;

export const BloodGroup = styled.Text`
	font-size: ${pixelPerfect(18)}px;
	color: #fff;
	align-items: center;
	top: ${pixelPerfect(20)}px;
`;

export const Age = styled.Text`
	font-size: ${pixelPerfect(18)}px;
	color: #fff;
	align-items: center;
	top: ${pixelPerfect(20)}px;
`;

export const LogoutView = styled.TouchableOpacity`
	position: absolute;
	width: ${pixelPerfect(100)}px;
	height: ${pixelPerfect(30)}px;
	top: ${pixelPerfect(40)}px;
	right: ${pixelPerfect(10)}px;
	justify-content: center;
	align-items: center;
`;

export const Logout = styled.Text`
	font-size: ${pixelPerfect(15)}px;
	color: #fff;
`;

export const QuoteCard = styled.View`
	width: ${pixelPerfect(300)}px;
	height: ${pixelPerfect(100)}px;
	align-items: center;
	padding: ${pixelPerfect(20)}px;
	/* justify-content: center; */
	border-radius: ${pixelPerfect(15)}px;
`;

export const Quote = styled.Text`
	font-size: ${pixelPerfect(20)}px;
	color: gray;
	font-family: "Indie";
	text-align: justify;
`;

export const RegisterDonor = styled.TouchableOpacity`
	position: relative;
	padding: ${pixelPerfect(10)}px;
	background-color: #f88386;
	justify-content: center;
	align-items: center;
	border-radius: ${pixelPerfect(5)}px;
	top: ${pixelPerfect(40)}px;
`;

export const RegisterAsDonor = styled.Text`
	color: #fff;
	font-size: ${pixelPerfect(12)}px;
`;

export const LogoutFromAll = styled.TouchableOpacity`
	position: relative;
	padding: ${pixelPerfect(10)}px;
	background-color: #343640;
	justify-content: center;
	align-items: center;
	border-radius: ${pixelPerfect(5)}px;
	top: ${pixelPerfect(60)}px;
`;
