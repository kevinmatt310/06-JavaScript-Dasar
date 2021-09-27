/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE

function prima( n ) {
    var max = Math.sqrt(n);
    for( var i = 2;  i <= max;  i++ ) {
        if( n % i == 0 )
            return false;
    }
    return true;
}

for( var n = 2;  n <= 100;  n++ ) {
    if( prima(n) ) {
        console.log(n);
    }
}

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 

function prima( n ) {
    var max = Math.sqrt(n);
    for( var i = 2;  i <= max;  i++ ) {
        if( n % i == 0 )
            return false;
    }
    return true;
}
var i = 0;
for( var n = 2;  n <= 1000;  n++ ) {
    if( prima(n) ) {
        i = i+1;
        if(i ==50){
            console.log(n);
        }
    }
}

/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop


function ganjil(n) {
    if (n % 2 !== 0) {
        return true
    }
}

var i = 0;

for( var n = 1;  n <= 1000;  n++ ) {
    if( ganjil(n) ) {
        i++;
        if(i == 50){
            console.log(n);
        }
    }
}


