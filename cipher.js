const cipher = {
    encode: function (offset, mensagemEntrada) {
        let finalMessage = "";

        if (!offset || !mensagemEntrada) {
            throw new TypeError();
        } else {
            for (const letter of mensagemEntrada) {
                const letterCharCode = letter.charCodeAt();
                const letterRealNumber = letterCharCode - 65;
                const alfabeto = 26;
                const newLetterCharCode = ((letterRealNumber + offset) % alfabeto) + 65;
                const encryptedLetter = String.fromCharCode(newLetterCharCode);
                finalMessage += encryptedLetter;
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
                const letterCharCode = letter.charCodeAt();
                const letterRealNumber = letterCharCode + 65;
                const alfabeto = 26;
                const newLetterCharCode = ((letterRealNumber - offset) % alfabeto) + 65;
                const encryptedLetter = String.fromCharCode(newLetterCharCode);
                finalMessage =+ encryptedLetter;
            }
        }
            return finalMessage;
        }
    };
export default cipher;