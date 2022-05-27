
//function for addding two values

function sum(a,b){
return a+b;
}

// function for getting product of two values

function product(c,d){
    return c*d;
}


//using sum funciton as a parameter of the product function

 var result =product(sum(2,3),6);
 
 //print the result 
 
 console.log(result);
