import React, { Component } from 'react';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import { Camera} from "expo-camera";
import * as Permissions  from "expo-permissions"
import { RNS3 } from "react-native-aws3";

import * as firebase from 'firebase';


// Initialize Firebase
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


class Cam extends Component {
  state = {
    switchValue: false,
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    imageuri: "",
    url: "",
      img64:null,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  cameraChange = () => {
    this.setState({
      imageuri: "",
    
      url: "",
      type:
        this.state.type === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
    });
  };

  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      if (photo) {
        this.setState({ imageuri: photo.uri });
         this.setState({ img64: photo.base64 });
      }
    }
  };

  upload_button = () => {
    console.log(this.state.imageuri);
    this.upload_firebase(this.state.imageuri,Date.now())
      .then(()=>{
        Alert.alert("Success!");
        this.props.navigation.navigate('Page2'); 
      }).catch((error)=>{
        Alert.alert("Error:"+error);
      });
  }

  upload_firebase = async (uri,imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref= firebase.storage().ref().child("image/"+imageName);
    return ref.put(blob);
  }

  ////////////////////////// UPLOAD CODE! //////////////////////////

  

  render() {
    const { hasCameraPermission } = this.state;
    const {navigate} = this.props.navigation;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return (
        <View>
          <Text>No access to camera</Text>
        </View>
      );
    } else {

      return (
        
        <View style={styles.container}>
          
          <LinearGradient  
   style={styles.linearGradient}
     colors={['#00DAF2','#00F4A2']}>
      <TouchableOpacity onPress={() =>{this.props.navigation.navigate('Declaration')}}>
    <Icons name={'arrow-back'} size={30} color='#fff'  style={{marginLeft: '3%'}} />
</TouchableOpacity>
          <View style={styles.div}>
          
            <Text  style={styles.text}>Show camera</Text>
            <Switch
              onValueChange={value => {
                this.setState({ switchValue: value });
              }}
              value={this.state.switchValue}
              style={styles.switch}
            />
          </View>
          {this.state.switchValue ? (
            <View style={styles.cameraview}>
              {this.state.imageuri != "" ? (
                <Image
                  source={{
                    uri: this.state.imageuri
                  }}
                  style={styles.uploadedImage}
                  resizeMode="contain"
                />
              ) : (
                <Camera
                  style={styles.camera}
                  type={this.state.type}
                  ref={ref => {
                    this.camera = ref;
                  }}
                >
                  <View style={styles.camerabuttonview}>
                    <TouchableOpacity
                      style={styles.cameraFlip}
                      onPress={this.cameraChange}
                    >
                      <Text
                        style={{
                          fontSize: 18,
                          marginBottom: 10,
                          color: "white"
                        }}
                      >
                        Flip
                      </Text>
                    </TouchableOpacity>
                  </View>
                </Camera>
              )}
            </View>
          ) : (
            <View style={styles.cameraview}>
              {this.state.url != "" ? (
                <Text>Uploaded url : {this.state.url}</Text>
              ) : null}
              <Text>Camera off</Text>
            </View>
          )}
          {this.state.switchValue ? (
            <View style={styles.buttonsView}>
              {this.state.imageuri == "" ? (
                <View style={styles.captureButtonView}>
                  <TouchableOpacity
                    style={styles.cameraB}
                    onPress={this.snap}
                  >
                    <Text
                      style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                    >
                      Capture
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : null}
              <View style={styles.captureButtonView}>
                <TouchableOpacity
                  style={styles.cameraButtons}
                  onPress={this.upload_button}
                >
                  <Text
                    style={{ fontSize: 18, marginBottom: 10, color: "white" }}
                  >
                    Upload
                  </Text>
                </TouchableOpacity>
                
              </View>
              
            </View>
           
            
          ) : null} 
          </LinearGradient>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
 
  container: {
  
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF',
    width: wp(100),
    height:hp(100),
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
    height:hp(80),
    top:hp(12),
  
    backgroundColor: 'rgba(238, 247, 245, 0.94)',
    },
    linearGradient:{

        alignContent:'center',
        position: 'absolute',
width: wp(100),
height: hp(100),

        },

  switchview: {
    marginTop: hp(20),
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 5,
   
  },
  switch: {
    position:'absolute',
    padding: 5,
    top:hp(10)
  },
  cameraview: {
    height: hp(50),
    width: wp(80),
    top:hp(26),
    left:wp(10),
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  camera: {
    height: hp(50),
    width: wp(80),
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    top:hp(0)
  },
  camerabuttonview: {
    height: hp(50),
    backgroundColor: "transparent"
  },
  cameraB:{
   
    backgroundColor:"#3FE8C9",
    
    padding: 10,
    borderRadius: 5,
    margin: 5,
top:hp(7),


  },
  cameraFlip:{
   
    backgroundColor:"#3FE8C9",
   
    padding: 10,
    borderRadius: 5,
    margin: 5,
top:hp(0),
  },
  cameraButtons: {
    backgroundColor:"#3FE8C9",
    
    padding: 10,
    borderRadius: 5,
    margin: 5,
top:hp(7),
  },
  captureButtonView: {
    height: hp(30),
    top:hp(20)
  },
  buttonsView: {
    height: hp(80),
    width: wp(80),
    flexDirection: "row",
    justifyContent: "center"
  },
  uploadedImage: {
    position:'absolute',
    height: hp(50),
    width: wp(90),
  
    top:hp(0)

  },
  text:{
    position:'absolute',
    top:hp(5)

  }
});
export default Cam;