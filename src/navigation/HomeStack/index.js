import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DonorsScreen from "../../screens/DonorsScreen";
import BanksScreen from "../../screens/BanksScreen";
import HomeScreen from "../../screens/HomeScreen";
import RequestsScreen from "../../screens/RequestsScreen";
import AppBar from "../../components/AppBar";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				options={{ header: () => null }}
				name="HomeScreen"
				component={HomeScreen}
			/>
			<Stack.Screen
				options={{
					header: ({ navigation }) => (
						<AppBar
							title={"NEARBY DONORS"}
							goBack={() => navigation.goBack()}
						/>
					),
				}}
				name="Donor"
				component={DonorsScreen}
			/>
			<Stack.Screen
				options={{
					header: ({ navigation }) => (
						<AppBar
							title={"NEARBY BLOOD BANKS"}
							goBack={() => navigation.goBack()}
						/>
					),
				}}
				name="Bank"
				component={BanksScreen}
			/>
			<Stack.Screen
				options={{ header: () => null }}
				name="Requests"
				component={RequestsScreen}
			/>
		</Stack.Navigator>
	);
}
