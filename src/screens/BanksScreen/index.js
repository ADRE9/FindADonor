import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { ActivityIndicator, StyleSheet, Text, View,Platform } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FilterBar from "../../components/FilterBar";
import * as Linking from "expo-linking";
import { Screen } from "../../components/Screen";
import {
	Avatar,
	Capitalize,
	Card,
	Description,
	Filters,
	Italic,
	Profile,
	ActionButton,
	Title,
} from "./styledComponents";
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { BankLocation } from "svg";

import { findAllBanks } from "../../redux/actions/donorsAction";
import { isFiltered } from "../../utils/utils";

function BanksScreen({ findAllBanks, banks,navigation }) {
	const [distance, setDistance] = useState(null);
	const allFilters = { distance };

	// const [isFilterOpen, setIsFilterOpen] = useState(true);

	useFocusEffect(
		useCallback(() => {
			const subscribe = async () => findAllBanks();

			subscribe();
		}, []),
	);

	const renderItem = bankObj => {
		const bank = bankObj.item;
		return isFiltered(bank, allFilters) ? (
			<>
				<Card>
					<Profile>
						<Avatar>
							<BankLocation style={styles.avatar} />
						</Avatar>
						<View style={{marginRight: 20}}>
							<Title numberOfLines={1}>{bank.name}</Title>
							<Description>
								<AntDesign name="phone" size={hp("1")} color="#000" />
								{" " + bank.phoneNumber}
							</Description>
							<Description>
								<AntDesign name="mail" size={hp("1")} color="#000" />
								{" " + bank.email}
							</Description>
						</View>
					</Profile>
					<Description numberOfLines={2}>
						<Italic>
							<Capitalize>
								{`${bank.landmark}, ${bank.city}, ${bank.district}, ${bank.state}`}
							</Capitalize>
						</Italic>
					</Description>
					<View style={{ flexDirection: "row" }}>
						{/* <ActionButton>
						<Text style={styles.buttonText}>Request</Text>
					</ActionButton> */}
						<ActionButton onPress={() => {
							var scheme =
								Platform.OS === 'ios' ? 'maps://app?daddr=' : 'google.navigation:q=';
							var url = scheme + `${bank.location.latitude}+${bank.location.longitude}`;
							Linking.openURL(url);
						}}>
							<Text style={styles.buttonText}>Locate</Text>
						</ActionButton>
					</View>
				</Card>
				<View style={{ height: 10 }} />
			</>
		) : null;
	};

	return (
		<Screen>
			{/* <Filters
			// style={
			// 	isFilterOpen
			// 		? { transform: [{ translateY: 0 }] }
			// 		: { transform: [{ translateY: -300 }], height: 0 }
			// }
			>
				<FilterBar
					options={[5, 10, 50, 100, 150, 200, 300, 500]}
					unit={"km"}
					activeOption={distance}
					setActiveOption={setDistance}
					iconName={"swap"}
					iconPack={"antdesign"}
					optionRenderer={null}
				/>
			</Filters> */}
			{/* <TouchableOpacity
				style={styles.filterIconBox}
				onPress={() => setIsFilterOpen(!isFilterOpen)}
			>
				<AntDesign
					name="filter"
					size={hp("3")}
					color="#F88386"
					style={{ marginTop: 2 }}
				/>
			</TouchableOpacity> */}
			{/* <FAB
					style={styles.filterIconBox}
					icon="filter"
					color="#F88386"
					onPress={() => setIsFilterOpen(!isFilterOpen)}
				/> */}
			{banks === null ? (
				<View style={{ marginTop: 30, textAlign: "center" }}>
					<ActivityIndicator size="large" color="#F88386" />
				</View>
			) : (
				<FlatList
					data={banks}
					renderItem={renderItem}
					keyExtractor={bank => bank._id}
					contentContainerStyle={{ paddingTop: 10, paddingBottom: 10 }}
					extraData={Object.values(allFilters)}
				/>
			)}
		</Screen>
	);
}

const mapStateToProps = state => {
	return {
		banks: state.donors.banks,
	};
};

export default connect(mapStateToProps, {
	findAllBanks,
})(BanksScreen);

const styles = StyleSheet.create({
	avatar: {
		height: "100%",
		width: "100%",
	},
	buttonText: {
		color: "white",
	},
	filterIconBox: {
		width: 50,
		height: 50,
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 100,
		elevation: 4,
		bottom: 5,
		// top: "auto",
		right: 5,
		position: "relative",
	},
	// filterIconBox: { // FAB
	// 	backgroundColor: "white",
	// 	justifyContent: "center",
	// 	alignItems: "center",
	// 	position: "absolute",
	// 	right: 0,
	// 	bottom: 0,
	// 	padding: 0,
	// 	margin: 16,
	// },
});
