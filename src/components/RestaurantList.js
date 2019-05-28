import React, {Component} from 'react';

import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput,
  FlatList, 
  Image
} from 'react-native';

// relative path
// import Header from './src/components/Header'

// absolute path
import Header from 'components/Header'
import RestaurantRow from 'components/RestaurantRow'
import Hulk from 'images/Avengers-Hulk.png'

const restaurants = [
  {name: 'React Cafe', address: '123 Anywhere St', id: 1, image: '', rating: 4.5},
  {name: 'Fancy Restaurant', address: '799 Main St', id: 2, image: '', rating: 4},
  {name: 'Senayan Restaurant', address: '550 Maple Rd', id: 3, image: '', rating: 5},
  {name: 'Domino Pizza', address: '123 Anywhere St', id: 4, image: '', rating: 3.5},
  {name: 'Pizza Marzano', address: '799 Main St', id: 5, image: '', rating: 3},
  {name: 'Bakmi GM', address: '550 Maple Rd', id: 6, image: '', rating: 2},
  {name: 'Bebek Tepi Sawah', address: '123 Anywhere St', id: 7, image: '', rating: 2.5},
  {name: 'Duck King', address: '799 Main St', id: 8, image: '', rating: 3.5},
  {name: 'RaaChaa', address: '550 Maple Rd', id: 9, image: '', rating: 4},
  {name: 'Marugame Udon', address: '123 Anywhere St', id: 10, image: '', rating: 4},
  {name: 'Ikkudo Ichi', address: '799 Main St', id: 11, image: '', rating: 4.5},
  {name: 'Kuotie Shantung', address: '550 Maple Rd', id: 12, image: '', rating: 4},
  {name: 'Pizza Hut', address: '123 Anywhere St', id: 13, image: '', rating: 5},
  {name: 'Burger King', address: '799 Main St', id: 14, image: '', rating: 3},
  {name: 'Hoka Hoka Bento', address: '550 Maple Rd', id: 15, image: '', rating: 1},
  {name: 'Steak 21', address: '123 Anywhere St', id: 16, image: '', rating: 1.5},
  {name: 'Chattime', address: '799 Main St', id: 17, image: '', rating: 2},
  {name: 'Yoshinoya', address: '550 Maple Rd', id: 18, image: '', rating: 2.5},
  {name: 'Sushi Tei', address: '123 Anywhere St', id: 19, image: '', rating: 3},
  {name: 'Tawan', address: '799 Main St', id: 20, image: '', rating: 3.5},
  {name: 'Imperial Kitchen', address: '550 Maple Rd', id: 20, image: '', rating: 4},
  {name: 'KFC', address: '123 Anywhere St', id: 21, image: '', rating: 4.5},
  {name: 'Popolama', address: '799 Main St', id: 22, image: '', rating: 5},
  {name: 'Starbuck', address: '550 Maple Rd', id: 23, image: '', rating: 4},
]

export default class RestaurantList extends Component {
  
  // removing navigation stack header (only for this view component)
  static navigationOptions = {
    header: null
  }

  state = {
    search: null,
    restaurants: []
  }

  // // get the data from remote server
  // componentDidMount() {
  //   axios.get('http://ipaddress/restaurants')
  //   .then( result => this.setState({ restaurant: result.data }))
  // }

  render() {
    
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#FFFFFF'
      }}>

        <View style={{
          marginTop: 30,
          alignItems: 'center'
        }}>
          <Image source={Hulk} />
        </View>
        <Header />

        <TextInput 
          style={styles.input}
          placeholder='Live Search'
          onChangeText={text => {
            this.setState({ search: text})
          }}
          value={this.state.search}
        />

        {/* // if we get the data from remote server, it will be: this.state.restaurant.filter */}
        <FlatList 
          data={
            restaurants.filter(place => {
              return !this.state.search || 
                place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1 
            })
          }
          renderItem={ ({ item, index }) => 
            <RestaurantRow 
              place={item} 
              index={index}
              navigation={this.props.navigation} 
            />
          }
          keyExtractor={item => item.name}
          initialNumToRender={20}
        />

      </View>      
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5f5f5'
  }
})