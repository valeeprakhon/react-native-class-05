import React, { Component } from 'react';
import {
  View,FlatList,TouchableOpacity,StyleSheet,Text,Alert,Image
} from 'react-native';
import * as data from './data.json'
import { List, ListItem, SearchBar } from "react-native-elements";


export default class App extends Component {
  constructor(){
    super();
     this.state = {
       selectedID:null,
       searchText:null
    };
    
  }

  onSearch=(text)=>{
    this.setState({searchText:text});
      for(let i=0;i<data.car.length;i++){
      if(this.state.searchText==data.car[i].name){
        this.flatListRef.scrollToIndex({index:i});
        this.setState({selectedID:data.car[i].id})
      }
    }
  }

  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round 
            onChangeText={this.onSearch} value={this.state.searchText}/>;
  };

  renderFooter = () => {
    return(
      <View style={styles.footer}>
        <Text style={{textAlign:"center",fontSize:16}}> Toyota Thank you </Text>
      </View>
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#dddddd",
        }}
      />
    );
  };

  renderItem=({item})=>{

    let backgroundColor = null
    if(this.state.selectedID==item.id){
      backgroundColor="#e2e6ef"
    }else{
      backgroundColor="white"
    }
    return(
      <View>
        <TouchableOpacity style={{backgroundColor:backgroundColor}} onPress={()=>this.setState({selectedID:item.id})}>
          <View style={styles.itemStyle}>
            <Image style={styles.image} source={{uri:item.url}}/>
            <View style={{paddingLeft:8, flex:1}}>
	            <Text style={styles.title}>{item.name}</Text>
              <Text>{item.description}</Text>
            </View>
	        </View>
        </TouchableOpacity>
      </View>
    );
  }

  render(props) {
    return (
      <View style={{flex:1}}>
        <FlatList
          data={data.car}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          ref={(ref) => { this.flatListRef = ref; }}
      />
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
