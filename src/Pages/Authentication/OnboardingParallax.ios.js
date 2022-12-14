import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, Image } from 'react-native';
import AppIntro from 'rn-falcon-app-intro';
import {COLORS} from '../../Resources/constants';
import NavigationService from '../../Services/NavigationService.js';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  header: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pic: {
    width: 75 * 2,
    height: 63 * 2,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  info: {
    flex: 0.5,
    alignItems: 'center',
    padding: 40
  },
  title: {
    color: '#fff',
    fontSize: 30,
    paddingBottom: 20,
  },
  description: {
    color: '#fff',
    fontSize: 20,
  },
});

export default class OnboardingParallax extends Component {

  constructor(){
      super();
      console.log("OnboardingParallax constructor");
  }

  static navigationOptions = {
       title: '',
       headerLeft: null,
}

  onSkipBtnHandle = (index) => {
    Alert.alert('Skip');
    console.log(index);
    NavigationService.navigate('SignUp');
  }
  doneBtnHandle = () => {
    Alert.alert('Done');
    console.log('Done');
    NavigationService.navigate('SignUp');
  }
  nextBtnHandle = (index) => {
    Alert.alert('Next');
    console.log(index);
  }
  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }

  render() {
    return (
      <AppIntro
        onNextBtnClick={this.nextBtnHandle}
        onDoneBtnClick={this.doneBtnHandle}
        onSkipBtnClick={this.onSkipBtnHandle}
        onSlideChange={this.onSlideChangeHandle}
      >
      <View style={[styles.slide,{ backgroundColor: '#fa931d' }]}>
        <View style={styles.header}>
          <View>
            <Image style={{ width: 75 * 2.5, height: 63 * 2.5 }} source={require('../../Resources/medicalIcons/chemistry.png')} />
          </View>
          <View style={{
            position: 'absolute',
            top: 80,
            left: -20,
          }} level={20}
          >
            <Image style={{ width: 46 * 2.5, height: 28 * 2.5 }} source={require('../../Resources/medicalIcons/fluids.png')} />
          </View>
          <View style={{
            position: 'absolute',
            top: 23,
            left: -25,
          }} level={20}
          >
            <Image style={{ width: 109 * 2.5, height: 68 * 2.5 }} source={require('../../Resources/medicalIcons/clipboard.png')} />
          </View>
          <View style={{
            position: 'absolute',
            top: 65,
            left: -15,
          }} level={5}
          >
            <Image style={{ width: 23 * 2.5, height: 17 * 2.5 }} source={require('../../Resources/medicalIcons/syringe.png')} />
          </View>
        </View>
        <View style={styles.info}>
          <View level={10}><Text style={styles.title}>AppIntro</Text></View>
          <View level={15}><Text style={styles.description}>Pretty Simple Useful in your app tour!</Text></View>
        </View>
      </View>
      <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
        <View style={styles.header}>
          <View>
            <Image style={{ width: 75 * 2.5, height: 63 * 2.5 }} source={require('../../Resources/medicalIcons/chemistry.png')} />
          </View>
          <View style={{
            position: 'absolute',
            top: 30,
            left: -10,
          }} level={20}
          >
            <Image style={{ width: 101 * 2.5, height: 71 * 2.5 }} source={require('../../Resources/medicalIcons/hospital.png')} />
          </View>
          <View style={{
            position: 'absolute',
            top: 10,
            left: 0,
          }} level={-20}
          >
            <Image style={{ width: 85 * 2.5, height: 73 * 2.5 }} source={require('../../Resources/medicalIcons/syringe.png')} />
          </View>
        </View>
        <View style={styles.info}>
          <View level={10}><Text style={styles.title}>Title!</Text></View>
          <View level={15}><Text style={styles.description}>description!</Text></View>
        </View>
      </View>
      <View style={[styles.slide, { backgroundColor: '#406E9F' }]}>
        <View style={styles.header}>
          <View style={{
            position: 'absolute',
            top: 20,
            left: -30,
          }}
          >
            <Image style={{ width: 138 * 2.5, height: 83 * 2.5 }} source={require('../../Resources/medicalIcons/syringe.png')} />
          </View>
          <View style={{
            position: 'absolute',
            top: 25,
            left: -10,
          }} level={-15}
          >
            <Image style={{ width: 103 * 2.5, height: 42 * 2.5 }} source={require('../../Resources/medicalIcons/briefcase.png')} />
          </View>
          <View level={10}>
            <Image style={{ width: 95 * 2.5, height: 55 * 2.5 }} source={require('../../Resources/medicalIcons/chemistry.png')} />
          </View>
          <View style={{
            position: 'absolute',
            top: 65,
            left: 70,
          }} level={25}
          >
            <Image style={{ width: 47 * 2.5, height: 43 * 2.5 }} source={require('../../Resources/medicalIcons/hospital.png')} />
          </View>
        </View>
        <View style={styles.info}>
          <View level={10}><Text style={styles.title}>Title!</Text></View>
          <View level={15}><Text style={styles.description}>description!</Text></View>
        </View>
      </View>
      <View style={[styles.slide, { backgroundColor: '#DB4302' }]}>
        <View style={styles.header}>
          <View style={{
            position: 'absolute',
            top: 25,
            left: -35,
          }} level={15}
          >
            <Image style={{ width: 96 * 2.5, height: 69 * 2.5 }} source={require('../../Resources/medicalIcons/briefcase.png')} />
          </View>
          <View>
            <Image style={{ width: 50 * 2.5, height: 63 * 2.5 }} source={require('../../Resources/medicalIcons/chemistry.png')} />
          </View>
          <View style={{
            position: 'absolute',
            top: 20,
            left: 0,
          }} level={20}
          >
            <Image style={{ width: 46 * 2.5, height: 98 * 2.5 }} source={require('../../Resources/medicalIcons/syringe.png')} />
          </View>
        </View>
        <View style={styles.info}>
          <View level={10}><Text style={styles.title}>Title!</Text></View>
          <View level={15}><Text style={styles.description}>description!</Text></View>
        </View>
      </View>
      </AppIntro>
    );
  }
}

AppRegistry.registerComponent('OnboardingParallax', () => OnboardingParallax);
