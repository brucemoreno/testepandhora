//Prime number is divide by 1 and himself ONLY.
const cousin = 13;
let isPrime = true;

if (cousin === 1) {
    console.log("1 is non prime nor compostive number.");

}

else if (cousin > 1) {
    for (let i = 2; i < cousin; i++) {
        if (cousin % i == 0) {
            isPrime = false;   
            break;
        }
    }

    if (isPrime) {
        console.log(`${cousin} is a prime number`);
    } else {
        console.log(`${cousin} isn't a prime number`)
    }
   }   else {
            console.log("The number is not a prime number");
        };
    
    


