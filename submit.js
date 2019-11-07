var submitGame = firebase.functions().httpsCallable('submitGame');


function exampleCall() {
  /**
  Use this function to submit a game. If more fields are needed just add them
  and I will fix backend later.
  **/
  submitGame({
    winners: ["winner1","winner2"],
    losers: ["loser1","loser2"]
  });
  console.log("submitGame function called");
}
exampleCall();
