import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TouchableHighlight,
    Image
} from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome'

export default class RestaurantRow extends Component {

  state = {
    showInfo: false
  }

  infoPressed = () => {
    this.setState({ showInfo: !this.state.showInfo })
  }

  render() {
    const {
      place,
      index
    } = this.props

    return (
      <View key={place.name} style={[
        { backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7' }
      ]}>

        <View style={styles.row}>
          <View style={styles.edges}>
            <Text>{index+1}</Text>
          </View>
          {/* <View style={styles.stars}>
            <Icon name="star" color="#FFD64C" />
            <Icon name="star" color="#FFD64C" />
            <Icon name="star" color="#FFD64C" />
            <Icon name="star-half" color="#FFD64C" />
          </View> */}

          <View style={styles.nameAddress}>
            <Text>{place.name}</Text>
            <Text style={styles.addressText}>
              {place.address}
            </Text>
          </View>

          <View style={styles.edges}>

            {/* <Button 
              title='Info' 
              color='#C93F0B'
              accessibilityLabel="info"
              onPress={this.infoPressed}
            /> */}

            <TouchableHighlight 
              onPress={this.infoPressed}
              style={styles.button}
              underlayColor='#5398DC'
            >
              <Text style={styles.buttonText}>
                Info
              </Text>
            </TouchableHighlight>

          </View>
        </View>

        {
          this.state.showInfo && 
          <View style={styles.info}>
            <Text>Restaurant Info</Text>
            {/* load image from remote server
            <Image 
              source={{ uri: `http://ipaddress/images/${place.image}` }}
              style={{ 
                // width: 100, 
                flex: 1,
                height: 100 
              }} 
              resizeMode="contain"
            /> */}
          </View>
        }

      </View>
    )
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
    padding: 5,
    minWidth: 50
  },
  stars: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: "flex-start",
    padding: 5,
    minWidth: 50
  },
  nameAddress: {
    flexDirection: 'column',
    flex: 8
  },
  addressText: { color: 'grey' },
  button: {
    borderWidth: 1,
    borderColor: '#0066CC',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff'
  },
  buttonText: {
    color: '#0066CC',
    fontSize: 12
  },
  info: {
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4
  }
})