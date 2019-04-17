module.exports = {
  development: {
    port: process.env.PORT || 5000,
    path: 'mongodb://localhost:27017/fitness-app'
  },
  production: { }
}