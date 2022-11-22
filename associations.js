module.exports = (app) => {
  const Users = app.models.users;
  const Tournaments = app.models.tournaments;
  const Racers = app.models.racers;

  Users.hasMany(Tournaments);
  Tournaments.belongsTo(Users, { foreignKey: 'UserId' });


  Tournaments.hasMany(Racers);
  Racers.belongsTo(Tournaments, { foreignKey: 'TournamentId' });
};
