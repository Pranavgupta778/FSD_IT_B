function hello(){
    console.logg("helloo");
}
hello();
const hello1=()=>console.log("hello1");
hello1();
function add(a,b){
    return (a+b);
}
const sum=add(34,45);
console.log("sum=",sum);
const add1=(a,b)=>(a+b);
const sum1=add(123,120);
console.log("sum=",sum1);