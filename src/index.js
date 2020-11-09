//Móludos do js | Importando o import cipher.js;
import cipher from './cipher.js';

//DOM: conectando o HTML com o JS

const getmensagemEntrada = document.getElementById('mensagemEntrada');
const getoffset = document.getElementById('offset');
const getresultado = document.getElementById('resultado');
const botaoEncript = document.getElementById('botaoEncript');
const botaoDecript = document.getElementById('botaoDecript');

//addEventListener = Age conforme interação do user
//Botão Encriptar

botaoEncript.addEventListener('click', event => {
    event.preventDefault();
    const mensagemEntrada = String(getmensagemEntrada.value).toUpperCase();
    const offset = Number(getoffset.value);
    const MensagemEncriptada = cipher.encode(offset, mensagemEntrada);
    getresultado.innerHTML = MensagemEncriptada;
});

//Botão de Desencriptar

botaoDecript.addEventListener('click', event => {
    event.preventDefault();
    const mensagemEntrada = String(getmensagemEntrada.value).toUpperCase();
    const offset = Number(getoffset.value);
    const MensagemEncriptada = cipher.decode(offset, mensagemEntrada);
    getresultado.innerHTML = MensagemEncriptada;
});
