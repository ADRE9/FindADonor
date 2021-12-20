import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Onboarding from "react-native-onboarding-swiper";
import { OnBoarding1, OnBoarding2, OnBoarding3, Next } from "../../assets/svg";
import perfectSize from "../../utils/pixelPerfect";

const NextButton = props => (
	<TouchableOpacity
		{...props}
		activeOpacity={0.9}
		style={{
			backgroundColor: "white",
			justifyContent: "center",
			alignItems: "center",
			padding: 0,
			right: 0,
			bottom: perfectSize(30),
			borderRadius: perfectSize(100),
			marginRight: perfectSize(25),
			width: perfectSize(78),
			height: perfectSize(78),
			backgroundColor: "#37474F",
			elevation: 3,
		}}
	>
		<Next />
	</TouchableOpacity>
);

const Dot = props => {
	let background = {};

	if (props.selected) {
		background = { backgroundColor: "#FFF" };
	} else {
		background = { backgroundColor: "#FFB4B6" };
	}

	return (
		<View
			style={{
				height: perfectSize(13),
				width: perfectSize(13),
				borderRadius: perfectSize(10),
				marginLeft: perfectSize(7),
				right: perfectSize(115),
				...background,
			}}
		/>
	);
};

export default function index({ navigation }) {
	const commonProps = {
		backgroundColor: "#fff",
		titleStyles: {
			color: "#F88386",
			fontFamily: "Segoe UI Regualar",
			fontSize: 24,
			width: perfectSize(254),
		},
		subTitleStyles: {
			color: "#B9BBC3",
			fontFamily: "Segoe UI Regualar",
			fontSize: 18,
			width: perfectSize(254),
		},
	};
	return (
		<Onboarding
			onDone={() => navigation.navigate("Login")}
			bottomBarColor="#F88386"
			showSkip={false}
			NextButtonComponent={NextButton}
			DoneButtonComponent={NextButton}
			DotComponent={Dot}
			pages={[
				{
					image: (
						<OnBoarding1 width={perfectSize(333)} height={perfectSize(333)} />
					),
					title: "DONOR",
					subtitle: "You can help another person who needs blood.",
					...commonProps,
				},
				{
					image: (
						<OnBoarding2 width={perfectSize(333)} height={perfectSize(333)} />
					),
					title: "NEED BLOOD",
					subtitle: "You can find blood you need.",
					...commonProps,
				},
				{
					image: (
						<OnBoarding3 width={perfectSize(333)} height={perfectSize(333)} />
					),
					title: "BLOOD INFO",
					subtitle: "You get information about donor.",
					...commonProps,
				},
			]}
		/>
	);
}

const styles = StyleSheet.create({});
