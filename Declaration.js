import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Button, Image,ImageBackground,Picker, TouchableOpacity } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import Icons from 'react-native-vector-icons/MaterialIcons';


import * as firebase from 'firebase';
import DropdownMenu from 'react-native-dropdown-menu';


 class Declaration  extends Component {
  
 
  render() {

    const { navigation } = this.props;
   
    return (
     
      <View style={styles.container}>
          <LinearGradient  
   style={styles.linearGradient}
     colors={['#00DAF2','#00F4A2']}>
      <TouchableOpacity onPress={() =>{this.props.navigation.navigate('Page1')}}>
    <Icons name={'arrow-back'} size={30} color='#fff'  style={{marginLeft: '3%'}} />
    </TouchableOpacity>
          <View style={styles.div}>
<TouchableOpacity   onPress={() => {
  this.props.navigation.navigate('Cam')
  }}>
    <Image style={styles.logo1} source={require('./assets/camera.png')} resizeMode="stretch"/>
                    <Text style={styles.buttonText}>Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
  this.props.navigation.navigate('Galerie')
  }}>
     <Image style={styles.logo2} source={require('./assets/galerie.png')} resizeMode="stretch"/>
                    <Text style={styles.buttonText}>Galerie</Text>
                </TouchableOpacity>

     
  </View>
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
  div: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: wp(5),
  right: wp(5),
    top:wp(5),
    bottom:wp(5),
    borderRadius: 30,
    width: wp(90),
    height:hp(75),
    top:hp(12),
  
    backgroundColor: 'rgba(238, 247, 245, 0.94)',
    },
    linearGradient:{

        alignContent:'center',
        position: 'absolute',
width: '100%',
height: '100%',

        },
       
        logo1:{
        
          width:wp(75),
          height:hp(25),
          top:wp(5)
  
        },
        logo2:{
     
          width:wp(75),
          height:hp(25),
          top:wp(5)
  
        },

        buttonText:{
          left:wp(30),
          fontWeight:'bold',
          
        }
});
export default Declaration;