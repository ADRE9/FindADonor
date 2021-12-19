import React from "react";
import { AntDesign, Feather, Fontisto } from "@expo/vector-icons";

const Icon = props => {
	switch (props.iconPack.toLowerCase()) {
		case "antdesign":
			return <AntDesign {...props} />;

		case "feather":
			return <Feather {...props} />;

		case "fontisto":
			return <Fontisto {...props} />;
		default:
			return null;
	}
};

export default Icon;
