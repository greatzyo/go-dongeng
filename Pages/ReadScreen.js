import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
  ScrollView,
  Image,
} from 'react-native';

import ViewPager from 'react-native-viewpager';
import GlobalStyles from "./styles";
import FormHeader from "./FormHeader";
var deviceWidth = Dimensions.get('window').width;

export default class ReadScreen extends Component {


 constructor(props) {
   super(props);
   this.state = {
     isLoading: true,
     article_id: null,
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
   console.log(this.props.navigation.state.params.article_id);
  //  this.setState({article_id:this.props.navigation.state.params.article_id});

   return fetch('http://go-dongeng.com/ajax/show_full_mobile_article/'+ this.props.navigation.state.params.article_id)
     .then((response) => response.json())
     .then((responseJson) => {
       let ds = new ViewPager.DataSource({
         pageHasChanged: (p1, p2) => p1 !== p2,
       });
       this.setState({
         isLoading: false,
         dataSource: ds.cloneWithPages(responseJson),
       }, function() {
         // In this block you can do something with new state.
       });
     })
     .catch((error) => {
       console.error(error);
     });
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

 _renderPage (
   data: Object,
   pageID: number | string,) {
   return (

       <Image
         source={{uri: 'http://go-dongeng.com/assets/theme/default/images/content/'+ data.picture}}
         style={styles.page} >
        <ScrollView>
         <Text style={GlobalStyles.contentViewContainer} >{data.text}</Text>
         </ScrollView>
      </Image>
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

   return (
     <ViewPager
       style={this.props.style}
       dataSource={this.state.dataSource}
       renderPage={this._renderPage}
      />
   );
 }
}



var styles = StyleSheet.create({
  page: {
    width: deviceWidth,
  },
});

AppRegistry.registerComponent('go-dongeng', () => ReadScreen);
