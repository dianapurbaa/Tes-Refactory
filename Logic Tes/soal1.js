// soal tes logic 1
function reBigdigit(num){

    let int = Array.from(String(num),convert);
    
    if(typeof(num) !== "number" || int.length != 3){
        return null;
    }else{

        int.sort((a,b)=> b - a);

        return int.join("");
    }
}


// convert function
let convert = num => Number(num);

// tampilkan hasil
console.log(reBigdigit(123));
console.log(reBigdigit(213));
console.log(reBigdigit(321));

console.log(reBigdigit(-1));
console.log(reBigdigit(0));
console.log(reBigdigit(99));
console.log(reBigdigit(1000));





  
