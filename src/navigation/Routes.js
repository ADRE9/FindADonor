import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

const Routes = ({ token, state }) => {
	// console.log(state);
	if (token === null) {
		return <AuthStack />;
	}

	return <AppStack />;
};

const mapStateToProps = state => {
	return { token: state.user.token, state };
};

export default connect(mapStateToProps, {})(Routes);

const styles = StyleSheet.create({});
