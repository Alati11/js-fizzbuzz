
// - creare un ciclo per scrivere in console i numeri da 1 a 100.
for (let i = 0; i < 100; i++) {
    let n = i + 1;


//     - SE i numeri sono multipli di 3 
//         - stampare "Fizz"
    let mulThr = n % 3; 
    if ( mulThr === 0) {
    console.log('fizz');      
    } 
//     - Se i numeri sono multipli di 5 
//         - stampare "Buzz"
    let mulFiv = n % 5;
    if ( mulFiv === 0) {
        console.log('buzz');
    }

//     - Se i numeri multipli sia di 3 che di 5 
//         - stampare "FizzBuzz" 
// let mulThrFiv = (n % 3 && n % 5); 
    let mulThrFiv 
    if (mulThr === 0 && mulFiv === 0) {
        console.log('fizzbuzz');
    } else { console.log(n);
    }

}   


