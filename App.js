import React, { Component } from 'react';
import {
  View,FlatList,TouchableOpacity,StyleSheet,Text,Alert,Image
} from 'react-native';

export default class App extends Component {
  constructor(){
    super();
     this.state = {

    };
    
  }

  renderItem=({item})=>{
    return(
      <View>

          <View style={styles.itemStyle}>
            <Image style={styles.image} source={{uri:item.url}}/>
            <View style={{paddingLeft:8, flex:1}}>
	            <Text style={styles.title}>{item.name}</Text>
              <Text>{item.description}</Text>
            </View>
	        </View>
      </View>
    );
  }

  render(props) {
    return (
      <View style={{flex:1}}>
  
      </View>
    );
  }
}
const styles = StyleSheet.create({
  itemStyle: {
    flexDirection:'row',
    padding: 10,
    marginVertical: 8,
  },title: {
	  fontSize: 18,	  
  },image:{
    height:100,
    width:100,
    borderRadius:50,
    borderWidth:0.5,
    borderColor:"#dddddd"
  },footer:{
    padding:8,
    backgroundColor:"#e2e6ef",
    justifyContent:"center", 
    alignContent:"center"
  }
});
