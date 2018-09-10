//Square given number
for (x=0; x<11; x++) {
    console.log(square1(x));
}

//square2
const square2=x=> Math.pow(x,2);
for (x=0; x<11; x++){
    console.log(square2(x));
}
//Shortcut to square1

//min function
function min(x,y){
    if (x>y){
        return y;
    }
    else {
        return x;
    }
}
console.log(min(4.5,5));
console.log(min(19,9));
console.log(min(1,1));