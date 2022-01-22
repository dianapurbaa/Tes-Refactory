// soal logic 4


function solution(param){
    let hasil = 0;
    if(typeof(param) == "number"){
        for(let i = 1; i <= param - 1; i++){

            if(i % 3 == 0){
                hasil += i;
                console.log(i)
            }else if(i % 5 == 0){
                hasil += i;
                console.log(i)
            }
    
        }
    }
 
    console.log(`Hasil Akhir : ${hasil}`);
}


solution(10);
