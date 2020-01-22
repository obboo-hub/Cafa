import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Button, Image,ImageBackground,Picker, TouchableOpacity,Slider } from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import * as firebase from 'firebase';
import Icons from 'react-native-vector-icons/MaterialIcons';
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
export default class Page3 extends Component {
state={
  description:'',
  name:'',
  url:'',
  degre:'',
  type:'',
 

 

}
  
 render() {
  

  //Ajoute ceci 
// const { navigation } = this.props;

 const { navigation } = this.props;
//Change les variables passées içi : var1 =navigation.getParam('otherParam', 'default value')
       return (
      <View style={styles.container}>
      



<LinearGradient  
   style={styles.linearGradient}
     colors={['#00DAF2','#00F4A2']}>
      <TouchableOpacity onPress={() =>{this.props.navigation.navigate('Declaration')}}>
    <Icons name={'arrow-back'} size={30} color='#fff'  style={{marginLeft: '3%'}} />
</TouchableOpacity>
<View style={styles.div}>

 <Text style={styles.paragraph1}> Hate snaps  </Text>
            <TextInput style={styles.input1}  placeholder='Lorem ipsum dolor sit amet consectetur adipiscing elit.In vulputate sociis ullamcorper faucibus cursus libero posuere.Ullamcorper quam cursus duis facilisis ipsum enim, viverra pretium egestas.Nec, metus quis arcu aliquam lorem. Nascetur gravida metus,id duis tincidunt.' value={this.state.description} onChangeText={(value)=>this.setState({ description:value })}/>
        
           
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
         
                firebase 
                  .database()
                  .ref('users').push(
                  {
      
          
          name: navigation.getParam('name', 'default value'),
         
          url: navigation.getParam('url', 'default value'),
           degre: navigation.getParam('degre', 'default value'),
           
              description:this.state.description,
              
                  
                  })
                  .then(() => {
                    console.log('INSERTED !');
                  })
                  .catch(error => {
                    console.log(error);
                  });

                  alert("votre donnee est bien inseree"),
                   this.props.navigation.navigate('Page4')
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

      
            grb:{
  
              top: hp('6%'),
                bottom: wp(7)
                },
 
 paragraph1: {
    color: '#3FE8C9',
    fontSize:30,
    top:hp(1),
 
  
  
 },
input1: {
    textAlign: 'center',
    width:wp(70),
    height: hp(45),
    borderRadius: 5,
    top:hp(4),
   
    backgroundColor: '#FFFFFF',
    
    },     div: {
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
});