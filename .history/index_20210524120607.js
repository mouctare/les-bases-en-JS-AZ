let total = 0;

function addition(x, y){
    total = x + y;
    return total;
}

function soustraction(x){
    total -= x;
    return total;
}
function division(x){
    if(total === 0) {
        return (total = x);
    }else {

        total /= x;
        return total;
    }
}
function multiplication(x){
    if(total === 0) {
        return (total = x);
    }else {

        total *= x;
        return total;
    }
}
