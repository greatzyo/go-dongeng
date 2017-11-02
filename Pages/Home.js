import React, { Component } from 'react';
import {
  AppRegistry ,
  TouchableHighlight ,
  Dimensions ,
  StyleSheet ,
  ActivityIndicator ,
  ListView ,
  Text ,
  View ,
  Alert ,
  Image ,
  NetInfo,
  Platform
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import GlobalStyles from "./styles";
import FormHeader from "./FormHeader";
import ReadScreen from "./ReadScreen";

export default class Home extends Component {

 constructor(props) {
   super(props);
   this.state = {
     isLoading: true,
     status : false,
   }
 }
 static navigationOptions = {
   header: null ,
   title: 'Home',
 };

GetItem (flower_name) {
  Alert.alert(flower_name);
 }


 componentDidMount() {

    NetInfo.isConnected.addEventListener('change', this.handleConnectionChange);

    NetInfo.isConnected.fetch().then(
      isConnected => { this.setState({ status: isConnected }); });

    console.log(`is connected: ${this.state.status}`);


 }

componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('change', this.handleConnectionChange);
}

handleConnectionChange = (isConnected) => {
        this.setState({ status: isConnected });
        console.log(`is connected: ${this.state.status}`);
        if (this.state.status){
           return fetch('http://go-dongeng.com/ajax/show_all_article')
             .then((response) => response.json())
             .then((responseJson) => {
               let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
               this.setState({
                 isLoading: false,
                 dataSource: ds.cloneWithRows(responseJson),
               }, function() {
                 // In this block you can do something with new state.
               });
             })
             .catch((error) => {
               console.error(error);
             });
        }
        else {
          this.setState({ isLoading: false, });
        }
}

 ListViewItemSeparator = () => {
   return (
     <View
       style={{
         height: .5,
         width: "100%",
         backgroundColor: "#000",
       }}
     />
   );
 }

 render() {

   const { navigate } = this.props.navigation;
   if (this.state.isLoading) {
     return (

          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
           </View>
     );
   }
    if (this.state.status){
       return (
          <View style={styles.container} >
           <FormHeader />

           <ListView

            dataSource={this.state.dataSource}

            renderSeparatxor= {this.ListViewItemSeparator}

            renderRow={ (rowData) =>

            <View style={{ flex:1, flexDirection: 'row' }}>
              <TouchableHighlight onPress= { () => navigate('ReadScreen', { article_id: rowData.id_art_user_category })}
                style={GlobalStyles.TouchImage} >
                  <Image source = {{ uri:'http://go-dongeng.com/assets/theme/default/images/content/'+rowData.picture }} style={GlobalStyles.imageViewContainer} >
                    <Text onPress={this.GetItem.bind(this, rowData.title)} style={GlobalStyles.textViewContainer} >{rowData.title}</Text>
                  </Image >
              </TouchableHighlight >
            </View>
             }
             />

         </View>
       );
       }
      else {
        return (
           <View style={styles.container} >
            <FormHeader />
          </View>
        );
      }

  }
}



const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center' ,
    backgroundColor: 'lightgrey',
    flexDirection: 'column',
  },
});

AppRegistry.registerComponent('go-dongeng', () => Home);
