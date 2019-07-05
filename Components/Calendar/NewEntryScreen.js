import React, { Component } from 'react';
import { StyleSheet, Button, Picker, View, TextInput } from 'react-native';
import { Input } from 'react-native-elements'
import ModalSelector from 'react-native-modal-selector'

export default class NewEntryScreen extends Component {
    state = { category: 'category'}

    constructor(props) {
        super(props)
    }

    addNewEntry() {
        let date = this.props.date
        this.props.onSaveEntry('info')
    }

    render() {
      let index = 0
      const data = [
          {key: index++, label: 'Fuel'},
          {key: index++, label: 'Engine Oil'},
          {key: index++, label: 'Minor Maintenance'},
          {key: index++, label: 'Major Maintenance'},
          {key: index++, label: 'Purchase Car Product'},
          {key: index++, label: 'Car Wash'}
      ]
      return (
        <View style={{ flex: 1 }}> 
          <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
            <ModalSelector
                data={data}
                initValue="Select Category"
                accessible={true}
                scrollViewAccessibilityLabel={'Scrollable options'}
                cancelButtonAccessibilityLabel={'Cancel Button'}
                onChange={(option) => {this.setState({category: option.label})}} >
                <TextInput
                    style={{padding:10, height:50}}
                    editable={false}
                    placeholder="Select Category"
                    value={this.state.category} />
            </ModalSelector>
          </View>
          <View style={{ flex: 1  }}>
              <Input type="number" label="Amount" placeholder="$" />
          </View>
          <View style={{ flex: 2  }}>
              <Input label="Description" placeholder="Max 255 characters" />
          </View>
          <View style={styles.container}>
            <View style={styles.buttonContainer}>
              <Button onPress={() => this.addNewEntry()} title="Add"/>
            </View>
            <View style={styles.buttonContainer}>
              <Button title="Clear"/>
            </View>
          </View>

        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonContainer: {
      flex: 1,
      margin: 10
    }
  });