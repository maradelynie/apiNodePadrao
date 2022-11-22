module.exports = app => {
  const Racers = app.models.racers;
  const Tournaments = app.models.tournaments;
  app.route('/racers')
    .all(app.auth.authenticate())
    .post(async (req, res) => {
      try {

        req.body.UserId = req.user.id;
        const where = { id: req.body.TournamentId, UserId: req.user.id };
        const tournament = await Tournaments.findOne({ where });
        if (tournament) {
          const result = await Racers.create(req.body);
          res.json(result);
        }
        else res.sendStatus(401);

      } catch (err) {
        res.status(412).json({ msg: err.message });
      }
    });


};
