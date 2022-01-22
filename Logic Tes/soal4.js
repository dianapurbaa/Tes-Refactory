// logic soal 2 Map Array Data

function productArr(array){
    
    const n = array.length;
    // tambahkan base memori
    let  base1 = new Array(n),
         base2 = new Array(n),
         produk = new Array(n),
         hasil = [],
         i,j;

    // parameter 
    base1[0] = 1; // [1,];
    base2[n - 1] = 1;//[,1];

    // mengisi base1 memory
    for(i = 1; i < n; i++){
        // mulai index ke-1
        base1[i] = array[i - 1] * base1[i - 1]; //
    }    

    // mengisi base2 memory
    for(j = n - 2; j >=0; j-- ){
        base2[j] = array[j + 1] * base2[j + 1];
    }

    // hitung base 1 dan base 2
    for(i = 0; i < n; i++){
        produk[i] = base1[i] * base2[i];
    }

    // masukkan hasil
    for(i = 0; i < n; i++){
        hasil.push(produk[i]);
    }
    

   console.log(hasil);
// console.log()

}
productArr([12,20])
productArr([3,27,4,2]);
productArr([13,10,5,2,9]);
productArr([16,17,4,3,5,2]);

