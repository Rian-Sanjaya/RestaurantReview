import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class About extends Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 40 }}>
        <Text style={styles.header}>
          About Restaurant Review
        </Text>

        <Icon
          name='glass'
          color='#0066CC'
          size={300}
          style={styles.icon}
        />

        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </Text>
        <Text style={styles.text}>
          Mauris efficitur elementum corsus. Cras ultrices
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20
  },
  icon: {
    marginVertical: 20,
    alignSelf: 'center'
  },
  text: {
    fontSize: 24,
    color: '#444',
    marginTop: 20
  }
})