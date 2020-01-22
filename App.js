import * as React from 'react';
import { Text, View, StyleSheet,Image, TouchableOpacity, Platform } from 'react-native';
import Constants from 'expo-constants';
import Acceuil from './Acceuil';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page from './Page';
import Cam from './Cam';
import Declaration from './Declaration';
import Galerie from './Galerie';
import {Card} from 'react-native-elements';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const AppStack = createStackNavigator({ Page1: Page1,Page2: Page2,  Page3:Page3, Acceuil:Acceuil, 
  Page4 :Page4, Page: Page ,Cam:Cam,Declaration:Declaration,Galerie:Galerie});

  
export default createAppContainer(
  createSwitchNavigator(
    { 
      Acceuil,
      Page,
      Page1,
      Page2,
      Page3,
      Page4,
      Cam,
      Declaration,
      Galerie,
      

    },
    
    {
      initialRouteName: 'Acceuil',
    }
  )
);