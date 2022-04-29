import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	Alert,
	Button,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Screen } from "../../components/Screen";
import { connect } from "react-redux";
import {
	logoutUserAction,
	registerDonor,
} from "../../redux/actions/userAction";
import { findAllDonors } from "../../redux/actions/donorsAction";
import {
	ProfileCircle,
	TopView,
	Name,
	LogoutView,
	Logout,
	BloodGroup,
	Age,
	BottomView,
	QuoteCard,
	Quote,
	ActionButton,
	RegisterAsDonor,
	LogoutFromAll,
	Role,
	Box,
	Value,
	Key,
	ButtonText,
	Card,
	CardButton,
} from "./styledComponent";
import { TopCircle } from "svg";
import perfectSize from "../../utils/pixelPerfect";
import { FemaleAvatar, MaleAvatar } from "../../assets/svg";
import StatusBarGap from "../../components/StatusBarGap";
import Icon from "../../components/Icon";

const { width } = Dimensions.get("window");

const CircularButton = props => {
	return (
		<TouchableOpacity
			onPress={props.onPress}
			{...props}
			activeOpacity={0.9}
			style={{
				backgroundColor: "white",
				justifyContent: "center",
				alignItems: "center",
				top: perfectSize(30),
				borderRadius: perfectSize(100),
				margin: perfectSize(25),
				width: perfectSize(50),
				height: perfectSize(50),
				backgroundColor: "#fff",
				elevation: 5,
			}}
			{...props}
		>
			{props.children}
		</TouchableOpacity>
	);
};

const ProfileScreen = ({
	logoutUserAction,
	userData,
	findAllDonors,
	registerDonor,
}) => {

	const showRegistrationPrompt=()=>Alert.alert(
		"Declaration",
		"By registering yourself as donor you confirm that you don't have any STD's or diseases that may get transfered while donating blood. Although your blood will be passed through few tests this declaration is written to make sure you are healthy for blood donation.",
		[
			{
				text: "Cancel",
				onPress: () => console.log("Cancel Pressed"),
				style: "cancel"
			},
			{ text: "OK", onPress: () => registerDonor() }
		]
	);

	return (
		<Screen>
			<TopCircle width={width} height={perfectSize(411)} />
			<TopView>
				<StatusBarGap height={4.8} />
				<ProfileCircle>
					{console.log(userData.role)}
					{userData.role === "user" ? <MaleAvatar /> : <FemaleAvatar />}
				</ProfileCircle>
				<Name>{userData.name}</Name>
				<Role>{userData.role.toUpperCase()}</Role>

				<Box>
					<CircularButton onPress={()=>Alert.alert("Phone Number",userData.phoneNumber)}>
						<Icon
							iconPack="feather"
							name="phone"
							size={20}
							color="#f88386"
						></Icon>
					</CircularButton>
					<CircularButton onPress={()=>Alert.alert("Email Address",userData.email)}>
						<Icon
							iconPack="feather"
							name="mail"
							size={20}
							color="#f88386"
						></Icon>
					</CircularButton>
				</Box>
			</TopView>

			<BottomView>
				<Box
					style={{
						marginTop: 30,
						justifyContent: "space-evenly",
						width: "100%",
					}}
				>
					<View>
						<Value>
							{userData.bloodGroup
								.slice(0, -2)
								.replace(/^\w+/, c => c.toUpperCase())}
						</Value>
						<Key>Blood Group</Key>
					</View>
					<View>
						<Value>{userData.age}</Value>
						<Key>Age</Key>
					</View>
				</Box>

				<View style={{ height: perfectSize(40) }}></View>
				<ActionButton>
					<Logout onPress={() => logoutUserAction()}>Logout</Logout>
				</ActionButton>

				{/* <LogoutFromAll onPress={() => findAllDonors()}>
					<RegisterAsDonor>LOGOUT FROM ALL DEVICES</RegisterAsDonor>
				</LogoutFromAll> */}

				{userData.role === "user" ? (
					<Card>
						<Text style={{ color: "#707070" }}>
							“Blood Donation will cost you nothing , but it will save a life!”
						</Text>

						<CardButton
							onPress={() => showRegistrationPrompt()}
							style={({ pressed }) => [
								{ backgroundColor: pressed ? "#f88386" : "white" },
							]}
						>
							{({ pressed }) => (
								<ButtonText
									style={[
										{ color: pressed ? "white" : "#f88386" },
										styles.btnText,
									]}
								>
									Register as Donor
								</ButtonText>
							)}
						</CardButton>
					</Card>
				) : null}
			</BottomView>
		</Screen>
	);
};

const mapStateToProps = state => {
	return { userData: state.user.userData };
};

export default connect(mapStateToProps, {
	logoutUserAction,
	findAllDonors,
	registerDonor,
})(ProfileScreen);

const styles = StyleSheet.create({
	circleImg: {
		resizeMode: "contain",
		width: wp("100"),
	},
	circle: {
		backgroundColor: "black",
		width: perfectSize(50),
		height: perfectSize(50),
	},
	avatar: {
		resizeMode: "contain",
		width: "100%",
		height: "100%",
	},
});
