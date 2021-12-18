import React from "react";
import { useFocusEffect } from "@react-navigation/core";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { fetchLocation } from "../redux/actions/userAction";
import { AntDesign } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { connect } from "react-redux";

const Tab = createBottomTabNavigator();

const MainStack = ({ fetchLocation }) => {
	useFocusEffect(
		React.useCallback(() => {
			fetchLocation();
		}, []),
	);

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === "Home") {
						iconName = focused ? "home" : "home";
					} else if (route.name === "Search") {
						iconName = focused ? "search1" : "search1";
					} else if (route.name === "Profile") {
						iconName = focused ? "user" : "user";
					}

					// You can return any component that you like here!
					return <AntDesign name={iconName} size={size} color={color} />;
				},
				tabBarActiveTintColor: "#f88386",
				tabBarInactiveTintColor: "gray",
				lazy: false,
			})}
		>
			<Tab.Screen
				options={{ header: () => null }}
				name="Home"
				component={HomeScreen}
			/>
			<Tab.Screen
				options={{ header: () => null }}
				name="Search"
				component={SearchScreen}
			/>
			<Tab.Screen
				options={{ header: () => null }}
				name="Profile"
				component={ProfileScreen}
			/>
		</Tab.Navigator>
	);
};

export default connect(null, {
	fetchLocation,
})(MainStack);
