const Bob = function() {};

Bob.prototype.hey = function(input) {
  if ( input.toUpperCase() === input && /[A-Z]/.test(input)) {
    return "Whoa, chill out!";
  }

  if ( /\?\s*$/.test(input) ) {
    return "Sure.";
  }

  if ( /^\s*$/.test(input)) {
    return "Fine. Be that way!";
  }

  return "Whatever.";
};

module.exports = Bob;
