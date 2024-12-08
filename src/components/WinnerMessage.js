import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WinnerMessage = ({ winner }) => {
  return (
    <View style={styles.winnerMessage}>
      <Text style={styles.winnerText}>{winner } menang!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  winnerMessage: {
    margin: 20,
    padding: 10,
    backgroundColor: '#d4edda',
    borderRadius: 5,
  },
  winnerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#155724',
  },
});

export default WinnerMessage;