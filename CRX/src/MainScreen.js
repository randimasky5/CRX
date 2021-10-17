import React, { useRef,useState, useEffect } from 'react';



import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, useTheme } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import {AppNavigator} from './_Navigation';
//const { Navigator, Screen } = createStackNavigator();
import { StyleSheet,Keyboard, SafeAreaView, TouchableWithoutFeedback, Image, useWindowDimensions, View, DrawerLayoutAndroid, ImageBackground, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { IndexPath, Drawer, DrawerItem, BottomNavigation, BottomNavigationTab, Button, Datepicker, Autocomplete, AutocompleteItem, RadioGroup, Radio, Card, CheckBox, Divider, Layout, TopNavigation, Icon, Input, Text, TopNavigationAction } from '@ui-kitten/components';
import { BallIndicator, BarIndicator, DotIndicator, MaterialIndicator, PacmanIndicator, PulseIndicator, SkypeIndicator, UIActivityIndicator, WaveIndicator,} from 'react-native-indicators';
// import {storeData, getData} from './_AsyncStorage';



export const  MainScreen = ({navigation}) => {
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const Uname ='Randima'
  return (
      <Layout style={{backgroundColor:'#f2e5fe',height:windowHeight,width:windowWidth}}>
          
          <Card  style={{ }}>
            <View style={{flexDirection:'row',alignItems:'center',width:windowWidth}}>
                <Icon style={styles.icon} fill='#8F9BB3'    name='menu'/>
                <Text category='h6'style={{marginLeft:10}}>Covid -Pneumonia Tracker</Text>
            </View>
        </Card>
           <Card style={{borderRadius:10,backgroundColor:'#787fde',margin:5,height:200}}>
               <Text category='h1' style={{fontWeight:'bold',color:'#fff'}}>Hello {Uname}!</Text>
               <Text category='h5'style={{color:'#fff'}}>Let's Get Start</Text>
           </Card>
           <Card onPress={()=>{ console.log('press');navigation.navigate("full",{uid: 1,});}}style={{width:windowWidth-10,height:70,borderRadius:10 ,margin:5,justifyContent:'center',alignItems:'center',backgroundColor:'#8674e3'}}>
               <Text style={styles.text}>Full Checkup</Text>
           </Card>
          <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
           
                <View>
                    <Card onPress={()=>{ console.log('press');navigation.navigate("symptom",{uid: 1,});}} style={{width:windowWidth/2-10,height:100,borderRadius:10,backgroundColor:'#8674e3' }}>
                        <Text style={styles.text}>Symptom Tracker</Text>
                    </Card>
                </View>
                <TouchableOpacity ></TouchableOpacity>
                <View>
                    <Card  onPress={()=>{ console.log('press');navigation.navigate("helth",{uid: 1,});}} style={{width:windowWidth/2-10,height:100 ,borderRadius:10,backgroundColor:'#8674e3'}}>
                        <Text style={styles.text}>Health History Tracker</Text>
                    </Card>
                </View>
           </View>
           <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
                <View>
                    <Card  onPress={()=>{ console.log('press');navigation.navigate("breathtime",{uid: 1,});}} style={{width:windowWidth/2-10,height:100 ,borderRadius:10,backgroundColor:'#8674e3' }}>
                        <Text style={styles.text}>Breathing Analysis</Text>
                    </Card>
                </View>
                <View>
                    <Card onPress={()=>{ console.log('press');navigation.navigate("ctimage",{uid: 1,});}} style={{width:windowWidth/2-10,height:100,borderRadius:10,backgroundColor:'#8674e3' }}>
                        <Text style={styles.text}>CT Image Analysis</Text>
                    </Card>
                </View>
           </View>
           <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
                <View>
                    <Card onPress={()=>{ console.log('press');navigation.navigate("xray",{uid: 1,});}} style={{width:windowWidth/2-10 ,height:100 ,borderRadius:10,backgroundColor:'#8674e3'}}>
                        <Text style={styles.text}>Xray Image Analysis</Text>
                    </Card>
                </View>
                <View>
                    <Card style={{width:windowWidth/2-10,height:100 ,borderRadius:10,backgroundColor:'#8674e3'}}>
                        <Text style={styles.text}>Report View</Text>
                    </Card>
                </View>
           </View>
           <Card onPress={()=>{ console.log('press');navigation.navigate("mail",{uid: 1,});}} style={{width:windowWidth-10,height:70,borderRadius:10 ,margin:5,backgroundColor:'#8674e3'}}>
               <Text style={styles.text}>Doctor Recormendation</Text>
           </Card>
      </Layout>
   
  );
}

const styles = StyleSheet.create({
    text: {
      color: "white",
      fontWeight:'bold'
      
    },
    icon:{
        height:20, width:20
    }
  });