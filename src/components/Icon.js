import React from "react";
import {
	MaterialCommunityIcons,
	AntDesign,
	Feather,
	Fontisto,
} from "@expo/vector-icons";
// https://icons.expo.fyi/

const Icon = props => {
	switch (props.iconPack.toLowerCase()) {
		case "antdesign":
			return <AntDesign {...props} />;

		case "feather":
			return <Feather {...props} />;

		case "fontisto":
			return <Fontisto {...props} />;

		case "materialcommunityicons":
			return <MaterialCommunityIcons {...props} />;
		default:
			return null;
	}
};

export default Icon;
