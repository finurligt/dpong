var submitGame = firebase.functions().httpsCallable('submitGame');


function submitButton() {
  /**
  Use this function to submit a game. If more fields are needed just add them
  and I will fix backend later.
  **/
  var winnersArray = document.getElementById('winners').value.replace(' ','').split(',');
  var loserArray = document.getElementById('losers').value.replace(' ','').split(',');
  submitGame({
    winners: winnersArray,
    losers: loserArray
  });
  console.log("submitGame function called");
}
