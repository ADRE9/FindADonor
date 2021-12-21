import React from "react";
import styled from "styled-components";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import StatusBarGap from "./StatusBarGap";

const Root = styled.View`
	height: ${hp(12)}px;
	background-color: #f88386;
	align-items: center;
	justify-content: space-evenly;
	elevation: 5;
	flex-direction: column;
	/* border-radius:${hp("3.25%")}px; */
`;

const BackButton = styled.TouchableOpacity`
	position: absolute;
	width: 50px;
	justify-content: center;
	align-items: center;
	left: 0
	top: 0;
	z-index: 20;
`;

const Appbar = styled.View`
	flex-direction: row;
	position: relative;
	align-items: center;
	justify-content: center;
`;

const Title = styled.Text`
	color: white;
	font-weight: bold;
	font-size: 22px;
`;

const AppBar = ({ title, goBack }) => {
	return (
		<Root>
			<StatusBarGap />
			<Appbar style={{ width: "100%" }}>
				<BackButton
					style={{ height: "100%" }}
					onPress={() => goBack()}
				>
					<AntDesign name="arrowleft" size={hp("3")} color="#fff" />
				</BackButton>
				<Title>{title}</Title>
			</Appbar>
		</Root>
	);
};

export default AppBar;
