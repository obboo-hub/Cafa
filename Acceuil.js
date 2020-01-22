import React from 'react';
import { Text, TextInput, View, StyleSheet, Button, Image,ImageBackground,Picker,TouchableOpacity
  } from 'react-native'; 
import GradientButton from 'react-native-gradient-buttons';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import { RadioButton } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

 class Acceuil extends React.Component {

  render() {
    
     const {navigate} = this.props.navigation;
    return (
     
      <View style={styles.container}>
      


<LinearGradient  
   style={styles.linearGradient}
     colors={['#00DAF2','#00F4A2']}>
  <Image style={styles.logo} source={require('./assets/im1.png')}resizeMode="stretch"/>
<Text style={styles.p}> Welcome To CAFA </Text>

         <GradientButton
         style={styles.grb}

      text="Next"
      textStyle={{fontSize: 20}}
      gradientBegin="#3FE8C9"
      gradientEnd="#01DF74"
      onPressAction={() => navigate('Page')} />
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
    
  p:{
position: 'absolute',
width: wp(100),

left: hp(2),
top:hp(70),
fontSize:40,
color: 'white',

  },


  grb:{
    top: hp(80),
  bottom: hp(20),
  


      },
  linearGradient:{
alignContent:'center',
position: 'absolute',
width: '100%',
height: '100%',
         
  },
  logo:{
    position: 'absolute',
    width:wp(100),
    height:hp(60)

  
  }
});
export default Acceuil;