import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

export default function index({ navigation }) {
	return (
		<Onboarding
			onDone={() => navigation.navigate("Login")}
			bottomBarColor="#F88386"
			pages={[
				{
					backgroundColor: "#fff",
					image: <Image source={require("../../assets/images/onboard1.png")} />,
					title: "Donors",
					titleStyles: { color: "#F88386" },
					subtitle: "You can help other person give blood",
				},
				{
					backgroundColor: "#fff",
					image: <Image source={require("../../assets/images/onboard1.png")} />,
					title: "Need Blood",
					titleStyles: { color: "#F88386" },
					subtitle: "You can find blood You need",
				},
				{
					backgroundColor: "#fff",
					image: <Image source={require("../../assets/images/onboard1.png")} />,
					title: "Healthy Info",
					titleStyles: { color: "#F88386" },
					subtitle: "You get information about healthy and health community",
				},
			]}
		/>
	);
}

const styles = StyleSheet.create({});
