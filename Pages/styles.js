const React = require("react-native");

const { StyleSheet } = React;

export default {
  container : {
    flex: 1,
    justifyContent: 'space-between' ,
    backgroundColor: 'lightgrey',
    flexDirection: 'column',
  },
  footer : {
    backgroundColor: 'lightgrey',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom : 10,
    marginRight : 20,
    marginLeft : 20,
  },
  imageViewContainer: {
    width: '100%',
    height: '100%',
    borderRadius : 10
  },

  TouchImage : {
    width: '100%',
    height: 200,
    borderRadius : 10
  },
  contentViewContainer : {
    textAlign: 'justify',
    margin: 20,
    color:'#ffffff',
    backgroundColor:'rgba(2, 32, 99, 0.53)',
    fontSize:16
  },
  textViewContainer: {
    alignSelf:'center',
    width:'100%',
    margin: 20,
    padding : 10,
    fontWeight:'bold',
    color:'#2980b9',
    fontSize:25
  },
  TextBesidePicture : {
    padding:15,
    fontSize: 15,
    alignSelf:'center'
  },
  TextView : {
    color:'blue',
    fontSize : 20,
    alignSelf:'center',
    justifyContent : 'center'
  }



};
