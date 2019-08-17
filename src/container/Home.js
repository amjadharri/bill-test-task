import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import Clients from './../data/clients';
import CardSection from './../components/CardSection';
import Card from './../components/Card';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class Home extends Component {
  state = {
    users: [],
    name: '',
    age: 0,
    cellno: '',
    email: '',
    address: '',
    job_title: '',
    selectedList: '',
  };

  async componentDidMount() {
    const users = Clients.client;
    this.setState({users});
  }

  _onPress(item, index) {
    this.setState({
      name: item.name,
      age: item.age,
      cellno: item.cellno,
      email: item.email,
      address: item.address,
      job_title: item.job_title,
      selectedList: index.toString(),
    });
  }

  renderInfo = () => {
    const info = [
      {
        label: 'Name',
        value: this.state.name,
      },
      {
        label: 'Age',
        value: this.state.age,
      },
      {
        label: 'Address',
        value: this.state.address,
      },
      {
        label: 'Cell No',
        value: this.state.cellno,
      },
      {
        label: 'Email',
        value: this.state.email,
      },
      {
        label: 'Job Title',
        value: this.state.job_title,
      },
    ];

    return (
      <View style={styles.clientsdetails}>
        <CardSection>
          {info.map(i => (
            <View key={i.label} style={{flexDirection: 'row'}}>
              <Text style={styles.textlabel}>{i.label}: </Text>
              <Text>{i.value}</Text>
            </View>
          ))}
        </CardSection>
      </View>
    );
  };

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            {this.state.users.map((item, index) => (
              <View
                key={item.id}
                style={{
                  height:
                    this.state.selectedList === index.toString() ? 250 : 80,
                }}>
                <TouchableHighlight
                  key={index}
                  onPress={() => this._onPress(item, index)}>
                  <Card>
                    <View style={styles.cardchildcontainer}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.email}>{item.job_title}</Text>
                    </View>
                  </Card>
                </TouchableHighlight>
                {this.state.selectedList === index.toString() &&
                  this.renderInfo()}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  cardchildcontainer: {
    padding: 10,
  },
  flatList: {
    height: '65%',
  },
  clientsdetails: {
    flex: 1,
    marginTop: 10,
    padding: 20,
  },
  textlabel: {
    fontFamily: 'Verdana',
    color: '#111',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
