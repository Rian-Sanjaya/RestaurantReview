import React, { Component } from 'react'
import {
  View,
  Text, 
  ScrollView,
  Image,
  StyleSheet
} from 'react-native'
// import Stars from 'components/Stars'

export default class RestaurantInfo  extends Component {
  
  // set title for navigation header
  static navigationOptions = {
    title: 'Restaurant Info',
    // headerStyle: {
    //   backgroundColor: '#0066CC',
    //   color: '#FFF'
    // },
    // headerTintColor: '#FFF',
    // headerTitleStyle: {
    //   color: '#FFF'
    // }
  }
  
  render() {
    
    // const place = this.props.navigation.state.params && 
    //   this.props.navigation.state.params.place

    // getParam automatic check for null
    const place = this.props.navigation.getParam('place')

    return (
      <View>
        <Text>Info</Text>
      </View>

      // <ScrollView style={StyleSheet.root}>
      //   <View style={styles.infoHeader}>
      //     <Image 
      //       source={place.image}
      //       style={styles.image}
      //       resizeMode='contain'
      //     />
      //     <View style={styles.info}>
      //       <Text style={styles.name}>{place.name}</Text>
      //       <Text style={styles.address}>{place.address}</Text>
      //       <Stars rating={place.rating} />
      //     </View>
      //   </View>
      // </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff'
  },
  infoHeader: {
    flexDirection: 'row'
  },
  info: {
    marginTop: 20
  },
  name: {
    fontSize: 20
  },
  address: {
    color: 'grey',
    marginBottom: 5
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
})