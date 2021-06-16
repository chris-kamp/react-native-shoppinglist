import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#020723',
    fontWeight: '900',
  },
  text: {
    color: '#AEEEFF',
    fontSize: 25,
    textAlign: 'center',
    letterSpacing: 4,
  },
});

export default Header;
