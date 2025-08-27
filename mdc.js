function mdc(n1, n2) {
    if (arguments.length !== 2) {
        return ("A função MDC espera exatamente dois números.");
    }
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        return("Os argumentos para MDC devem ser do tipo número.");
    }
    if (n1%1 !== 0 || n2%1 !== 0) {
        return("Os argumentos para MDC devem ser inteiros. Decimais não são permitidos.");
    }

    if (n1 === 0) return n2;
    if (n2 === 0) return n1;
    
    const menor = Math.min(n1, n2);
    for (let i = menor; i > 0; i--) {
        if (n1 % i === 0 && n2 % i === 0) {
            return i;
        }
    }

}

console.log(mdc(48, 18)); // 6
console.log(mdc(56, 98)); // 14     