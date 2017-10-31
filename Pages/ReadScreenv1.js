import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';

import ViewPager from 'react-native-viewpager';
import GlobalStyles from "./styles";
import FormHeader from "./FormHeader";
import ReadScreen from "./ReadScreen";
var deviceWidth = Dimensions.get('window').width;

export default class ReadScreen extends Component {


 constructor(props) {
   super(props);
   this.state = {
     isLoading: true
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

   return fetch('http://go-dongeng.com/ajax/show_all_article')
     .then((response) => response.json())
     .then((responseJson) => {
       let ds = new ViewPager.DataSource({
         pageHasChanged: (p1, p2) => p1 !== p2,
       });
       this.setState({
         isLoading: false,
         dataSource: ds.cloneWithPages(

           [
             {
               image: 'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
               headline: '',
               text: 'blaaa1',
               backgroundColor: '#33AC6F'
             },
             {
               image: 'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
               headline: '',
               text: 'blaaa2',
               backgroundColor: '#33AC6F'
             },
             {
               image: 'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024',
               headline: '',
               text: 'blaaa3',
               backgroundColor: '#33AC6F'
             },
             {
               image: 'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
               headline: '',
               text: 'blaaa4',
               backgroundColor: '#33AC6F'
             },
             {
               image: 'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024',
               headline: '',
               text: 'blaaa5',
               backgroundColor: '#33AC6F'
             },
             {
               image: 'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?h=1024',
               headline: '',
               text: 'blaaa6',
               backgroundColor: '#33AC6F'
             },
             {
               image: 'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024',
               headline: '',
               text: 'blaaa7',
               backgroundColor: '#33AC6F'
             },
           ]

         ),
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
         source={{uri: data.image}}
         style={styles.page} >
         <Text style={GlobalStyles.textViewContainer} >{data.text}</Text>
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
       isLoop={true}
       autoPlay={true}/>
   );
 }
}



var styles = StyleSheet.create({
  page: {
    width: deviceWidth,
  },
});

AppRegistry.registerComponent('go-dongeng', () => ReadScreen);
