# Morse Code Decoder

## Task

Write a function, that decodes Morse code and returns a string.

---

**Input:** String. Its length is multiple of 10.   
- Each letter from alphabet encoded with dots(`.`) and dashes(`-`). `10` stands for dot(`.`), `11` stands for dash(`-`). 
- Each encoded **letter's length is 10**.   
- If the length of the encoded letter is **less then 10**, it `left padded` with `0`.   
- `Space` in string is `**********`.   
**Output:** String (decoded)
**Example:** `me` -> `m === -- === 0000001111`, `e === . === 0000000010` -> `00000011110000000010`

---

## Prepare and test

- Install [Node.js](https://nodejs.org/en/)
- Clone this repository: `https://github.com/TatianaYudakova/morse-decoder.git`
- Go to the folder `morse-decoder`
- Run `npm install` in command line
- Run `npm test` in command line
- You will see the number of passed and failed tests
