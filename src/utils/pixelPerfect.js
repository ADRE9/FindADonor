import { create } from "react-native-pixel-perfect";

const designResolution = {
	width: 411,
	height: 823,
};

const perfectSize = create(designResolution.px);

export default perfectSize;
