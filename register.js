var registerUser = firebase.functions().httpsCallable('registerUser');

function registerUser() {
  var username = document.getElementById('username')
  var email = document.getElementById('email')
  var password = document.getElementById('password')
  registerUser({
    email: email.value,
    password: password.value,
    displayName: username.value
  })
}

document.getElementById('register-button').addEventListener("click", function(event) {
  event.preventDefault();
})
