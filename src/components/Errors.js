import React from 'react';
import styled from 'styled-components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const ErrorView = styled.View`
  align-items: flex-start;
`;

const ErrorText = styled.Text`
  /* font-family: Montserrat-Regular; */
  color: red;
  font-size: 10px;
  text-align: center;
`;

const Errors = ({texts}) => {
  return (
    <ErrorView>
      <ErrorText>{texts}</ErrorText>
    </ErrorView>
  );
};

export default Errors;
