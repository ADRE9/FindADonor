import React, {useState} from "react";
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
import AppBar from "../../components/AppBar";
import FilterBar from "../../components/FilterBar";
import { Screen } from "../../components/Screen";
import { Body } from "./styledComponents";


export default function DonorsScreen({ navigation }) {
	const [distance, setDistance] = useState(null)	
	return (
		<Screen>
			<Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
				<AppBar
					title={"NEARBY DONORS"}
					goBack={() => navigation.goBack()}
				/>
				<Body >
					<FilterBar options={[1,2,3,4,5,6,7]} unit={"km"} activeOption={distance} setActiveOption={setDistance}/>
				</Body>
			</Pressable>
		</Screen>
	);
}

const styles = StyleSheet.create({
  
});
