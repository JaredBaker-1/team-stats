const team = {
 _players: [
  {firstName: 'John', lastName: 'Smith', age: 44},
  {firstName: 'Mary', lastName: 'Smith', age: 43},
  {firstName: 'Paul', lastName: 'Smith', age: 16},
 ],
 _games: [
  {opponent: 'Broncos', teamPoints: 42, opponentPoints: 27},
  {opponent: 'Packers', teamPoints: 33, opponentPoints: 21},
  {opponent: '49ers', teamPoints: 100, opponentPoints: 0}
],

get players(){
    return this._players;
  },

get games(){
    return this._games;
  },

addPlayer(firstName, lastName, age){
  let player = {
    firstName: firstName,
    lastName: lastName,
    age: age
  };
this.players.push(player);
},

addGame(opponent, teamPoints, opponentPoints ){
  let game = {
    opponent: opponent,
    teamPoints: teamPoints,
    opponentPoints: opponentPoints
  };
  this.games.push(game);
}
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
//console.log(team.players);

team.addGame('Patriots', 50, 22);
team.addGame('Dolphins', 60, 23);
team.addGame('Steelers', 70, 10);

console.log(team.games);