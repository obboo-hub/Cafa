import * as React from 'react';
import { Button, Image, View,TouchableOpacity ,StyleSheet, Alert,Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as firebase from 'firebase';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
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

export default class Galerie extends React.Component {
  state = {
    image: null,
  };
  upload_button = () => {
    console.log(this.state.image);
    this.upload_firebase(this.state.image,Date.now())
      .then(()=>{
        Alert.alert("Success!");
        this.props.navigation.navigate('Page2'); 
      }).catch((error)=>{
        Alert.alert("Error:veuillez selectionner une photo  ");
      });
  }

  upload_firebase = async (uri,imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref= firebase.storage().ref().child("image/"+imageName);
    return ref.put(blob);
  }

  render() {
    let { image } = this.state;
    const {navigate} = this.props.navigation;

    return (

        <View style={styles.container}>
     <LinearGradient  
   style={styles.linearGradient}
     colors={['#00DAF2','#00F4A2']}>
      <TouchableOpacity style={styles.t} onPress={() =>{this.props.navigation.navigate('Declaration')}}>
    <Icons name={'arrow-back'} size={30} color='#fff'  style={{marginLeft: '3%'}} />
</TouchableOpacity>
    <View style={styles.div}>
      <TouchableOpacity   onPress={this._pickImage}  style={styles.t1}>
      <Image style={styles.logo1} source={require('./assets/select.png')} resizeMode="stretch"/>
      <Text style={styles.buttonText}>Select photo</Text>
      
      </TouchableOpacity>
    
     
        {image &&
          <Image source={{ uri: image }} style={{ width: wp(80), height: hp(50) }} />}
  <TouchableOpacity    onPress={this.upload_button}  style={styles.t2}>
  <Image style={styles.logo2} source={require('./assets/Upload.png')} resizeMode="stretch"/>
      
      </TouchableOpacity>
        </View>
        </LinearGradient>
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
    console.log('hi');
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
    
  };
 
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
    uploadedImage: {
        height: hp(80),
        width: wp(80),
        padding: 10,
        top:hp(20),
        position:'absolute',

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
        top:hp(10),
      
        backgroundColor: 'rgba(238, 247, 245, 0.94)',
        },
        linearGradient:{
    
            alignContent:'center',
            position: 'absolute',
    width: wp(100),
    height:hp(100),
    
            },
            t1:{
              position: 'absolute',
              width: wp("80%"),
              left: wp('10%'),
              top: hp('10%'),
           
            },
            t2:{
              position: 'absolute',
              width: wp("80%"),
              left: wp('10%'),
              top: hp('40%'),

            },
            logo1:{
              
        left:wp(20),
              width:wp(40),
              height:hp(20),
              top:wp(1)
      
            },

            logo2:{
              left:wp(20),
    
              width:wp(30),
              height:hp(10),
              top:wp(3)
      
            },
            buttonText:{
              left:wp(28),
              fontWeight:'bold',
              
            }
            ,   t:{
              top:hp(3)
            }
});
