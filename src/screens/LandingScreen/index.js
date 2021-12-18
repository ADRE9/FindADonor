import React, { useContext } from "react";
import { AuthContext } from "../../context/Auth";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Screen } from "../../components/Screen";
import {
	BottomView,
	DonateButton,
	DonateText,
	DonorButton,
	TopView,
} from "./styledComponent";
import { AntDesign } from "@expo/vector-icons";

const LandingScreen = ({ navigation }) => {
	return (
		<Screen>
			<Image
				style={styles.img}
				source={require("../../assets/images/WaveMobile.png")}
			/>
			<TopView>
				<Text style={styles.heading}>GIVE THE GIFT OF LIFE.</Text>
				<Text style={styles.heading1}>DONATE BLOOD.</Text>
			</TopView>
			<BottomView>
				<Image
					style={styles.img}
					source={require("../../assets/images/illustration.png")}
				/>
				<DonateButton onPress={() => navigation.navigate("Login")}>
					<DonateText>LOGIN</DonateText>
				</DonateButton>
			</BottomView>
		</Screen>
	);
};

export default LandingScreen;

const styles = StyleSheet.create({
	heading: {
		color: "white",
		fontSize: hp("6%"),
	},
	heading1: {
		color: "#343640",
		fontSize: hp("6%"),
	},
	viewHeading: {
		position: "absolute",
		backgroundColor: "blue",
		top: hp("10%"),
		// flex:1,
		marginHorizontal: wp("10%"),
	},
	img: {
		top: 0,
		resizeMode: "contain",
		width: "100%",
	},
});
