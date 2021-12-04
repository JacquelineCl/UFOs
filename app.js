// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}

// // Takes two numbers and adds them
// function addition(a, b) {
//     return a + b;
//   }
// // Functions can call other functions
// function doubleAddition(c, d) {
//     var total = addition(c, d) * 2;
//     return total;
//   }

// console.log(doubleAddition(65,34));

// let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
// console.log(friends);

// function listLoop(userList) {
//   for (var i = 0; i < userList.length; i++) {
//     console.log(userList[i]);
//   }
// }

// listLoop(friends);

// let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

// for (var i = 0; i < vegetables.length; i++) {
//   console.log("I love " + vegetables[i]);
// }
