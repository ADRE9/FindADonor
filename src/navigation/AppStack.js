import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainStack from "./MainStack";

const Stack = createNativeStackNavigator();

export default function AppStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				options={{ header: () => null }}
				name="Main"
				component={MainStack}
			/>
		</Stack.Navigator>
	);
}
