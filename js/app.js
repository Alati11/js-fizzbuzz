const contDOMElement = document.querySelector('.box')
console.log(contDOMElement)

// - creare un ciclo per scrivere in console i numeri da 1 a 100.
for (let i = 0; i < 100; i++) {
    let n = i + 1;
    // - dichiaro variabili per multipli di 3 e di 5 
     mulThr = n % 3; 
     mulFiv = n % 5;

//     - Se i numeri multipli sia di 3 che di 5 
//         - stampare "FizzBuzz" 
    if (mulThr === 0 && mulFiv === 0) {
        console.log('fizzbuzz');

 //     - Se i numeri sono multipli di 3 
//         - stampare "Fizz"
    }   else if( mulThr === 0) { 
        console.log('fizz')

//     - Se i numeri sono multipli di 5 
//         - stampare "Buzz" 
    }   else if( mulFiv === 0) {
        console.log('buzz')
    }
    else {
        console.log(n)
    }

    // Crea un container nel DOM , aggiungendo (attraverso la funzione append()) 
     //un elemento html con il numero o la stringa corretta da mostrare.//
    let boxDOMElement = document.createElement('div')
    contDOMElement.append(boxDOMElement)    
   

}   