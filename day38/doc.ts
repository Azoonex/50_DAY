function repetChar(s:string){
    if(s.length <= 3) return 'this is not Sentence'

    return (/a...b/).test(s) || (/b...a/).test(s);
}

console.log(repetChar('amirabas'))

// separated separeaeted separtated exactly exactly


function counterVowels(str : string){
    return str.replace(/^aeiou/,"").length
}

// solve th
