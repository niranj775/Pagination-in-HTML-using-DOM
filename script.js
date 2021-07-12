var xhr = new XMLHttpRequest(); //Creating the XMLHTTPRequest

xhr.open(
  "GET",
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json",
  true
); //Opening the XMLHTTPRequest

xhr.send(); //Sending the XMLHTTPRequest

xhr.onload = function () {
  var res = JSON.parse(this.response); //Saving the response from the API in res variable

  var head3 = document.createElement("h3"); // Creating the H3 tag using DOM
  head3.innerHTML = "DOM PAGINATION"; // Adding the contenet to the created H3 tag
  document.body.append(head3); // Appending the H3 Element to the body

  var table = document.createElement("table"); // Creating the table using DOM
  table.setAttribute("class", "table table-bordered"); // Adding class to the table

  var thead = document.createElement("thead"); // Creating the thead using DOM
  thead.setAttribute("class", "thead"); // Adding class to the thead

  var tr = document.createElement("tr"); // Creating the trow using DOM

  var th0 = createThTd("th", "ID"); // Creating th1 using DOM
  var th1 = createThTd("th", "Name"); // Creating th2 using DOM
  var th2 = createThTd("th", "Email"); // Creating th3 using DOM

  tr.append(th0, th1, th2); // Appending the ths to trow
  thead.append(tr); // Appending the trow to thead

  var tbody = document.createElement("tbody"); // Creating the tbody using DOM

  // Loop to create tr, th, tds and append it to the table
  let currentPage = 1;
  let pageSize = 10;
  if (currentPage == 1) {
    for (let i = 0; i < res.length / pageSize; i++) {
      var tr = document.createElement("tr");
      var th = createThTd("th", res[i].id);
      var td1 = createThTd("td", res[i].name);
      var td2 = createThTd("td", res[i].email);
      tr.append(th, td1, td2);
      tbody.append(tr);
    }
  }

  // Function to create the element
  function createThTd(ele, value) {
    var ele = document.createElement(ele);
    ele.innerHTML = value;
    return ele;
  }

  table.append(thead, tbody); // Appending the thead, tbody to table
  document.body.append(table); // Appending table to document body

  var nav = document.createElement("nav");
  nav.setAttribute("aria-label", "Page navigation example");

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
    a.addEventListener("click", display);
    a.innerHTML = i + 1;

    li.append(a);
    ul.append(li);
  }
  var linex = document.createElement("li");
  linex.setAttribute("class", "page-item");

  var anex = document.createElement("a");
  anex.setAttribute("class", "page-link");
  anex.setAttribute("click", displayNext);
  anex.innerHTML = "Next";

  linex.append(anex);
  ul.append(linex);
  nav.append(ul);

  document.body.append(nav);

  function display() {}
  function displayPrev() {}
  function displayNext() {}
};
