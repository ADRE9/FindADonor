import React from "react";
import {
	Keyboard,
	KeyboardAvoidingView,
	ScrollView,
	TouchableWithoutFeedback,
} from "react-native";

export const KeyboardUsingScreen = ({ children }) => {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={{ flex: 1, backgroundColor: "white", position: "relative" }}
		>
			<TouchableWithoutFeedback
				style={{ flex: 1 }}
				onPress={() => Keyboard.dismiss()}
			>
				<ScrollView
					showsVerticalScrollIndicator={false}
					style={{ flex: 1 }}
					contentContainerStyle={{ flexGrow: 1 }}
				>
					{children}
				</ScrollView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};
