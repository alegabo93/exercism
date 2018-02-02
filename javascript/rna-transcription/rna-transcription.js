const DnaTranscriber = function() {};
const dnaStandar = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U',
};

DnaTranscriber.prototype.toRna = function(str) {
  if (str.match(/[^GCTA]/g)) {
    throw "Invalid input";
  }

  return str
    .split('')
    .map(this.transcribe)
    .join('');
};

DnaTranscriber.prototype.transcribe = function(nucleotide) {
  return dnaStandar[nucleotide];
}

module.exports = DnaTranscriber;
