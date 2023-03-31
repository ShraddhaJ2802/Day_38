//const prompt=require("prompt-sync")({sigint:true}); 
//let num = prompt("Enter the  number to get factorial of: ");
//num=parseInt(num);
num=5;
let fact = 1;
for(let i=1; i<=num; i++){
 fact=fact*i;
}
console.log(fact);