import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Button, Image,ImageBackground,Picker, TouchableOpacity } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';

import Icons from 'react-native-vector-icons/MaterialIcons';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



import * as firebase from 'firebase';
import DropdownMenu from 'react-native-dropdown-menu';

const config = {
  apiKey: 'AIzaSyBz01LRGY-LEqmkp_gqyAy8I1jAbGqt23Y',
  authDomain: 'test1909-5eca8.firebaseapp.com',
  databaseURL: 'https://test1909-5eca8.firebaseio.com',
  projectId: 'test1909-5eca8',
  storageBucket: 'test1909-5eca8.appspot.com',
  messagingSenderId: '902654891927',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
 class Page2 extends Component {
  
 
  state={
  type:'',
  name:'',
  url:'',
  degre:''

}
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
 

 <Text style={styles.paragraph1}> Name of website </Text>
            <TextInput style={styles.input1}  placeholder='http://www.somehate.com/somepage'  value={this.state.name} onChangeText={(value)=>this.setState({ name:value })}/>
            <Text style={styles.paragraph2}> URL of website </Text>
            <TextInput style={styles.input2}  placeholder='Some hate' value={this.state.url} onChangeText={(value)=>this.setState({ url:value })} />
                 <Text style={styles.paragraph3}> Degré de gravité  </Text>
 <Picker  style={styles.pk2}
  mode={'dropdown'}
  selectedValue={this.state.degre}
    onValueChange={(value)=>this.setState({ degre:value })}
  
  >

  <Picker.Item label="Haut" value="Haut" />
  <Picker.Item label="Moyen" value="Moyen" />
   <Picker.Item label="Bas" value="Bas" />
 
</Picker>

         <GradientButton
         style={styles.grb}
     
      text="Next"
      textStyle={{ fontSize: 20 }}
      gradientBegin="#3FE8C9"
      gradientEnd="#01DF74"
      gradientDirection="diagonal"
      height={40}
      width={150}
      top={750}
  
      onPressAction={() =>{
        this.props.navigation.navigate('Page3', {
        
              name: this.state.name,
              url:this.state.url,
              degre:this.state.degre
           });
      }}
    />



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
     linearGradient:{

         alignContent:'center',
         position: 'absolute',
width: '100%',
height: '100%',

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

      grb:{
        position: 'absolute',
        top: '85%',
        },

 paragraph1: {
    position: 'absolute',
    color: '#3FE8C9',
    left:hp(5),
    top:hp(5),

 
  
  
  },
   paragraph2: {
     position: 'absolute',
    color: '#3FE8C9',
    left: hp (5),
    top:hp(15),
  
  
  },
   paragraph3: {
     position: 'absolute',
    color: '#3FE8C9',
    left:hp(5),
    top:hp(30),
  
  
  },
input1: {
   position: 'absolute',
    textAlign: 'center',
    width:wp(70),
  
   top:hp(10),
    backgroundColor: '#FFFFFF',
    
    
  },
  input2: {
     position: 'absolute',
    textAlign: 'center',
    width:wp(70),
 
    top:hp(20),
 
    backgroundColor: '#FFFFFF',
  },
  pk2:{
     borderWidth: 30,
    borderColor: '#9E9E9E',
    width:wp(70),
    top:hp(5)

  },

    grb:{
  
      top: hp('25%'),
        bottom: wp(7)
        }
 
});
export default Page2;