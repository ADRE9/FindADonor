import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DonorsScreen from "../../screens/DonorsScreen";
import BanksScreen from "../../screens/BanksScreen";
import HomeScreen from "../../screens/HomeScreen";
import RequestsScreen from "../../screens/RequestsScreen";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				options={{ header: () => null }}
				name="Donor"
				component={DonorsScreen}
			/>
			<Stack.Screen
				options={{ header: () => null }}
				name="HomeScreen"
				component={HomeScreen}
			/>
			<Stack.Screen
				options={{ header: () => null }}
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
