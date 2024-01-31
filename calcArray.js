function calc(array, n1, n2) {
    if (n1 >= 0 && n2 >= n1 && n2 > array.length) {
        sum = 0;
        for(let i of array){
         sum = i + sum;
        }
        console.log(sum);
    }else {
        console.log('Erreur rencontrée ,Verifier ces conditions, n1 doit etre superieur  0 , n2 superieur à n2 et n2 doit etre superieur au nombre ditems');
    }
}

calc([1,7,8,],0, 3);