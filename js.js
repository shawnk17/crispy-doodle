var firstName = document.getElementById("first-name"),
lastName = document.getElementById("last-name"),
salutation = document.getElementById("salutation"),
addButton = document.getElementById("add-button"),
clearButton = document.getElementById("clear-button"),
displayDiv = document.getElementById("customer-list"),
nextId = 0,
customerList = [];

var Customer = function Customer(firstName, lastName, salutation){
this.firstName = firstName;
this.lastName = lastName;
this.salutation = salutation;
this.id = nextId++;

this.greetFormally = function greetFormally(){
    var greetString = "Greetings ";

    if(this.salutation == ""){
        greetString += this.firstName + " " + this.lastName;
    } else {
        greetString += this.salutation + " " + this.lastName;
    }

    return greetString;
} 
}

var renderCustomers = function renderCustomers(){
displayDiv.innerHTML = "";

for(var i = 0; i < customerList.length; i++){
    var curCustomer = customerList[i];
    displayDiv.innerHTML += i + " : " + curCustomer.greetFormally() + "<br>";
}
};

var clearInputs = function clearInputs(){
firstName.value = "";
lastName.value = "";
salutation.value = "";
};

addButton.addEventListener("click", function(){
if(firstName.value == "" || lastName.value == "")
{
    alert("Hey! You didn't enter a first name or last name!");
    return;
}
var newCustomer = new Customer(firstName.value,
    lastName.value, salutation.value);

customerList.push(newCustomer);

clearInputs();
renderCustomers();
});

clearButton.addEventListener("click", function(){
customerList = [];
renderCustomers();
clearInputs();
});


// var firstName = document.getElementById("firstname"),
//     lastName = document.getElementById("last-name"),
//     salutation =document.getElementById("salutation"),
//     addButton = document.getElementById("add-button"),
//     addButton =document.getElementById("clear-button"),
//     displayDiv = document.getElementById("customer-list");

// var customer = function customer(firstName, lastName){
//     var myNewObj ={};

// };

// // var customer = function customer(firstname, lastName, salutation{
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.salutation = salutation;
// //     this.id = ++nexId;

// //     this.greetFormally = function greetFormally(){

// //     }

// // });
    

// var renderCustomer = function renderCustomer(){
//     for(var i =0; i < customerList.length; i++){
//         var curCurstomerList[i];
//         displayDiv.innerHTML += i +":" + curCustomer,greetformally + "<br>"    }
// };

// var clearInputs = function clearInputs(){
//     firstName =" ";
//     lastName =" ";
//     salutation =" ";
// };

// // addButton.addEventListener("click", function {
// //     alert("Bang")
// // })

// clearInputs();
// renderCustomer=();

// clearButotn.

