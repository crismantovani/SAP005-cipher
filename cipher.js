const alfabeto = 26;
const cipher = {
    
    encode: function (offset, mensagemEntrada) {
        let finalMessage = "";

        if (!offset || !mensagemEntrada) {
            throw new TypeError();
        } else {
            for (const letter of mensagemEntrada) {
                let letterCharCode = letter.charCodeAt();
                let letterRealNumber = letterCharCode - 65;
                let newLetterCharCode = ((letterRealNumber + offset) % alfabeto) + 65;
                let MensagemEncriptada = String.fromCharCode(newLetterCharCode);
                finalMessage += MensagemEncriptada;
            
            }
            return finalMessage;
        }
    },

    decode: function (offset, mensagemEntrada) {
        let finalMessage = "";

        if (!offset || !mensagemEntrada) {
            throw new TypeError();
        } else {
            for (const letter of mensagemEntrada) {
                let letterCharCode = letter.charCodeAt();
                let letterRealNumber = letterCharCode + 65;               
                let newLetterCharCode = ((letterRealNumber - offset) % alfabeto) + 65;
                let MensagemEncriptada = String.fromCharCode(newLetterCharCode);
                finalMessage =+ MensagemEncriptada;
                
            }
        }
            return finalMessage;
        }
    };
export default cipher;
