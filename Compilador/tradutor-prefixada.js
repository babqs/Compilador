var lookahead;
var count = 0;
var input;
var EOF;

function funcaoBotao() {
    input = document.querySelector('#textoEntrada').value;
    console.log(input);
    console.log(input.length);
    for (var i = 0; i <= input[count]; i++) {
        lookahead = nextToken();
        expr();
    }
}

//Analisador léxico
function nextToken() {
    if (count == input.length) {
        EOf = true;
        return EOF;
    }
    else
        return input[count++];
}

//Analisador sintático
function expr() {
    term();
    rest();
}

function rest() {
    if (lookahead === '-') {
        match('-');
        term();
        console.log('-');
        rest();
    }
    else if (lookahead === '+') {
        match('+');
        term();
        console.log('+');
        rest();
    }
    else if (lookahead == input[count]);
    //correto
    else {
        alert('Sytax Error');
    }
    //sintax error
}

function term() {
    switch (lookahead) {
        case '0':
            match('0');
            console.log('0');
            break;

        case '1':
            match('1');
            console.log('1');
            break;

        case '2':
            match('2');
            console.log('2');
            break;

        case '3':
            match('3');
            console.log('3');
            break;

        case '4':
            match('4');
            console.log('4');
            break;

        case '5':
            match('5');
            console.log('5');
            break;

        case '6':
            match('6');
            console.log('6');
            break;

        case '7':
            match('7');
            console.log('7');
            break;

        case '8':
            match('8');
            console.log('8');
            break;

        case '9':
            match('9');
            console.log('9');
            break;

        default:
            alert('Number expected');
            break;
    }
}

function match(c) {
    var c;
    if (lookahead === c) {
        lookahead = nextToken();
    }
    else {
        var s = "Found" + toString(lookahead) + "but expected" + toString(c);
        console.error(s);

    }
}