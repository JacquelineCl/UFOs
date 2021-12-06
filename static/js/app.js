// from data.js
const tableData = data;

// get table references
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
    });
  });
}

var filter = {
  datetime: null,
  city: null,
  state: null,
  country: null,
  shape: null,
  color: null
};

function updateFilters(filterType, filterId) {
  filter[filterType] = d3.select(filterId).property('value');
  filterTable();
  }
  
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that matches the filter values
    filteredData = filteredData.filter(row => {
      
      if (filter.datetime != null && filter.datetime != row.datetime){
        return false;
      } if (filter.city != null && filter.city != row.city){
          return false; 
        } if (filter.state != null && filter.state != row.state){
            return false;
          } if (filter.country != null && filter.country != row.country){
              return false;
            } if (filter.shape != null && filter.shape != row.shape){
                return false;
              } return true;
    });
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  

  // 2. Attach an event to listen for changes to each filter
  d3.select("#datetime").on("change", function(){
    updateFilters('datetime', '#datetime');
  });
  d3.select("#city").on("change", function(){
    updateFilters('city', '#city');
  });
  d3.select("#state").on("change", function(){
    updateFilters('state', '#state');
  });
  d3.select("#country").on("change", function(){
    updateFilters('country', '#country');
  });
  d3.select("#shape").on("change", function(){
    updateFilters('shape', '#shape');
  });


  
  // Build the table when the page loads
  buildTable(tableData);
