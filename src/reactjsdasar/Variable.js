import React from 'react';
//const = adalah  variable yang tidak dapat diedit isinya
// const jumlah = 10000;   
// const jumlah = 20000;


//var =  adalah variable global
//sifatnya global scope
var jumlah = 3000;
if(true){
    jumlah = 4000;
}


//let =  adalah block global
//sifatnya block scope
/* let jumlah = 3000;
if (true) {
    jumlah = 4000;
}
 */

const Variable = () => {
    return (
        <div>
            <h2>Belajar Variable : {jumlah}</h2> 
        </div>
    )
}

export default Variable