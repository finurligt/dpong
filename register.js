var registerUser = firebase.functions().httpsCallable('registerUser');

function localRegisterUser() {
  var username = document.getElementById('username')
  var email = document.getElementById('email')
  var password = document.getElementById('password')
  registerUser({
    email: email.value,
    password: password.value,
    displayName: username.value
  }).then(function(stuff) {
    console.log(stuff);
  }).catch(function(error) {
    console.log(error);
    console.log("hej");
  });
}

document.getElementById('register-button').addEventListener("click", function(event) {
  event.preventDefault();
})
