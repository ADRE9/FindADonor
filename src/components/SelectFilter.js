import React from "react";
import styled from "styled-components";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "./Icon";

const SelectFilter = ({
	options,
	activeOption,
	setActiveOption,
	optionRenderer,
	title
}) => {
	const getOption = option => {
		if (optionRenderer != null) return optionRenderer(option);
		else return option;
	};
	return (
		<Root style={{ width: "100%" }}>
			<Text style={styles.titleText}>{title}</Text>

			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				<View style={styles.optionsContainer}>
					{options.map((option, i) => {
						return (
							<Option
								key={`option-${i}`}
								onPress={() =>
									option === activeOption
										? setActiveOption(null)
										: setActiveOption(option)
								}
							>
								{activeOption === option ? (
									<Icon
										iconPack="MaterialCommunityIcons"
										name="radiobox-marked"
										size={hp("2")}
										color="#FFF"
									/>
								) : (
									<Icon
										iconPack="MaterialCommunityIcons"
										name="radiobox-blank"
										size={hp("2")}
										color="#FFF"
									/>
								)}
								<Text style={styles.optionText}>{getOption(option)}</Text>
							</Option>
						);
					})}
				</View>
			</ScrollView>
		</Root>
	);
};

export default SelectFilter;

const styles = StyleSheet.create({
	optionsContainer: {
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingLeft: 3,
		paddingTop: 3,
		paddingBottom: 3,
	},
	optionText: {
		color: "#fff",
		fontSize: 15,
		paddingLeft:10
	},
	titleText: {
		color: "#fff",
		fontSize: 18,
	},
});

const Option = styled.TouchableOpacity`
	height: 27px;
	flex-direction:row;
	justify-content: flex-start;
	align-items: center;
	color: white;
	font-weight: bold;
	margin: 0 3px;
	border-radius: 5px;
	border-color: #f88386;
	border-width: 1px;
	overflow: hidden;
`;

const Root = styled.View`
	position: relative;
	align-items: flex-start;
	justify-content: flex-start;
	padding: 30px 0 10px 20px;
`;
