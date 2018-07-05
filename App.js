import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query: []
    }
  }


  writeQuery(v){
    var query = this.state.query;
    // Se query for vazia e o valor for número e antecedido por outro número: concatena estes.
    if (query != 0 && Number.isInteger(v) && Number.isInteger(query[ query.length - 1])) {
      query[query.length - 1 ] = Number(String(query[query.length -1 ]) + v)
    } else if (!Number.isInteger(query[ query.length - 1]) &&  !Number.isInteger(v) ) {
      undefined;
    } else {
      query.push(v);
    }
    this.setState({query: query });
  }

  _processQuery(){
    var query = this.state.query;
    this.setState({
      query: eval(query.join())
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.panel}>{ this.state.query.join(' ') }</Text>
        <View style={styles.keyboard}>
          <Button style={styles.key} title="1" onPress={()=> { this.writeQuery(1)}}  />
          <Button style={styles.key} title="2" onPress={()=> { this.writeQuery(2)}}  />
          <Button containerStyle={styles.key} title="3" onPress={()=> { this.writeQuery(3)}}  />
          <Button containerStyle={styles.key} title="+" onPress={()=> { this.writeQuery("+")}}  />
          <Button title="=" onPress={this._processQuery.bind(this)} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    margin: 2,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  panel: {
    width: '100%',
    height: 20,
    borderWidth: 0.5,
    borderColor: '#333'
  },

  keyboard: {
    display: 'flex',
    width: '100%',
    marginTop: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  key: {
    width: 200,
    maxWidth: '25%',
    flex: 1,
    paddingHorizontal: 20,
  }

});
