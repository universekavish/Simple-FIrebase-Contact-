// Initialize Firebase
var config = {
    apiKey: "AIzaSyDAtpuG227orKWcruCsNjUvr1KIjVy0wrs",
    authDomain: "contactform-5e81b.firebaseapp.com",
    databaseURL: "https://contactform-5e81b.firebaseio.com",
    projectId: "contactform-5e81b",
    storageBucket: "",
    messagingSenderId: "619966297612"
  };
  firebase.initializeApp(config);

// Reference message collection

var messagesRef = firebase.database().ref('messages');

//Listen for form Submit

document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form

function submitForm(e){
  e.preventDefault();
  
// get values

var name = getInputVal('name');
var email = getInputVal('email');
var phone = getInputVal('phone');
var message = getInputVal('message');

// Save message
saveMessage(name, email, phone, message);





}
// function to get get form values
function getInputVal(id){
return document.getElementById(id).value;

}

//save message to firebase

function saveMessage(name, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
    name: name,
    email: email,
    phone:phone,
    message: message

    });


}