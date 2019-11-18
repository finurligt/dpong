var registerUser = firebase.functions().httpsCallable('registerUser');

const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");

function setUp() {
  registerForm.style.display = "none";
  loginForm.style.display = "none";
}
setUp();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.location.href = 'index.html';
    console.log(user + " just signed in.")
    console.log(JSON.parse(user));
    //show log out button
  } else {
    //no user signed
    loginForm.style.display="block";
  }
});

function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    window.alert(errorMessage);
  });
}

document.getElementById('login-button').addEventListener("click", function(event) {
  event.preventDefault();
})

registerUser({
  email: "example2@example.com",
  password: "abc123",
  displayName: "helst inte"
})
