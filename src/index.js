import cipher from './cipher.js';

const botaoencode = document.getElementById("encode");
    botaoencode.addEventListener('click', pegarvalores);

    function pegarvalores () {
        const input = document.getElementById("data-input").value;
        const offset = document.getElementById("offset").value;
        const inputStr = String(input).toUpperCase();
        const offsetNum = Number(offset);
        const encode = function encode () {


        };
    
}

const botaodecode = document.getElementById("decode")
    botaodecode.addEventListener('click', pegarinput);

    function pegarinput() {
        const input = document.getElementById("data-input").value;
        const offset = document.getElementById("offset").value;
        const inputStr = String(input).toUpperCase();
        const offsetNum = Number(offset);
        const decode = function decode() {


        };

    }



    

console.log(cipher);
