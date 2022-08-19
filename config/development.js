const	secretKey	=	process.env.JWTKEY;

module.exports = {
  db: {
    database: 'ntask',
    username: '',
    password: '',
    params: {
      dialect: 'sqlite',
      storage: 'ntask.sqlite',
      define: {
        underscored: true
      }
    }
  },
  jwt: {
    secret: secretKey,
    options: { session: false }
  }
};