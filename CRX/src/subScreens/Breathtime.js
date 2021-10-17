// Example of React Native Timer and Stopwatch
// https://aboutreact.com/react-native-timer-stopwatch/

// import React in our code
import { Button, Card } from '@ui-kitten/components';
import React, {useState} from 'react';
import { app_name, API, API1, API_VERSION, cipher } from '../_Configuration';
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
  YellowBox,
} from 'react-native';

// importing library to use Stopwatch and Timer
import {Stopwatch, Timer} from 'react-native-stopwatch-timer';

export const Breathtime = () => {
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


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>
         Breath-holding Time Analysis 
        </Text>
        <Image style={{height:100,width:250}} source={require('../Images/breath.jpg')}/>
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
      </View>
      
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
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