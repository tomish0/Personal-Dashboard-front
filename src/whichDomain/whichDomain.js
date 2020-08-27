var remote = true;

var isengard = "http://api.isengardcoding.com";

var localhost = "http://localhost:5000";

var domain;

if (remote) {
  domain = isengard;
} else {
  domain = localhost;
}

module.exports = { domain };