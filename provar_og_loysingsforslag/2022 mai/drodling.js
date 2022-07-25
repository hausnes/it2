function SeriesSum(n){     
    var r = 0;     
    var d = 1;     
    for(let i = 0; i < n; i++) {       
        r = r + 1 / d;       
        d = d + 3;    
    }     
    return parseFloat(r).toFixed(2);
}    
console.log(SeriesSum(3));