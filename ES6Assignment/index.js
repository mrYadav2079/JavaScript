//Question 1 
//Arrow fucntions


const printName = (name) => "Hii"+name;





//question 2
//template literal
const printBill = (name, bill) => {
    return `Hi ${name} , please pay:  ${bill}`;
}


//Question 3


const person = {
    name: "Noam Chomsky",
    age: 92
}

let {name , age} = person;

console.log(name);
console.log(age);
