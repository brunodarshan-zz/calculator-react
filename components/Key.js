import React from 'react';
import { Button } from 'react-native';

class Key extends Button {
  constructor(props){
    super(props);
    this.onPress = this.eventPress.bind(this);
  }

  eventPress(){
    // cb(this.props.title);
    console.log(this.props.title);
  }
}

export default Key
