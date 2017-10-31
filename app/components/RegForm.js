
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class RegForm extends Component<{}> {
  render() {
    return (
      <View style={styles.regform}>
        <Text style={styles.header}>Employee Registration</Text>
        <TextInput style={styles.textinput} placeholder="Enter your First name" underlineColorAndroid={'transparent'} />
        <TextInput style={styles.textinput} placeholder="Enter your Last name" underlineColorAndroid={'transparent'} />
        <TextInput style={styles.textinput} placeholder="Enter your IRD number" underlineColorAndroid={'transparent'} />
        <TextInput style={styles.textinput} placeholder="Enter your Email address" underlineColorAndroid={'transparent'} />
        <TextInput style={styles.textinput} placeholder="Enter your Employers name" underlineColorAndroid={'transparent'} />
        <TextInput style={styles.textinput} placeholder="Enter your Employers email address" underlineColorAndroid={'transparent'} />
        <Text style={styles.bodytext}>Clicking this button will send your employer an email asking them to confirm your details.  Once they have done that you will receive your Login information.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntext}>Finish Registration</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 10,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    fontSize: 15,
  },
  bodytext: {
    fontSize: 10,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#B2D468',
    marginTop: 30,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',
  }
})
