function mmc(n1, n2) {
    if (arguments.length !== 2) {
        return ("A função MDC espera exatamente dois números.");
    }
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        return("Os argumentos para MDC devem ser do tipo número.");
    }
    if (n1%1 !== 0 || n2%1 !== 0) {
        return("Os argumentos para MDC devem ser inteiros. Decimais não são permitidos.");
    }

    if (n1 === 0 || n2 === 0) return 0;
    
    const maior = Math.max(n1, n2);
    const menor = Math.min(n1, n2);
    let multiplo = maior;
    while (true) {
      if(multiplo % menor === 0) {
            return multiplo;
      }
      multiplo += maior;
 }

}

console.log(mmc(4, 6)); // 12
console.log(mmc(21, 6)); // 42      