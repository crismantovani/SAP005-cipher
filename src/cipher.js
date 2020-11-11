const alfabeto = 26;
const cipher = {

  encode: function (offset, mensagemEntrada) {
    let finalMessage = "";

    if (!offset || !mensagemEntrada) {
      throw new TypeError('Usuário não preencheu corretamente');
    } else {
      for (const letra of mensagemEntrada) {
        let letraCharCode = letra.charCodeAt(0);
        let letraNumero = letraCharCode - 65;
        let novaLetraCharCode = ((letraNumero + offset) % alfabeto) + 65;
        let MensagemEncriptada = String.fromCharCode(novaLetraCharCode);
        finalMessage += MensagemEncriptada;

      }
      return finalMessage;
    }
  },

  decode: function (offset, mensagemEntrada) {
    let finalMessage = "";

    if (!offset || !mensagemEntrada) {
      throw new TypeError('Usuário não preencheu corretamente');
    } else {
      for (const letra of mensagemEntrada) {
        let letraCharCode = letra.charCodeAt(0);
        let letraNumero = letraCharCode + 65;
        let novaLetraCharCode = ((letraNumero - offset) % alfabeto) + 65;
        let MensagemEncriptada = String.fromCharCode(novaLetraCharCode);
        console.log('MensagemEncriptada')
        finalMessage += MensagemEncriptada;

      }
      return finalMessage;
    }

  }
};
export default cipher;
