var table = document.getElementById('playertable')

var array = [["1","Fabbe","1337"],["2","hurdur","1000"]];

/*
for (var i = 0; i < array.length; i++) {
  for (var j = 0; j < array[0].length; j++) {
    var a = document.createElement('a');
    a.title = array[i][j];
    table.rows[i+1].cells[j] = a;
  }
}
*/

var myTr = document.createElement('tr');
var myA = document.createElement('a');
var myTd = document.createElement('td');
var linkText = document.createTextNode("helloworld");
myA.appendChild(linkText);
myA.href="https://www.example.com/"
myTd.appendChild(myA);
myTd.className = "tableElement";
myTr.appendChild(myA);
table.appendChild(myTr);
