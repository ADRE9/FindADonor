import styled from 'styled-components';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const FilterView = styled.Pressable`
position: absolute;
bottom:${hp('5')}px;
left:${wp('5')}px;
width:${wp('30')}px;
height: ${hp('6')}px;
border-radius:${hp('1')}px;
background-color: black;
justify-content: space-around;
align-items: center;
flex-direction: row;
`;

export const FilterText = styled.Text`
color:white;
font-size:${hp('2.4')}px;
`;

export const MapCard = styled.View`
width:${wp('60')}px;
border-radius: ${hp('1')}px;
height:${hp('20')}px;
background-color: black;
justify-content: center;
align-items: center;
`;

export const Title= styled.Text`
color:white;
font-size:${hp('2.4')}px;
`;
export const Description= styled.Text`
color:white;
font-size:${hp('1.8')}px;
`;