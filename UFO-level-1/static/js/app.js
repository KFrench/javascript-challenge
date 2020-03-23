// from data.js
var tableData = data;

var tbody = d3.select("tbody");
// YOUR CODE HERE!
function buildtable(ufodata){
tbody.html("");
ufodata.forEach(function(sitings) {
  // console.log(sitings);
  var row = tbody.append("tr");

  Object.entries(sitings).forEach(function([key, value]) {
    // console.log(key, value);
    // Append a cell to the row for each value
    var cell = row.append("td");
    cell.text(value);
  });
});
}
buildtable(tableData);

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {
// Set variables for all input values 
  var inputdate = d3.select("#datetime").property("value");
  var inputcity = d3.select("#city").property("value");
  var inputstate = d3.select("#state").property("value");
  var inputcountry = d3.select("#country").property("value");
  var inputshape = d3.select("#shape").property("value");
  var filterdata = tableData

  console.log(inputdate);
  console.log(tableData);

 //Set if statements for all inputs whether one or all are entered 
  if(inputdate){
    filterdata = tableData.filter(date => date.datetime == inputdate);}
  if(inputcity){  
    filterdata = tableData.filter(cityname => cityname.city == inputcity);}
  if(inputstate){
    filterdata = tableData.filter(statename => statename.state == inputstate);}
  if(inputcountry){
    filterdata = tableData.filter(countryname => countryname.country == inputcountry);}
  if(inputshape){
    filterdata = tableData.filter(shapename => shapename.shape === inputshape);}    
  console.log(filterdata);

buildtable(filterdata);
});
