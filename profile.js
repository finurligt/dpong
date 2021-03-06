var id;

//get id
var url = new URL(window.location.href)
id = url.searchParams.get("id");

firebase.database().ref('/players/').once('value').then(function(snapshot) {
  if (id=="") {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        id=user.displayName;
        document.getElementById('profile-li').classList.add("active");
      }
      setUpProfile(snapshot);
    });
  } else {
    setUpProfile(snapshot);
  }

});

function setUpProfile(snapshot) {
  var player = snapshot.val()[id];
  var players = Object.values(snapshot.val()).sort(function(a, b) {
    return b.rating-a.rating;
  }).map(a => a.name);
  if (player==null) {
    document.getElementById('user-not-found').style.display="block";
  } else {
    document.getElementById('profile').style.display="block";
    document.getElementById('name').innerHTML=player.name;
    document.getElementById('rating').innerHTML=player.rating;
    document.getElementById('rank').innerHTML=players.indexOf(id)+1;
  }
  firebase.database().ref('/playerGames/' + id).once('value').then(function(snapshot) {
    if (snapshot.val()!=null) {
      fillTable(Object.values(snapshot.val()))
    }
  });
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
        hours = '' + d.getHours(),
        minutes = '' + d.getMinutes();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    if (hours.length < 2)
        hours = '0' + hours;
    if (minutes.length < 2)
        minutes = '0' + minutes;
    return [year, month, day].join('-')+" "+hours + ":" + minutes;
}


function fillTable(data) {

  var gamesArray = Object.values(data);

  gamesArray = gamesArray.sort(function(a ,b) {
    return b.timestamp-a.timestamp;
  })

  console.log(gamesArray);

  const tableBody = document.getElementById('tableBody');
  let dataHtml = '';
  gamesArray.forEach(function(child) {
    if (child.winners.includes(id)) {
      //player is winner in this game
      console.log("this happened");
      dataHtml += `<tr class="winner-game"><td><a href="profile.html?id=${child.winners[0]}">${child.winners.join(", ")}</a></td><td><a href="profile.html?id=${child.losers[0]}">${child.losers.join(", ")}</a></td><td><a href="#">${child.rating}</a></td><td><a href="#">${formatDate(new Date(child.timestamp))}</a></td></tr>`
    } else {
      dataHtml += `<tr class="loser-game"><td><a href="profile.html?id=${child.winners[0]}">${child.winners.join(", ")}</a></td><td><a href="profile.html?id=${child.losers[0]}">${child.losers.join(", ")}</a></td><td><a href="#">${child.rating}</a></td><td><a href="#">${formatDate(new Date(child.timestamp))}</a></td></tr>`
    }
  });

  tableBody.innerHTML = dataHtml;

}
