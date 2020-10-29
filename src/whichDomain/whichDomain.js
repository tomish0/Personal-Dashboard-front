var remote = true;

var tomish = "https://api.tomish.me";

var localhost = "http://localhost:5000";

var domain;

if (remote) {
  domain = tomish;
} else {
  domain = localhost;
}

module.exports = { domain };