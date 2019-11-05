function setUp() {

  document.getElementById('logout-a').addEventListener("click", function(event) {
    event.preventDefault();
  })
}

setUp();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user + " just signed in.")
    document.getElementById('nav-logout-ul').style.display="block";
    document.getElementById('nav-login-ul').style.display="none";
    //show log out button
  } else {
    console.log(user + " just signed out.")
    document.getElementById('nav-login-ul').style.display="block";
    document.getElementById('nav-logout-ul').style.display="none";
    //no user signed
  }
});



function logOut() {
  console.log("logging out")
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }, function(error) {
    console.log("Error while signing out.")
    console.log(error)
  });
}
