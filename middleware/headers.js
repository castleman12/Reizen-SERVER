module.exports = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://jw-reizen.herokuapp.com');
  response.setHeader("Access-Control-Allow-Credentials", "true");
  res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
  next();
}