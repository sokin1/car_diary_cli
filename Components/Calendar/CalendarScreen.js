import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CalendarList } from 'react-native-calendars'

const GAS = {key: 'gas', color: 'red', selectedDotColor: 'red'}
const ENGINEOIL = {key: 'engineoil', color: 'green', selectedDotColor: 'green'}
const MAINTENANCE = {key: 'maintenance', color: 'blue', selectedDotColor: 'blue'}

export default class CalendarScreen extends Component {
  constructor() {
    super()

    this.state = {
      markedDates: {}
    }
  }

  _addNewEntry(day) {
    this.props.navigation.navigate('NewEntry', {
        date: day.dateString
    })
  }

  render() {
    return (
      <View>
        <CalendarList style={{ marginTop: 30}}
          pastScrollRange={50}
          futureScrollRange={50}
          scrollEnabled={true}
          showScrollIndicator={true}
          current={'2019-06-26'}
          minDate={'2012-05-10'}
          markedDates={this.state.markedDates}
          onDayPress={day => this._addNewEntry(day)}
        />
        <Text>
          Summary
        </Text>
      </View>
    )
  }
}