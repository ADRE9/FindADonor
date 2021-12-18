import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
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
	RegisterDonor,
	RegisterAsDonor,
	LogoutFromAll,
} from "./styledComponent";
import pixelPerfect from "../../utils/pixelPerfect";

const ProfileScreen = ({
	logoutUserAction,
	userData,
	findAllDonors,
	registerDonor,
}) => {
	return (
		<Screen>
			<Image
				style={styles.circleImg}
				source={require("../../assets/images/Circle.png")}
			/>
			<TopView>
				<LogoutView>
					<Logout onPress={() => logoutUserAction()}>LOGOUT</Logout>
				</LogoutView>
				<ProfileCircle>
					{console.log(userData.role)}
					<Image
						style={styles.avatar}
						source={
							userData.role === "user"
								? require("../../assets/images/Avatar.png")
								: require("../../assets/images/DonorAvatar.png")
						}
					/>
				</ProfileCircle>
				<Name>{userData.name.toUpperCase()}</Name>
				<BloodGroup>
					{userData.bloodGroup.charAt(0).toUpperCase() +
						userData.bloodGroup.slice(1)}
				</BloodGroup>
				<Age>{userData.age} years old</Age>
			</TopView>
			<BottomView>
				<QuoteCard style={{ elevation: 2 }}>
					<Quote>
						“Blood Donation will cost you nothing , but it will save a life!”
					</Quote>
				</QuoteCard>
				{userData.role === "user" ? (
					<RegisterDonor
						onPress={() => registerDonor()}
						style={{ elevation: 4 }}
					>
						<RegisterAsDonor>REGISTER AS DONOR</RegisterAsDonor>
					</RegisterDonor>
				) : null}
				<LogoutFromAll onPress={() => findAllDonors()}>
					<RegisterAsDonor>LOGOUT FROM ALL DEVICES</RegisterAsDonor>
				</LogoutFromAll>
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
		width: pixelPerfect(50),
		height: pixelPerfect(50),
	},
	avatar: {
		resizeMode: "contain",
		width: "100%",
		height: "100%",
	},
});
