const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let letters = expr.match(/.{10}/g);
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] !== '**********') {
            let char = letters[i].match(/.{2}/g);
            letters[i] = '';
            for (let j = 0; j < char.length; j++) {
                switch(char[j]) {
                    case '10':
                        letters[i] += '.';
                        break; 
                    case '11':
                        letters[i] += '-';
                        break;
                }
            }
            letters[i] = MORSE_TABLE[letters[i]];
        } else {
            letters[i] = ' ';
        }
    }
    return letters.join('');
}

module.exports = {
    decode
}