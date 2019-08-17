import React from 'react';
import {Text, View} from 'react-native';

const Headers = propos => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{propos.headersText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#da51a0',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowcolor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
};

export default Headers;
