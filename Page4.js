import React from 'react';
import { Text, TextInput, View, StyleSheet, Button, Image,ImageBackground,Picker,TouchableOpacity
  } from 'react-native'; 
import GradientButton from 'react-native-gradient-buttons';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import { RadioButton } from 'react-native-paper';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import backAndroid, {
  hardwareBackPress,
  exitApp
} from 'react-native-back-android'
const  navigationOptions = {
  title: 'Welcome'
}
// reserved function for handling hardware back press

 class Page4 extends React.Component {

  render() {
    
     const {navigate} = this.props.navigation;
    return (
     
      <View style={styles.container}>
      


<LinearGradient  
   style={styles.linearGradient}
     colors={['#00DAF2','#00F4A2']}>
      <TouchableOpacity onPress={() =>{this.props.navigation.navigate('Page3')}}>
    <Icons name={'arrow-back'} size={30} color='#fff'  style={{marginLeft: '3%'}} />
</TouchableOpacity>
<Image style={styles.logo} source={require('./assets/im3.png')} resizeMode="stretch"/>
<Text style={styles.p}> Big Thanks </Text>
<Text style={styles.p1 }> You are a cyber superhero now! Be proud :D </Text>
         <GradientButton
         style={styles.grb}
     
      text="Save again"
      textStyle={{ fontSize: 20 }}
      gradientBegin="#3FE8C9"
      gradientEnd="#01DF74"
     onPressAction={() => navigate('Page1')}
    />
     <GradientButton
         style={styles.grb1}
     
      text="Take a rest"
      textStyle={{ fontSize: 20 }}
      gradientBegin="#3FE8C9"
      gradientEnd="#01DF74"
      onPressAction = {() => exitApp() }
  
    />

       



     </LinearGradient>
   

      </View>
   
    );
  }
}

const styles = StyleSheet.create({
  container: {
  
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF',
    width: '100%',
    height:'100%',
  },
     linearGradient:{

         alignContent:'center',
         position: 'absolute',
width: '100%',
height: '100%',

         },

  p:{
position: 'absolute',
width: wp(100),

left: wp(10),
top: hp(52),
fontSize:40,
color: 'white',

  },
  
  p1:{
position: 'absolute',
width: wp(100),

top: hp(60),

fontSize:25,
color: 'white',
  },
  logo:{
    width:wp(100), 
    height:hp(50),
   
    



  },
 
  grb:{
  
    top: hp('35%'),
      bottom: wp(7),
      height: hp(8),
      width:hp(30),
      top:hp(20),
      left:wp(15)
      },
      grb1:{
  
        top: wp('45%'),
          bottom: wp(7),
          width:hp(30),
          height: hp(8),
          top:hp(22),
          left:wp(15)  

        }
 
});
export default Page4;