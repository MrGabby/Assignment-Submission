var c=0,a=0,b=0;
for (let i = 1; i < 101; i++) {
    c++;
    a++;
    b++;
     if(c===3 && a===5){
        console.log("FizzBuzz");
        a=0;
        c=0;
    }
   else if (c===3){
        console.log("Fizz");
        c=0;
    }
    else if(a===5){
        console.log("Buzz");
        a=0;
    }
    else{
        console.log(i);
    }
    
}