import React from 'react';
import { AppRegistry,  } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './Pages/Home.js';
import ReadScreen from './Pages/ReadScreen.js'


const GoDongeng = StackNavigator({

  Home : { screen: Home  },
  ReadScreen : {screen : ReadScreen},

  },{
    headerMode: 'screen'
  });

export default class App extends React.Component {
  render() {
    return <GoDongeng />;
  }
}
