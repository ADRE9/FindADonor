import React from "react";
import {
	StyleSheet,
	Text,
	Image,
	ActivityIndicator,
	Pressable,
	BackHandler,
	Keyboard,
	Alert,
} from "react-native";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Screen } from "../../components/Screen";
import {
	BottomView,
	TopView,
	StyledInput,
	LoginButton,
	LoginText,
	BreakLine,
	SignupButton,
	ExtraText,
} from "./styledComponent";
import { Formik } from "formik";
import schema from "../../validators/loginSchema";
import Errors from "../../components/Errors";
import { useFocusEffect } from "@react-navigation/native";
import { connect } from "react-redux";
import { loginUserAction } from "../../redux/actions/userAction";

const LoginScreen = ({ navigation, loginUserAction, isLoading }) => {
	useFocusEffect(
		React.useCallback(() => {
			const onBackPress = () => {
				Alert.alert("Hold on!", "Are you sure you want to exit app?", [
					{
						text: "Cancel",
						onPress: () => null,
						style: "cancel",
					},
					{ text: "YES", onPress: () => BackHandler.exitApp() },
				]);
				return true;
			};

			// Add Event Listener for hardwareBackPress
			const backHandler = BackHandler.addEventListener(
				"hardwareBackPress",
				onBackPress,
			);

			return () => backHandler.remove();
		}, []),
	);

	return (
		<Screen>
			<Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
				<Image
					style={styles.img}
					source={require("../../assets/images/WaveMobile.png")}
				/>
				<TopView>
					<Text style={styles.heading}>LOGIN</Text>
				</TopView>
				<BottomView>
					<Formik
						validationSchema={schema}
						initialValues={{ email: "", password: "" }}
						onSubmit={values => loginUserAction(values)}
						validateOnMount
					>
						{({
							handleChange,
							handleBlur,
							handleSubmit,
							values,
							errors,
							isValid,
							touched,
						}) => (
							<>
								<StyledInput
									value={values.email}
									onChangeText={handleChange("email")}
									placeholder="Enter Email Address"
									autoCorrect={false}
									keyboardType="email-address"
									onBlur={handleBlur("email")}
								/>
								{values.email.length !== 0 && errors.email && touched.email && (
									<Errors texts={errors.email} />
								)}
								<StyledInput
									value={values.password}
									onChangeText={handleChange("password")}
									placeholder="Enter password"
									autoCorrect={false}
									secureTextEntry={true}
									autoCompleteType="password"
									keyboardType="default"
									textContentType="password"
									autoCapitalize="none"
									onBlur={handleBlur("password")}
								/>
								{values.password.length !== 0 &&
									errors.password &&
									touched.password && <Errors texts={errors.password} />}
								{isLoading ? (
									<LoginButton>
										<ActivityIndicator size="small" color="#fff" />
									</LoginButton>
								) : (
									<LoginButton onPress={handleSubmit}>
										<LoginText>LOGIN</LoginText>
									</LoginButton>
								)}
							</>
						)}
					</Formik>
					<BreakLine />
					<ExtraText>Or</ExtraText>
					<ExtraText>If you are new to the platform</ExtraText>
					<SignupButton onPress={() => navigation.navigate("Register")}>
						<LoginText>REGISTER</LoginText>
					</SignupButton>
				</BottomView>
			</Pressable>
		</Screen>
	);
};

const mapStateToProps = state => {
	return { isLoading: state.user.isLoading };
};

export default connect(mapStateToProps, {
	loginUserAction,
})(LoginScreen);

const styles = StyleSheet.create({
	heading: {
		color: "white",
		fontSize: hp("6%"),
	},
	viewHeading: {
		position: "absolute",
		backgroundColor: "blue",
		top: hp("10%"),
		// flex:1,
		marginHorizontal: wp("10%"),
	},
	img: {
		top: 0,
		resizeMode: "contain",
		width: "100%",
	},
});
