import React, { useState, useEffect } from 'react';


import { Image, View, ImageBackground, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import {   Button, Card, Input, Layout,  Text,RadioGroup, Radio,} from '@ui-kitten/components';

import {storeData, getData} from '../_AsyncStorage';
import { app_name, API, API_VERSION, cipher } from '../_Configuration';

import * as ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import { readDir } from 'react-native-fs';



export default class XrayResults extends React.Component {
    state = {
        gender:0 , operation : 0
          
      };
      windowWidth = Dimensions.get("window").width;
      windowHeight = Dimensions.get("window").height;
    componentDidMount = () => {
        console.log(this.props.navigation);
     
    
   }
    render()  {
      return (
  <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#d0c5fa',height:this.windowHeight}}>
  


  <Card style={{borderRadius: 10, marginTop:20, marginHorizontal:20,height:this.windowWidth,backgroundColor:'#f4e6fc'}}>
                    <Text>Choose your gender..</Text>
                    <View style={{flex: 1, flexDirection: 'row', marginTop: 20}}>
                        <View style={(this.state.gender == 0) ? {height: 100, width:  this.windowWidth/2 -45, borderWidth: 1, borderColor: '#A30FC1'}:{height: 100, width:  this.windowWidth/2 -45}}>
                            <TouchableOpacity onPress={() => {this.setState({gender:0})}}>
                            <Image source={require('../Images/man.png')}
                            style={{width: this.windowWidth/2 -55, height: 85, resizeMode: 'contain', margin:5 }}/>
                            </TouchableOpacity>
                        </View>
                        <View style={(this.state.gender == 1) ? {height: 100, width:  this.windowWidth/2 -45, borderWidth: 1, borderColor: '#A30FC1'}:{height: 100, width:  this.windowWidth/2 -45}}>
                            <TouchableOpacity onPress={() => {this.setState({gender:1})}}>
                            <Image source={require('../Images/woman.png')}
                            style={{width: this.windowWidth/2 -55, height: 85, resizeMode: 'contain', margin:5 }}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <RadioGroup
                    
                        selectedIndex={this.state.gender}
                        onChange={index => this.setState({gender:index})}
                        style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 120}}>
                        <Radio>Male</Radio>
                        <Radio>Female</Radio>
                      </RadioGroup>
<View style={{marginVertical:40}}><Text style={{marginVertical:20}}>Choose your Age..</Text>

<Input></Input>
</View>
                     
                </Card>





  {/* <Button onPress={()=>{this.props.navigation.navigate("main",{uid: 1, navigation:this.props.navigation});}}>Next</Button> */}
  <TouchableOpacity onPress={()=>{
                                    this.props.navigation.navigate("main",{uid: 1, navigation:this.props.navigation});      
                                          }}>
                        <View style={{height:50,width:200,marginVertical:20,justifyContent:'center',alignItems:'center',backgroundColor:'#7f00c7'}}><Text style={{color:'#fff'}}>Next</Text></View>
                      </TouchableOpacity>
  </View>
  
      );
  
  }}