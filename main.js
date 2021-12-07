import { selector, data, createRow, create, createColumnNames } from "./helper.js"

window.onload = function() {
const table = selector("table")
const btn = selector("button")

// render initial data
data.forEach(rowData => {
  table.append(createRow(rowData))
});

btn.addEventListener("click", () => {
  
  //sort array
  data.sort((a, b) => b.input - a.input)
  
  //create empty table to show data
  const sortedTable = create("table")
  // create colums
  const columns = ["No.", "Name", "Input"]
  
  //append the columns to the table
  sortedTable.append(createColumnNames(columns))

  //append the sorted data to the table
  data.forEach(rowData => {
    sortedTable.append(createRow(rowData))
  })
  
  // append the table to the body
  document.body.append(sortedTable)
})
}