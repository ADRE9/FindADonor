import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import RouteProvider from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import rootStore from "./src/redux/store";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {setCustomText} from 'react-native-global-props';
import "react-native-gesture-handler";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import { useFonts } from "expo-font";

export default function App() {
	const { store, persistor } = rootStore();
	const [isReady, setIsReady] = useState(null);
	const [loaded] = useFonts({
		Indie: require("./src/assets/fonts/IndieFlower-Regular.ttf"),
		"Segoe UI Bold Italic": require("./src/assets/fonts/Segoe-UI-Bold-Italic.ttf"),
		"Segoe UI Bold": require("./src/assets/fonts/Segoe-UI-Bold.ttf"),
		"Segoe UI Italic": require("./src/assets/fonts/Segoe-UI-Italic.ttf"),
		"Segoe UI Regular": require("./src/assets/fonts/Segoe-UI-Regular.ttf"),
		"Segoe UI Light":require("./src/assets/fonts/SegoeUI-Light.ttf"),
	});

	const customTextProps = {
		style: {
			fontFamily:'Segoe UI Regular',
			color: 'black'
		}
	};

	const _cacheResourcesAsync = async () => {
		const images = [
			require("./src/assets/images/Avatar.png"),
			require("./src/assets/images/Circle.png"),
			require("./src/assets/images/illustration.png"),
			require("./src/assets/images/onboard1.png"),
			require("./src/assets/images/Wave2.png"),
			require("./src/assets/images/WaveMobile.png"),
			require("./src/assets/images/DonorAvatar.png"),
		];

		const fonts = [
			require("./src/assets/fonts/IndieFlower-Regular.ttf"),
			require("./src/assets/fonts/Segoe-UI-Bold-Italic.ttf"),
			require("./src/assets/fonts/Segoe-UI-Bold.ttf"),
			require("./src/assets/fonts/Segoe-UI-Italic.ttf"),
			require("./src/assets/fonts/Segoe-UI-Regular.ttf"),
			require("./src/assets/fonts/SegoeUI-Light.ttf")
		];

		const cacheImages = images.map(image => {
			return Asset.fromModule(image).downloadAsync();
		});

		const cacheFonts = fonts.map(font => {
			return Asset.fromModule(font).downloadAsync();
		});

		setCustomText(customTextProps);

		return Promise.all(cacheImages, cacheFonts);
	};

	if (!isReady || !loaded) {
		return (
			<AppLoading
				startAsync={_cacheResourcesAsync}
				onFinish={() => setIsReady({ isReady: true })}
				onError={console.warn}
			/>
		);
	}

	return (
		<SafeAreaProvider>
			<StatusBar backgroundColor="#f88386" style="dark" />
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<NavigationContainer>
						<RouteProvider />
					</NavigationContainer>
				</PersistGate>
			</Provider>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		// borderWidth:1
	},
});
