import React, { useState } from "react";
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
import { Screen } from "../../components/Screen";
import {
	SignupButton,
	LoginText,
	StyledInput,
	LoginButton,
} from "../LoginScreen/styledComponent";
import { BottomView, TopView, CheckBoxView, RoleText } from "./styledComponent";
import schema from "../../validators/registerSchema1";
import { Formik } from "formik";
import Errors from "../../components/Errors";
import DisabledButton from "../../components/DisabledButton";

export default function index({ navigation }) {
	return (
		<Screen>
			<Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
				<Image
					style={styles.img}
					source={require("../../assets/images/WaveMobile.png")}
				/>
				<TopView>
					<Text style={styles.heading}>REGISTER</Text>
				</TopView>
				<BottomView>
					<Formik
						validationSchema={schema}
						initialValues={{
							name: "",
							email: "",
							age: "",
							phoneNumber: "",
						}}
						onSubmit={values => navigation.navigate("Register2", { values })}
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
									value={values.name}
									onChangeText={handleChange("name")}
									placeholder="Enter Name"
									autoCorrect={false}
									onBlur={handleBlur("name")}
									placeholder="Name"
								/>
								{values.name.length !== 0 && errors.name && touched.name && (
									<Errors texts={errors.name} />
								)}
								<StyledInput
									value={values.email}
									onChangeText={handleChange("email")}
									placeholder="Enter Email Address"
									autoCorrect={false}
									onBlur={handleBlur("email")}
									placeholder="Email"
								/>
								{values.email.length !== 0 && errors.email && touched.email && (
									<Errors texts={errors.email} />
								)}
								<StyledInput
									value={values.age}
									onChangeText={handleChange("age")}
									autoCorrect={false}
									onBlur={handleBlur("age")}
									placeholder="Age"
								/>
								{values.age < 18 && errors.age && touched.age && (
									<Errors texts={errors.age} />
								)}
								<StyledInput
									value={values.phoneNumber}
									onChangeText={handleChange("phoneNumber")}
									autoCorrect={false}
									onBlur={handleBlur("phoneNumber")}
									placeholder="Mobile (10-Digits)"
								/>
								{values.phoneNumber.length !== 0 &&
									errors.phoneNumber &&
									touched.phoneNumber && <Errors texts={errors.phoneNumber} />}
								{isValid ? (
									<LoginButton onPress={handleSubmit}>
										<LoginText>NEXT (1/2)</LoginText>
									</LoginButton>
								) : (
									<DisabledButton>
										<LoginText>NEXT (1/2)</LoginText>
									</DisabledButton>
								)}
							</>
						)}
					</Formik>
					<SignupButton onPress={() => navigation.navigate("Login")}>
						<LoginText>BACK</LoginText>
					</SignupButton>
				</BottomView>
			</Pressable>
		</Screen>
	);
}

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
	dropdown: {
		backgroundColor: "transparent",
		height: hp("5.5%"),
		width: wp("80%"),
	},
	dropDownStyle: {
		backgroundColor: "#fafafa",
	},
	containerStyle: {
		height: hp("5.5%"),
		width: wp("80%"),
		marginBottom: hp("2%"),
	},
});
