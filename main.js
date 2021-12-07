import { selector, createRow, create, createColumnNames } from "./helper.js"

const addDataBtn = selector(".add_data_btn")
const nameInput = selector("#name")
const userInput = selector("#input")

// create a table
const sortedTable = create("table")
// append it to the dom, we will update the content of this table later
document.body.append(sortedTable)


const table = selector("table")
const btn = selector(".sortBtn")

// initial data
let data = []
// initial id count
let id = 1

// on click add data
addDataBtn.addEventListener("click", () => {
  const newData = {
    id: id,
    name: nameInput.value,
    input: parseInt(userInput.value)
  }
  
  data.push(newData)
  showData()
  
  id++
})

// render initial data
showData()

function showData() {
  const columns = ["No.", "Name", "Input"]
  table.innerHTML = null
  table.append(createColumnNames(columns))
 
  data.forEach(rowData => {
    table.append(createRow(rowData))
  });
}

function showUpdatedData(sortedData) {
  const columns = ["No.", "Name", "Input"]
  sortedTable.innerHTML = null
  sortedTable.append(createColumnNames(columns))
 
  sortedData.forEach(rowData => {
    sortedTable.append(createRow(rowData))
  });
}

btn.addEventListener("click", () => {
  
  //sort array
  let sortedData = Array.from(data).sort((a, b) => b.input - a.input)
  
  // pass the sorted array and show the updated data
  showUpdatedData(sortedData)
})
