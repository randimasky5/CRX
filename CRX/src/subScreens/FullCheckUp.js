import React, { useRef,useState, useEffect } from 'react';



import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, SelectGroup, useTheme } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as ImagePicker from 'react-native-image-picker';

import { StyleSheet,Keyboard,  TouchableHighlight, Image, useWindowDimensions, View, DrawerLayoutAndroid, ImageBackground, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { IndexPath, Drawer, DrawerItem, BottomNavigation, BottomNavigationTab, Button, Datepicker, Autocomplete, AutocompleteItem, RadioGroup, Radio, Card, CheckBox, Divider, Layout, TopNavigation, Icon, Input, Text, TopNavigationAction } from '@ui-kitten/components';
import { BallIndicator, BarIndicator, DotIndicator, MaterialIndicator, PacmanIndicator, PulseIndicator, SkypeIndicator, UIActivityIndicator, WaveIndicator,} from 'react-native-indicators';
// import {storeData, getData} from './_AsyncStorage';
import SelectMultiple from '@horizonlime/react-native-select-multiple'
import {Stopwatch, Timer} from 'react-native-stopwatch-timer';

export const  FullCheckUp = () => {
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const [message, setMessage] = React.useState(['Buddhist',
    'Sikhism',
    'Hinduism',
    'Judaism',
    'Christian',
    'Hinduism',
    'Judaism',
    'Christian',
    'Muslims',]);
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
    const [caught,setCaught] = React.useState(0);
    const [hidesectionOne,setHidesectionOne] = React.useState(0);
    const [hidesectionTwo,setHidesectionTwo] = React.useState(0);
    const [step,setStep] = React.useState(1); // have four steps 
    const [image,setImage] = React.useState();
    const [selecttest,setSelecttest] = React.useState(0);// 0 - set Xray 1- ctimage
    const fruits = ['Apples', 'Oranges', 'Pears']
    const [isTimerStart, setIsTimerStart] = useState(false);
    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [timerDuration, setTimerDuration] = useState(1000);
    const [resetTimer, setResetTimer] = useState(false);
    const [resetStopwatch, setResetStopwatch] = useState(false);
    const [times, setTimes] = useState();
    const [timeinsec, setTimeinsec] = useState();
    const [respose, setRespose] = useState(2); //0= low risk 1- high risk, 2-not response
    const getResults=()=> {
      console.log('news');
      var e= this;
      var xdata = {
        Age:65,
        Gender:1,
        Time:timeinsec
  
      };
      API1.post('api/breath',xdata)
      .then(function (response) {
        
        if(response){
          // setPricing(response.data.co);
              console.log("user screen - pricing - success", response.data);
              if( response.data==1){
               setRespose(1);
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
   function second(time){
     var hours,minutes,seconds;
    [hours, minutes, seconds] = time.split(':');
   var  totalSeconds = (+hours) * 60 * 60 + (+minutes) * 60 + (+seconds);
  
    setTimeinsec(totalSeconds);
  }
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
    const selectTest =()=>{
        if (selecttest==1){
            setSelecttest(0);
        }else{
            setSelecttest(1);
        }
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
   const nextstep = () => {
    console.log('pressed');
        if (step==1){
            setStep(2);
        }else if (step==2){
            setStep(3);
        }else{
            setStep(4);
        }
    }
    const backstep = () => {
        console.log('pressed');
            if (step==4){
                setStep(3);
            }else if (step==3){
                setStep(2);
            }else{
                setStep(1);
            }
        }

    
  return (
      
     <Layout style={{backgroundColor:'#fff',height:windowHeight,width:windowWidth,justifyContent:'space-between'}}>
        <View style={{height:50,justifyContent:'center',alignItems:'center',backgroundColor:'#7bc4e0'}}>
            <Text style={{fontSize:22,fontWeight:'bold',color:'#fff'}}>Full CheckUp</Text>
        </View>
            
            {(step==1)? <View style={{height:windowHeight-135,justifyContent:'center',alignItems:'center'}}>     
                <View style={{height:50,flexDirection:'row',backgroundColor:(selecttest==0)?'white':null,}}>
                    <TouchableOpacity onPress={()=>{setSelecttest(0)}}style={(selecttest==0)?{justifyContent:'center',alignItems:'center',width:windowWidth/2,backgroundColor:'white',borderWidth:3,borderBottomColor:'white',borderColor:"blue"}:{justifyContent:'center',alignItems:'center',width:windowWidth/2,borderWidth:3,backgroundColor:'white',borderBottomColor:'blue',borderColor:'white'}}>
                        <View >
                            <Text>X-Ray</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setSelecttest(1)}}style={(selecttest==0)?{justifyContent:'center',alignItems:'center',width:windowWidth/2,backgroundColor:'white',borderWidth:3,borderBottomColor:'blue',borderColor:'white'}:{justifyContent:'center',alignItems:'center',width:windowWidth/2,borderWidth:3,backgroundColor:'white',borderBottomColor:'white',borderColor:"blue"}}>
                        <View >
                            <Text>CT Image</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{height:windowHeight-185,width:windowWidth,justifyContent: 'center',alignItems: 'center',paddingVertical:20,backgroundColor:'white',borderWidth:3,borderTopColor:'white',borderColor:"blue"}}>
                    <View style={{borderWidth:0,borderColor:"blue",borderStyle:'dashed',paddingHorizontal:100,paddingVertical:30}}>
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
                                //   console.log('data:' + response.assets[0].type + ';base64,' + response.assets[0].base64);
                                }else{
                                setImage('data:'+ response.assets[0].type + ';base64,' + response.assets[0].base64 );  
                                // setImage1(response.assets[0].base64)                
                                  console.log(response);
                                }
                                // console.log(response);
                              }
                            },
                          );
                        }}>
                          <Image style={(image)? {width:windowWidth, height:windowHeight*0.35,borderRadius: 10,marginLeft:0,marginRight:0}:{width:windowWidth/3,height:windowHeight/8}} source={(image) ? { uri:image }:require('./up.jpg')}/>
                     
                      {(image=='')? <Text style={{fontSize:20}}>Browse Image</Text>:null}
                      {(!image)?<Button onPress={()=>{
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
                    </View>
                </View>:null}

            {(step==2)? <View style={{height:windowHeight-135}}>
                <View style={{height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20,}}>
                    <Text>Choose your symptoms:</Text>
                    {/* <Icon style={styles.icon} fill='#8F9BB3'    name={(hidesectionOne==1)?'plus-square-outline':'minus-square-outline'}/> */}
                </View>
                {/* <TouchableWithoutFeedback style={{backgroundColor:'red',borderColor:'red',borderWidth:3}} onPress={()=>{if(hidesectionOne==0){setHidesectionOne(1)}else{setHidesectionOne(0)}}}></TouchableWithoutFeedback> */}
                <Card >
                    <ScrollView>
                        <View style={{flex: 1, flexDirection: 'row', marginTop: 5, flexWrap: 'wrap', alignItems: 'flex-start'}}>
                            <TouchableOpacity 
                                onPress={()=>selectGroup()}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                            <View style={{borderRadius:200,width:100,height:100, margin: 1, backgroundColor: (caught==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Running Nose</Text>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(one==0){setOne(1);}else{setOne(0);}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:100, margin: 1, backgroundColor: (one==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Sore throat</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(two==0){setTwo(1)}else{setTwo(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:100, margin: 1, backgroundColor: (two==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Dry Cough</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(three==0){setThree(1)}else{setThree(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:100, margin: 1, backgroundColor: (three==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Fever</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(four==0){setFour(1)}else{setFour(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:100, margin: 1, backgroundColor: (four==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Breathing Problem</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(five==0){setFive(1)}else{setFive(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:100, margin: 1, backgroundColor: (five==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Fatigue</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{if(six==0){setSix(1)}else{setSix(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:100, margin: 1, backgroundColor: (six==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Headache</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{if(seven==0){setSeven(1)}else{setSeven(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:100, margin: 1, backgroundColor: (seven==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Dyspnea</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{if(eight==0){setEight(1)}else{setEight(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:100, margin: 1, backgroundColor: (eight==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Dry Throat</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{if(nine==0){setNine(1)}else{setNine(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:100, margin: 1, backgroundColor: (nine==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Dizziness</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{if(ten==0){setTen(1)}else{setTen(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:100, margin: 1, backgroundColor: (ten==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                     <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>Hearing Loss</Text>
                                </View>
                            </TouchableOpacity>					
                        </View>
                    </ScrollView>
                </Card>
            </View>:null} 
              

            {(step==3)?<View style={{height:windowHeight-135}}>   
               
                <View style={{height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20,}}>
                <Text>Choose your Health History:</Text>
               
                </View>
               
               <Card >
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
                            <View style={{borderRadius:200,width:100,height:100, margin: 1, backgroundColor: (caught==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>pneumonia</Text>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(one==0){setOne(1);}else{setOne(0);}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:100, margin: 1, backgroundColor: (one==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>diabetes</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(two==0){setTwo(1)}else{setTwo(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:100, margin: 1, backgroundColor: (two==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>copd</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(three==0){setThree(1)}else{setThree(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:100, margin: 1, backgroundColor: (three==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>asthma</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(four==0){setFour(1)}else{setFour(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:100, margin: 1, backgroundColor: (four==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>hypertension</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=>{if(five==0){setFive(1)}else{setFive(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:100, margin: 1, backgroundColor: (five==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>cardiovascular</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{if(six==0){setSix(1)}else{setSix(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:100, margin: 1, backgroundColor: (six==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>obesity</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{if(seven==0){setSeven(1)}else{setSeven(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:200,width:100,height:100, margin: 1, backgroundColor: (seven==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>renal_chronic</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{if(eight==0){setEight(1)}else{setEight(0)}}}
                                    style={{margin:2,flexDirection:"row",marginHorizontal:5,justifyContent:'space-between'}}>
                                <View style={{borderRadius:50,width:100,height:100, margin: 1, backgroundColor: (eight==0)?'pink':'red',justifyContent:'center',alignItems: 'center'}}>
                                        <Text style={{marginVertical: 2, marginHorizontal: 2, color: 'black'}}>tobacco</Text>
                                </View>
                            </TouchableOpacity>			
                        </View>
                    </ScrollView>
                </Card>		
            </View>:null} 
            {(step==4)?<View style={{height:windowHeight-135}}>   
            
        <Text style={styles.title}>
         Breath-holding Time Analysis 
        </Text>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Image style={{height:100,width:250}} source={require('../Images/breath.jpg')}/>
        </View>
        <View style={styles.sectionStyle}>
          <Stopwatch
            laps
            
            start={isStopwatchStart}
            // To start
            reset={resetStopwatch}
            // To reset
            options={options}
            // Options for the styling
            getTime={(time) => {
            //   console.log(time);
               setTimes(time);
            }}
          />
          <View style={{flexDirection:'row',paddingVertical:20}}>
            <TouchableHighlight
              onPress={() => {
                setIsStopwatchStart(!isStopwatchStart);
                setResetStopwatch(false);
                second(times);
                setRespose(2);
              }}><View>
              <Text style={styles.buttonText}>
                {!isStopwatchStart ? 'START' : 'STOP'}
              </Text></View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                setIsStopwatchStart(false);
                setResetStopwatch(true);
                setTimeinsec(0);
                setRespose(2);
              }}>
              <Text style={styles.buttonText}>RESET</Text>
            </TouchableHighlight>
          </View>
          <View style={{paddingVertical:20}}>
          <Card>
            <Text style={{fontWeight:'bold'}}>Instructions </Text>
            <Text>* Take a deep breath.</Text>
            <Text>* Then click on start button and hold your breath.</Text>
            </Card>
            {(respose==0)?<Card style={{height:150, justifyContent: 'center', alignItems: 'center',marginTop:20,backgroundColor:'green'}}>
              <Text style={{fontSize:17}}>
              You are in the low risk level for COVID-19
              Please contact your doctor soon
              Stay Safe
            </Text>
          </Card>:(respose==1)?<Card style={{height:150, justifyContent: 'center', alignItems: 'center',marginTop:20,backgroundColor:'yellow'}}>
        <Text style={{fontSize:17}}>
              You are in the high risk level for COVID-19
              Please contact your doctor soon
              Stay Safe
        </Text>
        </Card>:(respose==2)?<View style={{marginTop:50}}><Button onPress={()=>{getResults();}}>Check</Button></View>:null}
          </View>
        </View>
      
            </View>:null} 

            <View style={{flexDirection:'row',width:windowWidth,justifyContent:'space-around',backgroundColor:'#7bc4e0'}}>
                {(step==1)?null:<TouchableOpacity onPress={()=>{backstep();}}>
                    <View  style={{height:60,flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:30,backgroundColor:'#7bc4e0'}}>
                        <Icon style={{width:30,height:30}} fill='#fff'    name='arrow-circle-left'/>    
                        <Text style={{fontSize:22,fontWeight:'bold',color:'white'}}>Back</Text>
                    </View>
                </TouchableOpacity>}
                <TouchableOpacity onPress={()=>{nextstep();}}>
                    <View  style={{height:60,flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:30,backgroundColor:'#7bc4e0'}}>
                        <Text style={{fontSize:22,fontWeight:'bold',color:'white'}}>Next</Text>
                        <Icon style={{width:30,height:30}} fill='#fff'    name='arrow-circle-right'/>
                    </View>
                </TouchableOpacity>
            </View>
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
    },
 
    container: {
      flex: 1,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'white'
    },
    title: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      padding: 20,
      
    },
    sectionStyle: {
      flex: 1,
      marginTop: 32,
      alignItems: 'center',
      paddingVertical:20
    },
    buttonText: {
      fontSize: 20,
      marginTop: 10,
      paddingHorizontal:50
    },
  });
  
  const options = {
    container: {
      backgroundColor: '#FF0000',
      padding: 5,
      borderRadius: 5,
      width: 200,
      alignItems: 'center',
    },
    text: {
      fontSize: 25,
      color: '#FFF',
      marginLeft: 7,
    },
  };