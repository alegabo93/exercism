const letters = 'abcdefghijklmnopqrstuvwxyz';

const Cipher = function (key) {
  let randomKey = '';
  if (!key) {
    for (let i = 0; i < 100; i++) {
      randomKey += letters.charAt(Math.random() * (25));
    }
    this.key = randomKey;
  } else {
    if (key.match(/[^a-z]/g)) {
      throw "Bad key";
    }
    this.key = key;
  }
};

Cipher.prototype.encode = function (str) {
  const k = this.key;
  let encoded = '';

  str.split('').forEach((character, index) => {
    const x = letters.indexOf(character);
    const n = letters.indexOf(k.charAt(index));
    const e = (x + n) % 26;
    encoded += letters.charAt(e);
  });

  console.log(encoded);
};

Cipher.prototype.decode = function (str) {
  const k = this.key;
  console.log('====', this.key);
  let decoded = '';

  str.split('').forEach((character, index) => {
    const x = letters.indexOf(character);
    const n = letters.indexOf(k.charAt(index));
    const e = Math.abs((x - n) % 26);
    decoded += letters.charAt(e);
  });

  console.log(decoded);
};

const c = new Cipher('dddddddddddd');
c.encode('hola');
c.decode('krod');

module.exports = Cipher;
