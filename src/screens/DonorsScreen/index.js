import React, { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FilterBar from "../../components/FilterBar";
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
import { findAllDonors } from "../../redux/actions/donorsAction";
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { MaleAvatar } from "svg";
import { isFiltered } from "../../utils/utils";

function DonorsScreen({ findAllDonors, donors }) {
	const [distance, setDistance] = useState(null);
	const [bloodGroup, setBloodGroup] = useState(null);
	const allFilters = { distance, bloodGroup };

	// const [isFilterOpen, setIsFilterOpen] = useState(true);

	useFocusEffect(
		useCallback(() => {
			const subscribe = async () => findAllDonors();

			subscribe();
		}, []),
	);

	const renderItem = donorObj => {
		const donor = donorObj.item;
		return isFiltered(donor, allFilters) ? (
			<>
				<Card>
					<Profile>
						<Avatar>
							<MaleAvatar style={styles.avatar} />
						</Avatar>
						<View>
							<Title numberOfLines={1}>{donor.name}</Title>
							<Description>
								{`${donor.bloodGroup} ${donor.role}, `.replace(/^\w+/, c =>
									c.toUpperCase(),
								)}

								{donor.age + " years old"}
							</Description>
							<Description>
								<AntDesign name="mail" size={hp("1")} color="#000" />
								{" " + donor.email}
							</Description>
							<Description>
								<AntDesign name="phone" size={hp("1")} color="#000" />
								{" " + donor.phoneNumber}
							</Description>
						</View>
					</Profile>
					<Description numberOfLines={2}>
						<Italic>
							<Capitalize>
								{`${donor.landmark}, ${donor.city}, ${donor.district}, ${donor.state}`}
							</Capitalize>
						</Italic>
					</Description>
					<View style={{ flexDirection: "row" }}>
						<ActionButton>
							<Text style={styles.buttonText}>Request</Text>
						</ActionButton>
						<ActionButton>
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
				<FilterBar
					options={[
						"a +ve",
						"a -ve",
						"b +ve",
						"b -ve",
						"o +ve",
						"o -ve",
						"ab +ve",
						"ab -ve",
					]}
					unit={""}
					activeOption={bloodGroup}
					setActiveOption={setBloodGroup}
					iconName={"blood-drop"}
					iconPack={"fontisto"}
					optionRenderer={option =>
						option.slice(0, -2).replace(/^\w+/, c => c.toUpperCase())
					}
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
			{donors === null ? (
				<View style={{ marginTop: 30, textAlign: "center" }}>
					<ActivityIndicator size="large" color="#F88386" />
				</View>
			) : (
				<FlatList
					data={donors}
					renderItem={renderItem}
					keyExtractor={donor => donor._id}
					contentContainerStyle={{ paddingTop: 10, paddingBottom: 10 }}
					extraData={Object.values(allFilters)}
				/>
			)}
		</Screen>
	);
}

const mapStateToProps = state => {
	return {
		donors: state.donors.donors,
	};
};

export default connect(mapStateToProps, {
	findAllDonors,
})(DonorsScreen);

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
