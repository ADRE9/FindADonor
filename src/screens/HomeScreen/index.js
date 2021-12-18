import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Screen } from '../../components/Screen';
import { BottomView,CardTitle,Name } from './styledComponent';
import SquaredCard from '../../components/SquareCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';

const HomeScreen=({name,navigation})=> {
  return (
    <Screen>
      <Image style={styles.img} source={require('../../assets/images/Wave2.png')} />
      <Name>Hi ! {name?name.split(" ")[0]:"User"}</Name>
      <BottomView>
        <SquaredCard onPress={()=>navigation.navigate('Search')}>
          <MaterialCommunityIcons name="account-search-outline" size={50} color="#f88386" />
          <CardTitle>FIND A DONOR</CardTitle>
        </SquaredCard>
        <SquaredCard onPress={()=>navigation.navigate('Search')}>
          <MaterialCommunityIcons name="blood-bag" size={50} color="#f88386" />
          <CardTitle>BLOOD BANK</CardTitle>
        </SquaredCard>
        <SquaredCard>
          <FontAwesome name="envelope-o" size={40} color="#f88386" />
          <CardTitle>REQUESTS</CardTitle>
        </SquaredCard>
        <SquaredCard onPress={()=>navigation.navigate('Profile')}>
          <MaterialCommunityIcons name="face-profile" size={50} color="#f88386" />
          <CardTitle>PROFILE</CardTitle>
        </SquaredCard>
      </BottomView>
    </Screen>
  )
}
const mapStateToProps = (state) => {
  return {name:state.user.userData.name}
}

export default connect(mapStateToProps)(HomeScreen)
const styles = StyleSheet.create({
  img: {
    resizeMode: 'contain',
    width:wp('100')
  }
})
