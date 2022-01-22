// soal logic3 

// parameter
const low = "abcdefghijklmnopqrstuvwxyz";

// soal 


function Logic3(soal,low){
    for(let i = 0; i < soal.split("").length; i++ ){
        

        if(soal.split("")[i] !== " "){

            if(low.split("").includes(soal.split("")[i])){
                const res = soal.split("")[i].toUpperCase();
                console.log(res);
            }else{
                const res = soal.split("")[i].toLowerCase();
                console.log(res);
            }


        }else{
            console.log(" ");
        }
    

    }

}

// tampilkan hasil
Logic3("abc",low);
console.log(" ")
Logic3("ABC",low);
console.log(" ")
Logic3("Hello World",low);