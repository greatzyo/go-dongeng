import React, { Component } from 'react';
import {
   Alert,
   View,
   StyleSheet,
   Text } from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class FormHeader extends Component {

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {

    return (
            <View style={styles.container} >
              <View style={styles.margin_header} >
                <Text style={styles.title} onPress= {() => this._onPressButton()}>
                  Go Dongeng
                </Text>
              </View>
            </View>


    );
  }
}


const styles = StyleSheet.create({
  container : {
    justifyContent: 'center' ,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    flexDirection: 'row'
  },
  title : {
    fontWeight: 'bold',
    color : '#2980b9',
    alignSelf: 'center',
    fontSize : 35 ,
    paddingTop: 3,
  },
  margin_header: {
    marginTop: 15,
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
})
