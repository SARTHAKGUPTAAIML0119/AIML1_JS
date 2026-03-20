// console.log("Hello World");
// document.write("Hello World");

// var a=10; var b=20;
// var linebreak="<br/>";

// document.write("(a==b)=>");

// result =(a<b);

// document.write(result);
// document.write(linebreak);

// result=(a>b);
// document.write(result);

// document.write(linebreak);

// for(var i=0;i<9;i++){
// 	console.log(i);
//     document.write(i);
//     document.write(linebreak);
// }


// const person={
//     fname: "Ajay", lname:"singh",age:25
// };

// for(let x in person){
//     console.log("person details: "+x+": "+person[x]);
// }

// const person={
//     fname:"Ajay",
//     lname:"singh",
//     age:25
// };
// for(let x in person){
//     console.log("Person details:"+x+":"+person.x)
// }

// var count=0;
// while(count<10){
//     document.write(count);
//     count++;
// }

// var age=20;
// if(age>18){
//     document.write("<b>You are eligible for voting.</b>");
// }
// else{
//     document.write("<b>You are not eligible for voting.</b>");
// }

// var grade="a";
// switch(grade){
//     case "a":document.write("Good Job<br/>");
//     break;
//     case "b":document.write("pretty good<br/>");
//     break;
//     case "c":document.write("Pass<br/>");
//     break;
//     case "d":document.write("fail<br/>");
//     break;
//     default:document.write("Unknown grade<br/>")
// }

// function myfunc(){
//     alert("HELLO WORLD!")
// }

// function sayHello(name,age){
//     document.write(name+" is "+age+" years old.")
// }

// var res=mul(12,34);
// function mul(x,y){
//     return x*y;
// }
// document.write(res);

// function add(a,b){
//     console.log(a+b);
// }add(10,20);

// var add2=(a,b)=>{
//     console.log(a+b);
// }
// add2(20,30);

// var add3=(a,b)=>console.log(a+b);

// add3(100,101);

// var person={
//     name:"john mac",
//     age:20,
//     isMarried:true,
//     adress:{
//         street:'vinay nagar',
//         flat:201
//     }
// };

// console.log(person);
// document.write(person["name"])

// var person2= new Object();
// person2.name="bombastic";
// person2.age=24;
// person2.adress={};
// person2.adress.street="nehru";
// person2['adress']['flatno']=201;
// console.log(person2);


// const element = document.getElementById("myH1");
// let text = element.getAttribute("class");
// document.getElementById("demo").innerHTML=text;

// function myFunction(){
//     document.getElementById("myH1").setAttribute("class","democlass")
// }
        
// const heading =document.createElement("h2");

// const bodytag=document.getElementsByTagName("body");

// bodytag[0].append("heading");

// function practice(){
//     document.open();
//     document.write("<h1>PRACTICE</h1>");
//     document.close();
// }

// function onMouseOver(){
//     console.log("On Mouse Over");
// }

// function onMouseOut(){
//     console.log("On Mouse Out");
// }

// function onMouseMove(){
//     console.log("On Mouse Move");
// }

// const x=document.querySelector('input');
// x.addEventListener('focus',onhandlefocus);
// x.addEventListener('blur',onhand)

// var text='{"employess":['+'{"firstName":"John",lastName":"Doe"}]}';
// obj=JSON.parse(text);
// document.getElementById("demo").innerHTML=obj.employees[0].firstName+" "+obj.employees[0].lastName;

// var promise = new Promise((resolve,reject)=>{
//     let success=true;
//     if(success)
//         resolve("Data Loaded");
//     else
//         reject("Error Occurred");
// });

// promise.then(result=>console.log(result)).catch(error=>console.log(error));


// try{
//     var x=y+20;
// }catch(error){
//     console.log(error.message);
// }

// localStorage.setItem("name","jeet");

// var name1= localStorage.getItem("name");
// console.log(name1);

// localStorage.removeItem("name");

// var user={name:"keet",age:50};
// localStorage.setItem("user",JSON.stringify(user));

// var data=JSON.parse(localStorage.getItem("user"));
// console.log(data.name);