

// chapter 1 practice


swal('Welcome to our website');

swal({
    title:'Javascript Alert',
    text:'Error! Please enter a valid password',

})

swal({
    title:'Javascript Alert',
    text:'Welcome to Js Land \n Happy Coding!'
})

swal({
    title:'Javascript alert',
    text:'Welcome to Js Land',
})
.then(()=>{
    swal({
        title:'Javascript Alert',
        text:' Happy Coding! \n Prevent this page from creating additonal diolouges.',
    })
})

alert("Hello... I can run JS through my web browser's console");



// chapter 2


let username;

let myName = 'john doe';

prompt('Enter your full name');

let message;
message ='hello world';
alert(message);


let name ='Mehak Younus'
let age ='21 Years old'
let msg ='Certified web applications'

alert(name);
alert(age);
alert(msg);

let food ='pizza \n pizz \n piz \n pi \n p'
alert(food);

let email ='example@example.com'
alert('My email adress is '  +  email );

let book ='A Smarter way to learn javascript.'
alert('I am trying to learning from the book ' + book );
 

let line ='Yah! I can write content HTML through Javascript'
document.write(line);


// chapter 3


let num ='15'
alert(
    'I am' + num + ' years old'
);


let num2 ='10'
alert(
    'you have visited this website ' + num2 + ' time'
);


let birth ='1990'

document.write(' My birth year is ' + birth + '\n Data type of my variable is number.')



var visitorName = "John Doe";
var productTitle = "T-shirt(s)";
var quantity = 5;

document.write(visitorName + " ordered " + quantity + " " + productTitle + " on levi's Clothing store");



// chapter4

var firstName, lastName, age;

var userName;
var $price;
var _totalAmount;
var user1;
var my_first_variable;

document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain <b>letters</b>, <b>numbers</b>, <b>$</b> and <b>_</b>. For example: <code>$my_1stVariable</code><br>");
document.write("Variables must begin with a <b>letter</b>, <b>$</b> or <b>_</b>. For example: <code>$name</code>, <code>_name</code> or <code>name</code><br>");
document.write("Variable names are case <b>sensitive</b><br>");
document.write("Variable names should not be JS <b>keywords</b>");



// chapter5


var num1 = 3;
var num2 = 5;

var sum = num1 + num2;


document.write("Sum of " + num1 + " and " + num2 + " is " + sum);


var num1 = 10;
var num2 = 3;

var subtract = num1 - num2;
var multiply = num1 * num2;
var divide = num1 / num2;
var modulus = num1 % num2;


document.write("Subtraction of " + num1 + " and " + num2 + " is " + subtract + "<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + multiply + "<br>");
document.write("Division of " + num1 + " and " + num2 + " is " + divide + "<br>");
document.write("Modulus of " + num1 + " and " + num2 + " is " + modulus);
