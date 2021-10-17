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


export const  SymptomTracker = () => {
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
   
    const [passion,setPassion] = React.useState([    ]);
    const [selectedFruits,setSelectedFruits] = React.useState([    ]);
    const [one,setOne] = React.useState(0);
    const [two,setTwo] = React.useState(0);
    const [three,setThree] = React.useState(0);
    const [four,setFour] = React.useState(0);
    const [five,setFive] = React.useState(0);
    const [six,setSix] = React.useState(0);
    const [seven,setSeven] = React.useState(0);
    const [eight,setEight] = React.useState(0);
    const [nine,setNine] = React.useState(0);
    const [ten,setTen] = React.useState(0);
    const [eleven,setEleven] = React.useState(0);
    const [caught,setCaught] = React.useState(0);
    const [twelve,setTwelve] = React.useState(0);
    const [respose,setRespose] = React.useState(2);
    const [stresults,setStresults] = React.useState("");

   
    let dry_c = (caught==0)?'':'Dry Caough ';
    let Sore_t = (one==0)?'': '/Sore Thoat ';
    let runn_n = (two==0)?'': '/Running Nose ';
    let fever = (three==0)?'': '/Fever ';
    let breath_p = (four==0)?'': '/Breathing Issues ';
    let fatigue = (five==0)?'': '/Fatigue ';
    let headache = (six==0)?'': '/Headache ';
    let drowsines = (seven==0)?'': '/droesiness ';
    let chest_p = (eight==0)?'': '/Chest pain ';
    let stroke = (nine==0)?'': '/Stroke ';
    let appetide = (ten==0)?'': '/chnage in appetied ';
    let loss_s = (eleven==0)?'': '/Loss smell ';
    
      
    console.log('Patient Symptoms '+dry_c+ Sore_t +runn_n+fever+breath_p+fatigue+headache+drowsines+chest_p+stroke+appetide+loss_s);
    const removeitem =(name)=>{
        var value = name
       console.log(passion + "   "+value)
       var arr = Array.from (passion)
       console.log(arr + name)
       arr = arr.filter(function(item) {
       return item !== value
       })
       let x = arr
       setPassion ([...x])
       console.log(passion +   "  ---> after")
       }
       const selectionHandler=(te)=>{ 

if (passion.includes(te)){
    alert("All Ready added")
}else {
    setPassion((sp) => {
            return [
                te,...sp
            ]
        });
}}
const selectGroup =()=>{
if (caught==1){
setCaught(0);
}else{
    setCaught(1);
}
 }
 const getRiskl=()=> {
    console.log('news');
    var e= this;
    var xdata = {
        


        age :"28",
        gender :"1",
        body_temperature :"102",
        Dry_Cough :caught,
        sour_throat :one,
        weakness :five,
        breathing_problem :four,
        drowsiness :seven,
        pain_in_chest:eight,
        stroke_or_reduced_immunity:nine,
        symptoms_progressed:twelve,
        change_appetide:ten,
        Loss_smell :eleven


    };
    API1.post('api/RiskLevel',xdata)
    .then(function (response) {
      
      if(response){
        // setPricing(response.data.co);
            console.log("user screen - pricing - success", response.data);
            if( response.data==1){
                // setRespose();
               console.log(response.data);


            }else{
               setRespose(0);
               console.log(response.data);
            }
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

 const getResults=()=> {
    console.log('news');
    var e= this;
    var xdata = {
        breathing_problem:four,
        Fever:three,
        dry_cough:caught,
        sore_throat:one,
        running_nose:two,
        headache:six,
        fatigue:five
    };
    API1.post('api/covid',xdata)
    .then(function (response) {
      
      if(response){
        // setPricing(response.data.co);
            console.log("user screen - pricing - success", response.data);
            if( response.data==1){
                setRespose(1);
                getRiskl();


            }else{
               setRespose(0);
            }
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




    const renderLabel = (label, style) => {
        return (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={{width: 42, height: 42}} source={{uri: 'https://dummyimage.com/100x100/52c25a/fff&text=S'}} />
            <View style={{marginLeft: 10}}>
              <Text style={style}>{label}</Text>
            </View>
          </View>
        )
      }
   const onSelectionsChange = (selectedFruits) => {
        // selectedFruits is array of { label, value }
        setSelectedFruits({ selectedFruits })
      }
    
  return (
      <Layout style={{backgroundColor:'#f2e5fe',height:windowHeight,width:windowWidth,backgroundColor:'white'}}>
        <View style={{height:50,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Symptom Tracker</Text>
        </View>

         {/* <Card style={{}}>
                    <ScrollView>
                        <View >
                            <View style={{flex: 1, flexDirection: 'row', marginTop: 5, flexWrap: 'wrap', alignItems: 'flex-start'}}>
                                    {passion.map((item, index) => {
                                        return (
                                        <View style={{borderRadius: 4, margin: 2, backgroundColor: '#3366FF'}}>
                                            <TouchableOpacity index={index} onPress={removeitem.bind(this, item)} style={{margin:2,flexDirection:"row",marginHorizontal:20,justifyContent:'space-between'}}>
                                                <Text category='c1' style={{marginVertical: 2, marginHorizontal:2 , color: 'white'}}>{item}</Text>
                                            </TouchableOpacity>
                                        </View> )
                                    })}
                            </View>
                        </View>
                    </ScrollView>
                </Card> */}
                <Card >
                    <Text>Choose your symptoms:</Text>
                    <ScrollView>
                        {/* <View style={{flex: 1, flexDirection: 'row', marginTop: 5, flexWrap: 'wrap', alignItems: 'center',justifyContent:'center'}}>
                                {
                                    message.map((item, index)=> {
                                        return(<View style={{borderRadius:200,width:100,height:100, margin: 5, backgroundColor: 'pink',justifyContent:'center',alignItems: 'center'}}>
                                            <TouchableOpacity index={index} onPress={selectionHandler.bind(this, item)}
                                            style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                                    <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>{item}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        )
                                    })
                                }   
                        </View> */}
                    
                        <View style={{flex: 1, flexDirection: 'row', marginTop: 5, flexWrap: 'wrap', alignItems: 'flex-start'}}>
                            <TouchableOpacity 
                                onPress={()=>selectGroup()}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                            <View style={{borderRadius:200,width:100,height:75, margin: 1, backgroundColor: (caught==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Dry Cough</Text>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(one==0){setOne(1);}else{setOne(0);}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:75, margin: 1, backgroundColor: (one==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Sore throat</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(two==0){setTwo(1)}else{setTwo(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:75, margin: 1, backgroundColor: (two==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Running Nose</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(three==0){setThree(1)}else{setThree(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:75, margin: 1, backgroundColor: (three==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Fever</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(four==0){setFour(1)}else{setFour(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:75, margin: 1, backgroundColor: (four==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Breathing Problem</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(five==0){setFive(1)}else{setFive(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:75, margin: 1, backgroundColor: (five==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Fatigue</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{if(six==0){setSix(1)}else{setSix(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:75, margin: 1, backgroundColor: (six==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Headache</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{if(seven==0){setSeven(1)}else{setSeven(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:75, margin: 1, backgroundColor: (seven==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Drowsiness</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{if(eight==0){setEight(1)}else{setEight(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:75, margin: 1, backgroundColor: (eight==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Chest Pain</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{if(nine==0){setNine(1)}else{setNine(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:75, margin: 1, backgroundColor: (nine==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Stroke </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{if(ten==0){setTen(1)}else{setTen(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:75, margin: 1, backgroundColor: (ten==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Change in appetide</Text>
                                </View>
                            </TouchableOpacity>	
                            <TouchableOpacity
                                onPress={()=>{if(ten==0){setEleven(1)}else{setEleven(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:75, margin: 1, backgroundColor: (eleven==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Loss Smell</Text>
                                </View>
                            </TouchableOpacity>					
                        </View>
                        
                    </ScrollView>
                    {/* <Button onPress={()=>{getResults()}}>Check</Button> */}
                   
                </Card>
                <TouchableWithoutFeedback style={{backgroundColor:'red',borderColor:'red',borderWidth:3}} onPress={()=>{if(twelve==0){setTwelve(1)}else{setTwelve(0)}}}>
                <View style={{height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20,}}>
                <Text>Is you Symptoms Progressed:</Text>
                <Icon style={styles.icon} fill='#8F9BB3'    name={(twelve==1)?'plus-square-outline':'minus-square-outline'}/>
                </View>
                </TouchableWithoutFeedback>
                		
 {(respose==0)?<Card style={{height:150, justifyContent: 'center', alignItems: 'center',marginTop:20,backgroundColor:'#54ff7f'}}>
              <Text style={{fontSize:17}}>
              You are in the low risk level for COVID-19
      Please contact your doctor soon
      Stay Safe
              </Text>
      </Card>:(respose==1)?<Card style={{height:150, justifyContent: 'center', alignItems: 'center',marginTop:20,backgroundColor:'#ff949b'}}>
              <Text style={{fontSize:17}}>
              You are in the high risk level for COVID-19
      Please contact your doctor soon
      Stay Safe
              </Text>
      </Card>:(respose==2)?<View style={{marginTop:50}}><Button onPress={()=>{getResults();}}>Check</Button></View>:null}
      
      <TouchableOpacity onPress={()=>{setRespose(2);}}>
      <View  style={{height:50,paddingHorizontal:20,backgroundColor:'#e1f7f5',justifyContent:'center',alignItems:'center'}}><Text>Clear</Text></View>
      </TouchableOpacity>
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