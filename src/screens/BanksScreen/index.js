import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	Button,
	Pressable,
	Keyboard,
} from "react-native";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Screen } from "../../components/Screen";

export default function BanksScreen({ navigation }) {
	return (
		<Screen>
			<Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
				<Text>bankland</Text>
			</Pressable>
		</Screen>
	);
}

const styles = StyleSheet.create({});
