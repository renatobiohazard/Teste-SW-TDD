// app.js
module.exports = {

  // segunda condição
  ehBissexto: function(ano) {
    if (ano % 4 == 0 && ano % 100 != 0) {
      return true;
    } else {
      return false;
    }
  }
};