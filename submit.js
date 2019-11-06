var submitGame = firebase.functions().httpsCallable('submitGame');
submitGame({text: "doesnt matter"}).then(function(result) {
  // Read result of the Cloud Function.
  var sanitizedMessage = result.data.text;
  // ...
});
