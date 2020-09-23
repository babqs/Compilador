var input;
let pos = 0;
var peek = ' ';
var Type;
var Value;
const EOF =  true;
var lookahead = token;
//tipo de cada elemento dentro do objeto Token, valores somente para leitura
const NUMBER = 256;
const SYMBOL = 257;

var token = {
    Type,
    Value,
};

function funcaoBotao() {
    input = document.querySelector('#textoEntrada').value;
    //console.log(input[length]);
    //for (let i of input) {
      for(var i = 0; i <= input[pos]; i++){  
        lookahead = scan();
        expr();
    }
}


function nextChar() {
    if (pos == input[pos])
        return 0;
    return input[pos++];
}

//lexer
function scan() {
    for (; ; peek = nextChar()) {
        if (peek != ' ' && peek != '\t' && peek != '\n')
            break;
    }

    if (isNumber(peek)) {
        var v = 0;
        let p = parseInt(peek);
        
    do{
        v = 10 * v + p,
        peek = nextChar();
    } while(isNumber(peek));

        token["Type"] = NUMBER;
        token["Value"] = v;
        return token;

    }
    //else{
    token["Type"] = SYMBOL;
    token["Value"] = peek;
    peek = ' ';
    return token;
   // }
}

function match(t) {
    if( lookahead["Type"] == t["Type"] && lookahead["Value"] == t.Value){
        lookahead = scan();
}
    else{
        alert("Values do not match!");
    }
}

function term() {
    if (lookahead["Type"] == NUMBER) {
        console.log(lookahead["Value"]);
        match(lookahead);
    }
    else {
        alert("Syntax Error! " + lookahead["Value"] + " it's not a number.");
    }
}

function expr() {
    term();
    while(true){
    if (lookahead["Type"] == SYMBOL) {
        if (lookahead["Value"] == '+') {
            match(lookahead);
            term();
            console.log('+');
        }
        else if (lookahead["Value"] == '-') {
            match(lookahead);
            term();
            console.log('-');
        }
        else if (lookahead["Value"] == '*') {
            match(lookahead);
            term();
            console.log('*');
        }
        else if (lookahead["Value"] == '\/') {
            match(lookahead);
            term();
            console.log('\/');
        }
        else {
            return lookahead["Value"];  
        }
    }
    else {
        //return;
        alert("Syxtax error");
    }
}
}
function isNumber(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
}