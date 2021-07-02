var xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json",
  true
);
xhr.send();
xhr.onload = function () {
  var res = JSON.parse(this.response);
};

var head3 = document.createElement("h3");
head3.innerHTML = "DOM PAGINATION";
document.body.append(head3);

var table = document.createElement("table");
table.setAttribute("class", "table");

var thead = document.createElement("thead");
thead.setAttribute("class", "thead-dark");

var tr = document.createElement("tr");

var th0 = createThTd("th", "ID");
var th1 = createThTd("th", "Name");
var th2 = createThTd("th", "Email");

function createThTd(ele, value) {
  var ele = document.createElement(ele);
  ele.innerHTML = value;
  return ele;
}

tr.append(th0, th1, th2);
thead.append(tr);
table.append(thead);

document.body.append(table);
