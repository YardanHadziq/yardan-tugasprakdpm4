import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import TeamScore from './TeamScore';
import WinnerMessage from './WinnerMessage';

const ScoreBoard = ({ teamA, teamB, teamAScore, teamBScore, setTeamAScore, setTeamBScore, resetScores }) => {
  const isWinner = teamAScore >= 10 || teamBScore >= 10;
  const winner = teamAScore >= 10 ? teamA : teamB;

  return (
    <View style={styles.scoreBoard}>
      <TeamScore 
        teamName={teamA} 
        score={teamAScore} 
        setScore={setTeamAScore} 
      />
      <TeamScore 
        teamName={teamB} 
        score={teamBScore} 
        setScore={setTeamBScore} 
      />
      {isWinner && <WinnerMessage winner={winner} />}
      <Button title="Reset" onPress={resetScores} />
    </View>
  );
};

const styles = StyleSheet.create({
  scoreBoard: {
    alignItems: 'center',
  },
});

export default ScoreBoard;