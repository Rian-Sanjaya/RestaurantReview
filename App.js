import React, {Component} from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation'

import RestaurantList from 'components/RestaurantList'

const MainNavigator = createStackNavigator({
  Home: {screen: RestaurantList}
})

const App = createAppContainer(MainNavigator)

export default App