
firebase.database().ref('/news/').once('value').then(function(snapshot) {
  console.log("detta hände");

  data=snapshot.val();
  if (data!=null) {
    console.log("no news");

    fillNews(data)
  }
});

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


function fillNews(data) {
  console.log("detta hände");

  var newsArray = Object.values(data);

  newsArray = newsArray.sort(function(a ,b) {
    return b.timestamp-a.timestamp;
  })

  console.log(newsArray);

  const tableBody = document.getElementById('newsfeed');
  let dataHtml = '';
  newsArray.forEach(function(child) {
    dataHtml += `<div class="news-post"><h2>${child.title}</h2><h4>${child.text}</h4><h5 class="news-timestamp">${formatDate(child.timestamp)}</h5></div>`;

  });

  tableBody.innerHTML = dataHtml;

}
