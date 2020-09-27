var input;
let pos = 0;
var peek = ' ';
var Type;
var Value;
var lookahead;
var result;
//tipo de cada elemento dentro do objeto Token, valores somente para leitura
const NUMBER = 256;
const SYMBOL = 257;

var token = {
    Type,
    Value,

    //lexer
    scan: function () {
        for (; ; peek = nextChar()) {
            if (peek !== ' ' && peek !== '\t' && peek !== '\n')
                break;
        }

        if (isNumber(peek)) {
            var v = 0;
            let p = parseInt(peek);
            do {
                    v = 10 * v + p,
                    peek = nextChar();
            } while (isNumber(peek));

            token["Type"] = NUMBER;
            token["Value"] = v;
            return token;

        }
        token["Type"] = SYMBOL;
        token["Value"] = peek;
        peek = ' ';
        return token;
    }
};

function funcaoBotao() {
    input = document.querySelector('#textoEntrada').value;
    console.log("INFIX: " + input);
    console.log("Tamanho da entrada: " + input.length);
    console.log("POSFIX: ");
    for (var i = 0; i <= input[pos]; i++) {
        lookahead = token.scan();
        expr();
    }
    console.log("RESULTADO DA EXPRESSÃO: " + result);
}


function nextChar() {
    if (pos == input[pos])
        return 0;
    return input[pos++];
}

function match(t) {
    if (lookahead["Type"] == t["Type"] && lookahead["Value"] === t.Value) {
        lookahead = token.scan();
    }
    else {
        var s = "Syntax Error. Values do not match!";
        console.log(s);
    }
}

function term() {
    var lk = 0;
    if (lookahead["Type"] == NUMBER) {
        lk = lookahead["Value"];
        console.log(lookahead["Value"]);
        match(lookahead);
        return lk;
    }
    else {
        var s = "Syntax Error! " + lookahead["Value"] + " it's not a number.";
        console.error(s);
    }
}

function rest() {
    while (true) {
        if (lookahead["Type"] == SYMBOL) {
            if (lookahead["Value"] === '+') {
                match(lookahead);
                var sum = term();
                console.log('+');
                result += sum;
            }
            else if (lookahead["Value"] === '-') {
                match(lookahead);
                var sub = term();
                console.log('-');
                result -= sub;
            }
            else {
                return result;
            }
        }
        else {
            return result;
        }
    }
}

function expr(){
    result = term();
    rest();
}


function isNumber(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
}