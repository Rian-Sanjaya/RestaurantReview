import React, {Component} from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput,
  ScrollView,
  FlatList
  // Platform 
} from 'react-native';

// import HeaderStyle from './HeaderStyle';

// relative path
// import Header from './src/components/Header'

// absolute path
import Header from 'components/Header'
import RestaurantRow from 'components/RestaurantRow'

const restaurants = [
  {name: 'React Cafe', address: '123 Anywhere St'},
  {name: 'Fancy Restaurant', address: '799 Main St'},
  {name: 'Senayan Restaurant', address: '550 Maple Rd'},
  {name: 'Domino Pizza', address: '123 Anywhere St'},
  {name: 'Pizza Marzano', address: '799 Main St'},
  {name: 'Bakmi GM', address: '550 Maple Rd'},
  {name: 'Bebek Tepi Sawah', address: '123 Anywhere St'},
  {name: 'Duck King', address: '799 Main St'},
  {name: 'RaaChaa', address: '550 Maple Rd'},
  {name: 'Marugame Udon', address: '123 Anywhere St'},
  {name: 'Ikkudo Ichi', address: '799 Main St'},
  {name: 'Kuotie Shantung', address: '550 Maple Rd'},
  {name: 'Pizza Hut', address: '123 Anywhere St'},
  {name: 'Burger King', address: '799 Main St'},
  {name: 'Hoka Hoka Bento', address: '550 Maple Rd'},
  {name: 'Steak 21', address: '123 Anywhere St'},
  {name: 'Chattime', address: '799 Main St'},
  {name: 'Yoshinoya', address: '550 Maple Rd'},
  {name: 'Sushi Tei', address: '123 Anywhere St'},
  {name: 'Tawan', address: '799 Main St'},
  {name: 'Imperial Kitchen', address: '550 Maple Rd'},
  {name: 'KFC', address: '123 Anywhere St'},
  {name: 'Popolama', address: '799 Main St'},
  {name: 'Starbuck', address: '550 Maple Rd'},
]

export default class App extends Component {
  state = {
    search: null
  }

  render() {

    // const headerStyle = Platform.select({
    //   ios: HeaderStyle.iOSHeader,
    //   android: HeaderStyle.header
    // })

    return (
      <View style={{
        flex: 1
      }}>
        
        {/* <Text style={headerStyle}>Restaurant Review</Text> */}

        <Header />

        <TextInput 
          style={styles.input}
          placeholder='Live Search'
          onChangeText={text => {
            this.setState({ search: text})
          }}
          value={this.state.search}
        />

        <FlatList 
          data={
            restaurants.filter(place => {
              return !this.state.search || 
                place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1 
            })
          }
          renderItem={ ({ item, index }) => 
            <RestaurantRow place={item} index={index} />
          }
          keyExtractor={item => item.name}
        />

        <ScrollView contentContainerStyle={{
          paddingTop: 30
        }}>
          {
            restaurants.filter(place => {
              return !this.state.search || 
                place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1 
            }).map( (place, index) => {
              return (
                <View key={place.name} style={[
                  styles.row,
                  { backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7' }
                ]}>
                  <View style={styles.edges}>
                    <Text>{index+1}</Text>
                  </View>

                  <View style={styles.nameAddress}>
                    <Text>{place.name}</Text>
                    <Text style={styles.addressText}>
                      {place.address}
                    </Text>
                  </View>

                  <View style={styles.edges}>
                    <Text>Info</Text>
                  </View>
                </View>
              )
            })
          }
        </ScrollView>

      </View>      
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  edges: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  nameAddress: {
    flexDirection: 'column',
    flex: 8
  },
  addressText: { color: 'grey' },
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