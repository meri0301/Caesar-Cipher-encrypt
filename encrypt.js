const encrypt = (str, n) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newAlphabet = '';
    let result = "";
    for (let i = 0; i < alphabet.length; i++) {
        const tmp = (i + n) % alphabet.length;
        newAlphabet += alphabet[tmp];
    }

    for (let j = 0; j < str.length; j++) {
        str = str.toLowerCase();
        let index = alphabet.indexOf(str[j]);
        result += newAlphabet[index];
    }
    return result;
}

console.log(encrypt('abc', 2));