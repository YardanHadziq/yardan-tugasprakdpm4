import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TeamScore = ({ teamName, score, setScore }) => {
  return (
    <View style={styles.teamScore}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => setScore(score + 1)} />
        <Button title="-" onPress={() => score > 0 ? setScore(score - 1) : null} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  teamScore: {
    alignItems: 'center',
    margin: 20,
  },
  teamName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 48,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
});

export default TeamScore;