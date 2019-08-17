import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableHighlight,
  Alert,
  Platform,
} from 'react-native';
import Clients from './../data/clients';
import Card from './../components/Card';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.arrayholder = [];
  }

  state = {
    users: '',
    name: '',
    age: 0,
    cellno: '',
    email: '',
    address: '',
    job_title: '',
    dataSource: '',
    search: '',
  };

  async componentDidMount() {
    const arrayholder = Clients.client;
    this.setState({arrayholder, dataSource: arrayholder});
  }

  SearchFilterFunction(text) {
    const newData = this.state.arrayholder.filter(
      item => item.name.toUpperCase().indexOf(text.toUpperCase()) > -1,
    );

    this.setState({
      dataSource: newData,
      search: text,
    });
  }

  _onPress(item) {
    Alert.alert('you click on ' + item.name);
  }

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.viewStyle}>
        <View style={styles.searchbar}>
          <TextInput
            style={styles.input}
            onChangeText={text => this.SearchFilterFunction(text)}
            placeholder="Type Here..."
            value={this.state.search}
          />
        </View>

        <FlatList
          data={this.state.dataSource}
          showsVerticalScrollIndicator={true}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={({item}) => (
            <TouchableHighlight onPress={() => this._onPress(item)}>
              <Card>
                <View style={styles.cardchildcontainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.email}>{item.job_title}</Text>
                </View>
              </Card>
            </TouchableHighlight>
          )}
          enableEmptySections={true}
          keyExtractor={item => item.id}
          style={styles.flatList}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
    marginTop: Platform.OS == 'ios' ? 30 : 0,
  },
  textStyle: {
    padding: 10,
  },
  container: {
    marginTop: 10,
  },

  flatview: {
    paddingLeft: 20,
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18,
  },
  email: {
    color: 'red',
  },

  cardchildcontainer: {
    padding: 10,
  },
  flatList: {
    height: '80%',
  },
  clientsdetails: {
    flex: 1,
    marginTop: 10,
    padding: 20,
  },

  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  searchbar: {
    marginLeft: 30,
    marginRight: 30,
  },
});
