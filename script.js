var xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json",
  true
);

xhr.send();

xhr.onload = function () {
  var res = JSON.parse(this.response);

  var head3 = document.createElement("h3");
  head3.innerHTML = "DOM PAGINATION";
  document.body.append(head3);

  var table = document.createElement("table");
  table.setAttribute("class", "table table-bordered");

  var thead = document.createElement("thead");
  thead.setAttribute("class", "thead");

  var tr = document.createElement("tr");

  var th0 = createThTd("th", "ID");
  var th1 = createThTd("th", "Name");
  var th2 = createThTd("th", "Email");

  tr.append(th0, th1, th2);
  thead.append(tr);

  var tbody = document.createElement("tbody");

  let currentPage = 0;
  let pageSize = 10;
  if (currentPage == 0) {
    pageload("0");
  }

  function createThTd(ele, value) {
    var ele = document.createElement(ele);
    ele.innerHTML = value;
    return ele;
  }

  function pageload(x) {
    for (let i = x * 10; i < x * 10 + res.length / pageSize; i++) {
      var tr = document.createElement("tr");
      var th = createThTd("th", res[i].id);
      var td1 = createThTd("td", res[i].name);
      var td2 = createThTd("td", res[i].email);
      tr.append(th, td1, td2);
      tbody.append(tr);
    }
  }

  table.append(thead, tbody);
  document.body.append(table);

  var nav = document.createElement("nav");
  nav.setAttribute("aria-label", "Page navigation example");
  nav.setAttribute("class", "d-flex justify-content-center");

  var ul = document.createElement("ul");
  ul.setAttribute("class", "pagination");

  var liprev = document.createElement("li");
  liprev.setAttribute("class", "page-item");

  var aprev = document.createElement("a");
  aprev.setAttribute("class", "page-link");
  aprev.addEventListener("click", displayPrev);
  aprev.innerHTML = "Previous";

  liprev.append(aprev);
  ul.append(liprev);

  for (let i = 0; i < res.length / pageSize; i++) {
    var li = document.createElement("li");
    li.setAttribute("class", "page-item");

    var a = document.createElement("a");
    a.setAttribute("class", "page-link");
    a.addEventListener("click", (e) => display(i));
    a.innerHTML = i + 1;

    li.append(a);
    ul.append(li);
  }
  var linex = document.createElement("li");
  linex.setAttribute("class", "page-item");

  var anex = document.createElement("a");
  anex.setAttribute("class", "page-link");
  anex.addEventListener("click", displayNext);
  anex.innerHTML = "Next";

  linex.append(anex);
  ul.append(linex);
  nav.append(ul);

  document.body.append(nav);

  function display(selectedPage) {
    deleteData();
    currentPage = selectedPage;

    pageload(currentPage);
  }
  function displayPrev() {
    if (currentPage > 0) {
      deleteData();
      currentPage -= 1;
      pageload(currentPage);
    }
  }
  function displayNext() {
    if (currentPage < 9) {
      deleteData();
      currentPage += 1;
      pageload(currentPage);
    }
  }
  function deleteData() {
    var del = document.querySelector("tbody").children;
    for (let e of del) e.remove();
  }
};
