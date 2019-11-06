var submitGame = firebase.functions().httpsCallable('submitGame');


function exampleCall() {
  /**
  Use this function to submit a game. If more fields are needed just add them
  and I will fix backend later.
  **/
  submitGame({
    winner: "hello",
    loser: "nooo"
  });
  console.log("submitGame function called");
}
