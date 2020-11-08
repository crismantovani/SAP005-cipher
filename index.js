//Móludos do js | Importando o import cipher.js;
import cipher from './cipher.js';

//DOM: conectando o HTML com o JS

const getmensagemEntrada = document.getElementById('mensagemEntrada');
const getoffset = document.getElementById('offset');
const getTranslatedMessage = document.getElementById('resultado');
const botaoEncript = document.getElementById('botaoEncript');
const botaoDecript = document.getElementById('botaoDecript');

//addEventListener = Age conforme interação do user
//Botão Encriptar

botaoEncript.addEventListener('click', event => {
    event.preventDefault();
    const mensagemEntrada = String(getmensagemEntrada.value).toUpperCase();
    const offset = Number(getoffset.value);
    const encryptedMessage = cipher.encode(offset, mensagemEntrada);
    getTranslatedMessage.innerHTML = encryptedMessage;
});

//Botão de Desencriptar

botaoDecript.addEventListener('click', event => {
    event.preventDefault();
    const mensagemEntrada = String(getmensagemEntrada.value).toUpperCase();
    const offset = Number(getoffset.value);
    const decryptedMessage = cipher.decode(offset, mensagemEntrada);
    getTranslatedMessage.innerHTML = decryptedMessage;
});