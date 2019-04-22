const jwt = require('jsonwebtoken')

function getId(token) {
  if (typeof token === "undefined") {
    return 'token is undefined';
  }
  const decoded = jwt.decode(token, {complete: true});
  return decoded.payload.sub;
}

function generateAcronym(text) {
  return text
    .split(/\s/)
    .reduce((accumulator, word) => accumulator + word.charAt(0), '');
}

module.exports = {
  getId,
  generateAcronym
}