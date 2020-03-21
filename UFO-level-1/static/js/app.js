// from data.js
var tableData = data;

var tbody = d3.select("tbody");
// YOUR CODE HERE!
function buildtable(ufodata){
ufodata.forEach(function(sitings) {
  console.log(sitings);
  var row = tbody.append("tr");

  Object.entries(sitings).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    var cell = row.append("td");
    cell.text(value);
  });
});
}
buildtable(tableData);

