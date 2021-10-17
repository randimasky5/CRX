import React, { useState, useEffect } from 'react';
import { SafeAreaView, Image, useWindowDimensions, View, ImageBackground } from 'react-native';
import { Button, Layout, Icon, Text, useTheme } from '@ui-kitten/components';
import { /*BallIndicator, BarIndicator, DotIndicator, */ MaterialIndicator/*, PacmanIndicator, PulseIndicator, SkypeIndicator, UIActivityIndicator, WaveIndicator,*/} from 'react-native-indicators';
//import {storeData, getData} from './_AsyncStorage';
//import { app_name, API, API_VERSION, ThemeContext, cipher } from './_Configuration';
//import CryptoJS from "react-native-crypto-js";
//unused imports removed

export const SplashScreen = ({ navigation }) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const [init, setInit] = React.useState(0);
  

 //navigation.reset({index: 0, routes: [{ name: 'register' }],});
 useEffect(()=>{
        // }
        if(init == 0){
         
            console.log('print --');
                     setInit(2);
            }
           
              setTimeout( ()=>{navigation.reset({index: 0, routes: [{ name: 'results' }], navigation:navigation});},3000);

    }, init);
   

  return (
    <SafeAreaView style={{ flex: 1 }}>
    {/* <ImageBackground source={require('./Images/back5.jpg')} style={{width: windowWidth, height: windowHeight}}> */}
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        {/* <Image source={require('./Images/3.png')} style={{width: windowWidth/2, height: windowHeight/3, resizeMode: 'contain' }}/> */}
        <View style={{}}><Image style={{width:windowWidth,}} source={require('./Images/logo.png')}/></View>
        <View style={{height: 50, marginTop:10}}>
        
        <MaterialIndicator size={30} color="white"/>
        {/* <Button onPress={()=>{navigation.reset({index: 0, routes: [{ name: 'results' }], navigation:navigation});}}>Press</Button> */}
        </View>
      </Layout>
    {/* </ImageBackground> */}
    </SafeAreaView>
  );
};
