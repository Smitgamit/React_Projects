import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View,Image } from "react-native";

export default class App extends Component {
 
  state = {
    data:[]
  }

  componentWillMount() {
    this.fetchData();
  }
  
  fetchData = async () => {
    const response = await fetch('http://<------API Here------->' , {
     credentials: 'include',
     method: 'GET',
     headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTUyMDE1NDE0OH0.vBTolbNunCX5zqVSNvHwzf1lrO_-DAVYUekFo2wlJVlb51Q0O9LwtloIcHVklyzybSlw9Sj2RqO54jbBlS-ibg'
     }
     // body: JSON.stringify(null)
 })
   const json = await response.json();
   this.setState({ data: json });
 };

  render() {
    return <View style={styles.container}>
     <FlatList
      data={this.state.data}
      keyExtractor={(x, i) => i}
      renderItem={({ item }) =>
        <Text>
          {`${item.name}`}
        </Text>}
         />
  </View>
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    
  }
});
