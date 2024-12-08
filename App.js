import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import ScoreBoard from './src/components/ScoreBoard';

const App = () => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const teamA = "Tim A";
  const teamB = "Tim B";

  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  return (
    <View style={styles.container}>
      <ScoreBoard 
        teamA={teamA} 
        teamB={teamB} 
        teamAScore={teamAScore} 
        teamBScore={teamBScore} 
        setTeamAScore={setTeamAScore} 
        setTeamBScore={setTeamBScore} 
        resetScores={resetScores} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default App;