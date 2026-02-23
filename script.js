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


const person={
    fname: "Ajay", lname:"singh",age:25
};

for(let x in person){
    console.log("person details: "+x+": "+person[x]);
}
