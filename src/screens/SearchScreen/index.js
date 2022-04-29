import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	Image,
	Pressable,
	ActivityIndicator,
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Screen } from "../../components/Screen";
import {
	FilterText,
	FilterView,
	SideView,
	MapCard,
	Title,
	Description,
	BoldText,
	Italic,
	Capitalize,
	Avatar,
	Profile,
	RequestButton,
	ActionButton,
	ButtonText,
} from "./styledComponent";
import { AntDesign } from "@expo/vector-icons";
import Animated, {
	useSharedValue,
	Easing,
	useAnimatedStyle,
	withTiming,
} from "react-native-reanimated";
import { connect } from "react-redux";
import { findAllDonors,findAllBanks } from "../../redux/actions/donorsAction";
import { useFocusEffect } from "@react-navigation/native";
import Icon from "../../components/Icon";
import SelectFilter from "../../components/SelectFilter";
import { ScrollView } from "react-native-gesture-handler";
import * as Linking from "expo-linking"

const SearchScreen = ({ navigation, location, findAllDonors,findAllBanks,banks, donors }) => {
	const startWidth = -wp("100");
	const endWidth = wp("0");
	const translateX = useSharedValue(startWidth);

	const [distance, setDistance] = useState(null);
	const [bloodGroup, setBloodGroup] = useState(null);
	const [filteredDonor, setFilteredDonor] = useState(null);

	useFocusEffect(
		React.useCallback(() => {
			const subscribe = async () => await findAllDonors();

			subscribe();
		}, []),
	);

	useFocusEffect(
		React.useCallback(() => {
			const subscribe = async () => await findAllBanks();

			subscribe();
		}, []),
	);

	const viewStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: translateX.value }],
		};
	});

	const openDrawer = () => {
		translateX.value = withTiming(endWidth, {
			duration: 500,
			easing: Easing.out(Easing.exp),
		});
	};

	const closeDrawer = () => {
		translateX.value = withTiming(startWidth, {
			duration: 500,
			easing: Easing.out(Easing.exp),
		});
	};
	console.log(donors,bloodGroup);

	const filterDonors = () => {
		setFilteredDonor(donors.filter(donor => donor.bloodGroup === bloodGroup));
		closeDrawer();
	}
	return (
		<Screen>
			{location && donors !== null ? (
				<>
					<MapView
						initialRegion={{
							latitude: location.coords.latitude,
							longitude: location.coords.longitude,
							latitudeDelta: 0.0922,
							longitudeDelta: 0.0421,
						}}
						customMapStyle={require("../../utils/map.json")}
						style={styles.map}
					>
						<Marker
							key={1}
							coordinate={location.coords}
							title="Me"
							pinColor="aqua"
							description="My Location"
						/>
						{donors&&(filteredDonor===null?donors:filteredDonor).map((donor, index) => (
							<Marker
								key={index}
								coordinate={donor.location}
								title={donor.name}
								pinColor="red"
								description="Donor"
							>
								<Callout onPress={()=>Linking.openURL(`tel:${donor.phoneNumber}`)}>
									<MapCard>
										<Profile>
											{/* <Avatar>
												<Image
													style={styles.avatar}
													source={require("../../assets/images/Avatar.png")}
												/>
											</Avatar> */}
											<View>
												<Title numberOfLines={1}>{donor.name}</Title>
												<Description>
													{`${donor.bloodGroup} ${donor.role}, `.replace(
														/^\w+/,
														c => c.toUpperCase(),
													)}

													{donor.age + " years old"}
												</Description>
												<Description>
													<AntDesign name="phone" size={hp("1")} color="#fff" />
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
										<RequestButton>
											<Text>Request the Donor</Text>
										</RequestButton>
									</MapCard>
								</Callout>
							</Marker>
						))}
						{banks&&banks.map((bank, index) => (
							<Marker
								key={index}
								coordinate={bank.location}
								title={bank.name}
								pinColor="indigo"
								description="bank"
							>
								<Callout tooltip onPress={()=>Linking.openURL(`tel:${bank.phoneNumber}`)}>
									<MapCard>
										<Profile>
											<View>
												<Title numberOfLines={1}>{bank.name}</Title>
												
												<Description>
													<AntDesign name="phone" size={hp("1")} color="#fff" />
													{" " + bank.phoneNumber}
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
										<RequestButton >
											<Text>Request the Bank</Text>
										</RequestButton>
									</MapCard>
								</Callout>
							</Marker>
						))}
					</MapView>
					<FilterView onPress={() => openDrawer()}>
						<AntDesign name="filter" size={hp("3")} color="#fff" />
						<FilterText>FILTER</FilterText>
					</FilterView>
					<Animated.View style={[styles.sideMenu, viewStyle]}>
						<View style={styles.menu}>
							<View style={styles.titleBox}>
								<Icon
									iconPack="MaterialCommunityIcons"
									name="sort-variant"
									size={24}
									color="#fff"
								></Icon>
								<FilterText>FILTER</FilterText>
							</View>
							<ScrollView showsVerticalScrollIndicator={false}>
								<SelectFilter
									title="BLOOD GROUP"
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
									activeOption={bloodGroup}
									setActiveOption={setBloodGroup}
									optionRenderer={option =>
										option.slice(0, -2).replace(/^\w+/, c => c.toUpperCase())
									}
								/>
								{/* <SelectFilter
									title="DISTANCE (in kms)"
									options={[5, 10, 50, 100, 150, 200, 300, 500]}
									activeOption={distance}
									setActiveOption={setDistance}
								/> */}
							</ScrollView>
							<View style={styles.actionBox}>
								<ActionButton onPress={() => filterDonors()}>
									<ButtonText>APPLY</ButtonText>
								</ActionButton>
								<ActionButton onPress={() => closeDrawer()}>
									<ButtonText>CANCEL</ButtonText>
								</ActionButton>
							</View>
						</View>
						<Pressable
							onPress={() => closeDrawer()}
							style={styles.backdrop}
						></Pressable>
					</Animated.View>
				</>
			) : (
				<ActivityIndicator style={{ alignSelf: "center" }} size="large" />
			)}
		</Screen>
	);
};

const mapStateToProps = state => {
	return {
		location: state.user.location ? state.user.location : null,
		donors: state.donors.donors,
		banks: state.donors.banks,
	};
};

export default connect(mapStateToProps, {
	findAllDonors,findAllBanks
})(SearchScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	map: {
		flex: 1,
	},
	sideMenu: {
		position: "absolute",
		flexDirection: "row",
		width: wp("100"),
		height: hp("110"),
	},
	titleBox: {
		justifyContent: "flex-start",
		flexDirection: "row",
		marginTop: 50,
		paddingLeft: 16,
	},
	actionBox: {
		justifyContent: "center",
		flexDirection: "row",
		marginBottom: 100,
		paddingLeft: 10,
		paddingRight:10
	},
	menu: {
		backgroundColor: "#f88386",
		width: wp("70"),
		height: hp("110"),
	},
	backdrop: {
		width: wp("30"),
		height: hp("110"),
	},
	avatar: {
		position: "relative",
		resizeMode: "contain",
		width: "100%",
		height: "100%",
	},
});
