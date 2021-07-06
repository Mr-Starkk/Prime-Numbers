
// Create a boolean array
// "prime[0..n]" and
// initialize all entries
// it as true. A value in
// prime[i] will finally be
// false if i is Not a
// prime, else true.
    
function SeiveOfEratosthenes(n){
    prime = Array.from({length: n+1}, (_, i) => true);
    for(i=2; i<=n; i++){
        //if its true finally, its a prime.
        if(prime[i]== true){
            //to go through the multiples.
            for(p = i*i; p<=n; p+=i){
                prime[p] = false;
            };
        };
    };
    //loop to print out primes
    textarea = document.getElementById('textarea');
    for(i=2; i<=n;i++){
        if(prime[i] == true){
            textarea.textContent += i + " ";
        };
    };

}