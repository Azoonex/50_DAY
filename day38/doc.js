function repetChar(s) {
    if (s.length <= 3)
        return 'this is not Sentence';
    return (/a...b/).test(s) || (/b...a/).test(s);
}
console.log(repetChar('amirabas'));
// separated separeaeted separtated exactly exactly
