import React from "react";
import styled from "styled-components";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { View } from "react-native";


const StatusBarGap = ({height}) => {
  const heightFinal = height ? hp(height): hp(2.4);
  
	return (
		<View
			style={{
				height: heightFinal,
				// backgroundColor: "red",
        // width: 100,
			}}
		/>
	);
};

export default StatusBarGap;
