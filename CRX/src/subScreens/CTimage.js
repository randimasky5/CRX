
import React, { useState, useEffect } from 'react';


import { Image, View, ImageBackground, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import {   Button, Card, Layout,  Text} from '@ui-kitten/components';

import {storeData, getData} from '../_AsyncStorage';
import { app_name, API, API_VERSION, cipher } from '../_Configuration';

import * as ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import { readDir } from 'react-native-fs';


export default class CTimage extends React.Component {
    state = {
      image:'',image1:"",xrayResponse:'', imagetest:'',respose: 2
        
    };
    windowWidth = Dimensions.get("window").width;
    windowHeight = Dimensions.get("window").height;
    componentDidMount = () => {
         
      
     
    }
   
    getPrice() {
      console.log('news');
      var e= this;
      var xdata = {img:this.state.image1};
      API.post('predic/ct',xdata)
      .then(function (response) {
        
        if(response){
          // setPricing(response.data.co);
              console.log("user screen - pricing - success", response.data);
               e.setState({xrayResponse: response.data});
              //   () => {console.log("this will be fired after setstate complete",e.state.pricing);
              // });
              
          }else{
              console.log("user screen - home - failed", response.data);
              
          }
      })
      .catch(function (error) {
          console.log("user screen - home - error", error.message);
        
      });
    }
   
    

   

  render()  {
    return (
        <ImageBackground style={{backgroundColor:'#fff',height:this.windowHeight,width:this.windowWidth}}>  
            
            <ScrollView >
              <Layout style={{justifyContent:'space-between'}}>
              <View style={{height:50,justifyContent:'center',alignItems:'center',backgroundColor:"blue",}}>      
                <Text style={{fontSize:20,fontWeight:'bold',color:"#fff"}} >Upload your CT Image</Text>
              </View>
                  <View style={{flex:1,flexDirection:'row',}} >
                 
                    <Card style={(!this.state.image)?{height:this.windowHeight-50,width:this.windowWidth,justifyContent: 'center',alignItems: 'center',}:{width:this.windowWidth,justifyContent: 'center',alignItems: 'center',}}>
                      
                      <View style={{borderWidth:2,borderColor:"blue",borderStyle:'dashed',paddingHorizontal:100,paddingVertical:30}}>
                      <TouchableOpacity  onPress={()=>{
                          ImagePicker.launchImageLibrary(
                            
                            {
                              mediaType: 'photo',
                              includeBase64: true,
                              maxHeight: 1024,
                              maxWidth: 1024,
                            },
                            (response) => {
                              if(response){
                                if(!!response.didCancel){
                                  console.log("response");
                                  // this.setState({image:'data:' + response.assets[0].type + ';base64,' + response.assets[0].base64,image1:"'''"  + response.assets[0].base64 +"'''"});                  
                                  // console.log('data:' + response.assets[0].type + ';base64,' + response.assets[0].base64);
                                }else{
                                this.setState({image:'data:' + response.assets[0].type + ';base64,' + response.assets[0].base64,image1:response.assets[0].base64 });                  
                                  console.log(response);
                                }
                                // console.log(response);
                              }
                            },
                          );
                        }}>
                          <Image style={(this.state.image)? {width:this.windowWidth, height: this.windowHeight*0.35,borderRadius: 10,marginLeft:0,marginRight:0}:{width:this.windowWidth/3,height:this.windowHeight/8}} source={(this.state.image) ? { uri: this.state.image }:require('./up.jpg')}/>
                     
                      {(!this.state.image)? <Text style={{fontSize:20}}>Browse Image</Text>:null}
                      {(!this.state.image)?<Button onPress={()=>{
                          ImagePicker.launchImageLibrary(
                            
                            {
                              mediaType: 'photo',
                              includeBase64: true,
                              maxHeight: 1024,
                              maxWidth: 1024,
                            },
                            (response) => {
                              if(response){
                                if(!!response.didCancel){
                                  console.log("response");
                                  // this.setState({image:'data:' + response.assets[0].type + ';base64,' + response.assets[0].base64,image1:"'''"  + response.assets[0].base64 +"'''"});                  
                                  // console.log('data:' + response.assets[0].type + ';base64,' + response.assets[0].base64);
                                }else{
                                this.setState({image:'data:' + response.assets[0].type + ';base64,' + response.assets[0].base64,image1:response.assets[0].base64 });                  
                                  console.log(response);
                                }
                                // console.log(response);
                              }
                            },
                          );
                        }}style={{margin:2}} size='tiny'>Upload</Button>:null}
                      </TouchableOpacity>
                      </View>
                      
                  
                      </Card>
                      
                    </View>
                    {(this.state.xrayResponse== "Non Covid-19")?<Card style={{height:150, justifyContent: 'center', alignItems: 'center',marginTop:20,backgroundColor:'green'}}>
              <Text style={{fontSize:17}}>
             Negative
             Please contact your doctor soon
      Stay Safe
              </Text>
      </Card>:(this.state.xrayResponse== "Covid-19")?<Card style={{height:150, justifyContent: 'center', alignItems: 'center',marginTop:20,backgroundColor:'yellow'}}>
              <Text style={{fontSize:17}}>
               COVID-19
      Please contact your doctor soon
      Stay Safe
              </Text>
      </Card>:(this.state.respose==2)?<View style={{height:150}}></View>:null}
                    {(this.state.xrayResponse)?<View>
                    <Text></Text></View>:<View style={{height:20,justifyContent:'center',alignItems:'center'}}><Text></Text></View>}
                     {(this.state.image)? <View>
                      <Button
                     onPress={()=>{this.getPrice()}}>Check</Button>
                     <TouchableOpacity onPress={()=>{
                                          this.setState({image:'',xrayResponse:''});
                                          }}>
                        <View style={{height:50,justifyContent:'center',alignItems:'center'}}><Text>Clear Image</Text></View>
                      </TouchableOpacity></View>:<View style={{height:100,justifyContent:'center',alignItems:'center'}}><Text></Text></View>
                      }
                     
                     </Layout>
              </ScrollView>    
          
     </ImageBackground>
    );
  }

}
