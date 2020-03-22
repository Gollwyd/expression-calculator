function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let o = 1;
    let string = expr.split(' ').join('');
    let regexp = /\)/;
    let ind = string.search(regexp);
    if (ind != -1){
        regexp = /\(/;
        let res = string.match(regexp); 
        let ind2 = 0;
        for (i=0; i < res.length; i++) {
            if (res[i].index < ind) ind2 = i;
        } 
        let mass = string.split('');
        let skobki = [];
        for (i=ind2+1; i<ind; i++) {skobki.push(mass[i]);}   
        let result = expressionCalculator(skobki.join(''));
        ind = -1;
        let massString = [];
        for (i = 0; i< ind2 + 1; i++) {if (i==ind2) {massString.push(result);} else {massString.push(mass[i]);}}
        for (i = ind + 1; i<mass.length; i++) {massString.push(mass[i]);}
        string = massString.join('');
    }

    regexp = /\*/;
    ind = string.search(regexp);
    while (ind != -1){
        let plusSplit = string.split('');
        let result = string.match(/\*|\/|\-|\+/g);
        let konec = 0;
        if (result.length > 1) {konec = result[1]-1} else {konec = string.length-1;}
        let a = [];
        let b = [];
        for (i=0; i< ind; i++) {a.push(plusSplit[i]);}
        for (i=ind+1; i<=konec; i++) {b.push(plusSplit[i]);}
        
        a = Number.parseInt(a.join(''));
        b = Number.parseInt(b.join(''));
        o = a * b;
        let ochMass = [o];
        for (i=konec+1; i< plusSplit.length; i++){ochMass.push(plusSplit[i]);}


        string = ochMass.join();
        ind = string.search(regexp);
    }

    regexp = /\//;
    ind = string.search(regexp);
    while (ind != -1){
        let plusSplit = string.split('');
        let result = string.match(/\*|\/|\-|\+/g);
        let konec = 0;
        if (result.length > 1) {konec = result[1]-1} else {konec = string.length-1;}
        let a = [];
        let b = [];
        for (i=0; i< ind; i++) {a.push(plusSplit[i]);}
        for (i=ind+1; i<=konec; i++) {b.push(plusSplit[i]);}
        
        a = Number.parseInt(a.join(''));
        b = Number.parseInt(b.join(''));
        if (b==0){ o = 333333333; b = 1;} else {o = a / b;}
        
        let ochMass = [o];
        for (i=konec+1; i< plusSplit.length; i++){ochMass.push(plusSplit[i]);}


        string = ochMass.join();
        ind = string.search(regexp);
    }
    
    regexp = /\+/;
    ind = string.search(regexp);
    while (ind != -1){
        let plusSplit = string.split('');
        let result = string.match(/\+|\-/g);
        let konec = 0;
        if (result.length > 1) {konec = result[1]-1} else {konec = string.length-1;}
        let a = [];
        let b = [];
        for (i=0; i< ind; i++) {a.push(plusSplit[i]);}
        for (i=ind+1; i<=konec; i++) {b.push(plusSplit[i]);}
        
        a = Number.parseInt(a.join(''));
        b = Number.parseInt(b.join(''));
        o = a + b;
        let ochMass = [o];
        for (i=konec+1; i< plusSplit.length; i++){ochMass.push(plusSplit[i]);}


        string = ochMass.join();
        ind = string.search(regexp);
    }
    regexp = /\-/;
    ind = string.search(regexp);
    while (ind != -1){
        let plusSplit = string.split('');
        let result = string.match(/\-/g);
        let konec = 0;
        if (result.length > 1) {konec = result[1]-1} else {konec = string.length-1;}
        let a = [];
        let b = [];
        for (i=0; i< ind; i++) {a.push(plusSplit[i]);}
        for (i=ind+1; i<=konec; i++) {b.push(plusSplit[i]);}
        
        a = Number.parseInt(a.join(''));
        b = Number.parseInt(b.join(''));
        
        o = a - b;
        
        let ochMass = [o];
        for (i=konec+1; i< plusSplit.length; i++){ochMass.push(plusSplit[i]);}


        string = ochMass.join();
        ind = string.search(regexp);
    }
    
    if (o==333333333) {return "TypeError: Division by zero.";} else {return o;}
    
    //return Number.parseInt(string);
}

module.exports = {
    expressionCalculator
}





console.log(expressionCalculator('5541/0'));
