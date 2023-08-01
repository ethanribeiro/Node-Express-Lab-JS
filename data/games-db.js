// data/games-db.js

const games = [
    {game: 'Spider-Man', completed: true},
    {game: 'Horizon', completed: false},
    {game: 'Gotham Knights', completed: false}
  ];

  module.exports = {
    getAll: function() {
        return games;
    }
  }