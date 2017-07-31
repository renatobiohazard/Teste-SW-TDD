// appSpec.js
var teste = require('../app.js');

describe("O ano não é bissexto pois", function() {

  it("não é divisível por 4.", function() {
    expect(true).toBe(teste.ehBissexto(4));
  });
  it("é divisível por 4.", function() {
    expect(false).toBe(teste.ehBissexto(5));
  });

});
