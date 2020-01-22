import React from 'react';
import { Text, TextInput, View, StyleSheet, Button, Image,ImageBackground,Picker,TouchableOpacity
  } from 'react-native'; 
  import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import GradientButton from 'react-native-gradient-buttons';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import { RadioButton } from 'react-native-paper';
 class Page extends React.Component {

  render() {
    
     const {navigate} = this.props.navigation;
    return (
     
      <View style={styles.container}>
      


<LinearGradient  
   style={styles.linearGradient}
     colors={['#00DAF2','#00F4A2']}>
 <Image style={styles.logo} source={require('./assets/im2.png')}resizeMode="stretch" />
<Text style={styles.p}>You will help create a safe  weboshphere </Text>
         <GradientButton
         style={styles.grb}
     
      text="Indeed"
      textStyle={{ fontSize: 20 }}
      gradientBegin="#3FE8C9"
      gradientEnd="#01DF74"
    
  
      onPressAction={() => navigate('Page1')}
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
          
          left: hp(2),
          top:hp(60),
          fontSize:35,
          color: 'white',
          
            },
  logo:{
    position: 'absolute',
    width:wp(100),
    height:hp(60)

  },

  grb:{
    top: hp(80),
  bottom: hp(20),
  


      },

 
});
export default Page;