import React, { useRef,useState, useEffect } from 'react';



import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, SelectGroup, useTheme } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { app_name, API, API1, API_VERSION, cipher } from '../_Configuration';

import { StyleSheet,Keyboard, SafeAreaView, TouchableWithoutFeedback, Image, useWindowDimensions, View, DrawerLayoutAndroid, ImageBackground, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { IndexPath, Drawer, DrawerItem, BottomNavigation, BottomNavigationTab, Button, Datepicker, Autocomplete, AutocompleteItem, RadioGroup, Radio, Card, CheckBox, Divider, Layout, TopNavigation, Icon, Input, Text, TopNavigationAction } from '@ui-kitten/components';
import { BallIndicator, BarIndicator, DotIndicator, MaterialIndicator, PacmanIndicator, PulseIndicator, SkypeIndicator, UIActivityIndicator, WaveIndicator,} from 'react-native-indicators';
// import {storeData, getData} from './_AsyncStorage';
import SelectMultiple from '@horizonlime/react-native-select-multiple'


export const  HealthTracker = () => {
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
   
   
    const [hone,sethOne] = React.useState(0);
    const [htwo,sethTwo] = React.useState(0);
    const [hthree,sethThree] = React.useState(0);
    const [hfour,sethFour] = React.useState(0);
    const [hfive,sethFive] = React.useState(0);
    const [hsix,sethSix] = React.useState(0);
    const [hseven,sethSeven] = React.useState(0);
    const [height,sethEight] = React.useState(0);
    const [hnine,sethNine] = React.useState(0);
    const [hten,sethTen] = React.useState(0);
    const [heleven,sethEleven] = React.useState(0);
    const [htwelve,sethTwelve] = React.useState(0);
    const [hcaught,sethCaught] = React.useState(0);
    const [hrespose,sethRespose] = React.useState(2);
   

    const getResults=()=> {
        console.log('claed API');
        var e= this;
        var xdata = {
            sex:0,
            age:0,
            patient_type:0,
            pneumonia:hcaught,
            diabetes:hone,
            copd:htwo,
            asthma:hthree,
            hypertension:hfour,
            other_disease:heleven,
            obesity:hsix,
            cardiovascular:hfive,
            renal_chronic:hseven,
            tobacco:height,
            contact_other_covid:hnine
        };
        API1.post('api/heathhistory',xdata)
        .then(function (response) {
          
          if(response){
            // setPricing(response.data.co);
                console.log("Health traker response", response.data);
                if( response.data==1){
                    sethRespose(1);
                   
    
    
                }else{
                   sethRespose(0);
                }
                
                
            }else{
                console.log("Health screen failed", response.data);
                
            }
        })
        .catch(function (error) {
            console.log("Health screen error", error.message);
          
        });
    }
    
    const selectGroup =()=>{
        if (hcaught==1){
            sethCaught(0);
        }else{
            sethCaught(1);
        }
    }
    
   
    
  return (
      <Layout style={{backgroundColor:'#f2e5fe',height:windowHeight,width:windowWidth}}>
        <View style={{height:50,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Health Tracker</Text>
        </View>

         
                <Card >
                    <Text>Choose your Health Issues:</Text>
                    <ScrollView>
                        
                  
                        <View style={{flex: 1, flexDirection: 'row', marginTop: 5, flexWrap: 'wrap', alignItems: 'flex-start'}}>
                            <TouchableOpacity 
                                onPress={()=>selectGroup()}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                            <View style={{borderRadius:200,width:100,height:75, margin: 1, backgroundColor: (hcaught==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Pneumonia</Text>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(hone==0){sethOne(1);}else{sethOne(0);}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:75, margin: 1, backgroundColor: (hone==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Diabetes</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(htwo==0){sethTwo(1)}else{sethTwo(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:75, margin: 1, backgroundColor: (htwo==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>CODP</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(hthree==0){sethThree(1)}else{sethThree(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:75, margin: 1, backgroundColor: (hthree==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Asthma</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(hfour==0){sethFour(1)}else{sethFour(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:75, margin: 1, backgroundColor: (hfour==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Hypertension</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(hfive==0){sethFive(1)}else{sethFive(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:106,height:75, margin: 1, backgroundColor: (hfive==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Cardiovascular</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{if(hsix==0){sethSix(1)}else{sethSix(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:75, margin: 1, backgroundColor: (hsix==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Obesity</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{if(hseven==0){sethSeven(1)}else{sethSeven(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:75, margin: 1, backgroundColor: (hseven==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Renal Chronic</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{if(height==0){sethEight(1)}else{sethEight(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:50,width:100,height:75, margin: 1, backgroundColor: (height==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Tobacco</Text>
                                </View>
                            </TouchableOpacity>
                            {/* <TouchableOpacity
                                onPress={()=>{if(nine==0){setNine(1)}else{setNine(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:50,width:100,height:75, margin: 1, backgroundColor: (nine==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Dizziness</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{if(ten==0){setTen(1)}else{setTen(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:50,width:100,height:75, margin: 1, backgroundColor: (ten==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Hearing Loss</Text>
                                </View>
                            </TouchableOpacity>					 */}
                        </View>
                    </ScrollView>
                    
                </Card>
                <TouchableWithoutFeedback style={{backgroundColor:'red',borderColor:'red',borderWidth:3}} onPress={()=>{if(hnine==0){sethNine(1)}else{sethNine(0)}}}>
                    <View style={{height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20,}}>
                        <Text>do you know met covid patient:</Text>
                        <Icon style={styles.icon} fill='#8F9BB3'    name={(hnine==1)?'plus-square-outline':'minus-square-outline'}/>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{backgroundColor:'red',borderColor:'red',borderWidth:3}} onPress={()=>{if(hten==0){sethTen(1)}else{sethTen(0)}}}>
                    <View style={{height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20,}}>
                        <Text>Did you get medicine :</Text>
                        <Icon style={styles.icon} fill='#8F9BB3'    name={(hten==1)?'plus-square-outline':'minus-square-outline'}/>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{backgroundColor:'red',borderColor:'red',borderWidth:3}} onPress={()=>{if(heleven==0){sethEleven(1)}else{sethEleven(0)}}}>
                    <View style={{height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20,}}>
                        <Text>Did you fall other disease :</Text>
                        <Icon style={styles.icon} fill='#8F9BB3'    name={(heleven==1)?'plus-square-outline':'minus-square-outline'}/>
                    </View>
                </TouchableWithoutFeedback>
                		
 {(hrespose==0)?<Card style={{height:150, justifyContent: 'center', alignItems: 'center',marginTop:20,backgroundColor:'#54ff7f'}}>
              <Text style={{fontSize:17}}>
              You are in the low risk level for COVID-19
      Please contact your doctor soon
      Stay Safe
              </Text>
      </Card>:(hrespose==1)?<Card style={{height:150, justifyContent: 'center', alignItems: 'center',marginTop:20,backgroundColor:'#ff949b'}}>
              <Text style={{fontSize:17}}>
              You are in the high risk level for COVID-19
      Please contact your doctor soon
      Stay Safe
              </Text>
      </Card>:(hrespose==2)?<View style={{marginTop:50}}><Button onPress={()=>{getResults();}}>Check</Button></View>:null}
      
      <TouchableOpacity onPress={()=>{sethRespose(2);}}>
      <View  style={{height:50,paddingHorizontal:20,backgroundColor:'#e1f7f5',justifyContent:'center',alignItems:'center'}}><Text>Clear</Text></View>
      </TouchableOpacity>
                {/* <SelectMultiple
          items={fruits}
          renderLabel={renderLabel}
          selectedItems={this.state.selectedFruits}
          onSelectionsChange={onSelectionsChange}
          checkboxIcon={<Ionicons name="ios-radio-button-off" size={30} color={grey} />} /> */}

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