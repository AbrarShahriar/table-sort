import { selector, createRow, create, createColumnNames } from "./helper.js"

const addDataBtn = selector(".add_data_btn")
const nameInput = selector("#name")
const userInput = selector("#input")
const btn = selector(".sortBtn")
const table = selector("table")
const saveBtn = selector(".save")


// create a table
const sortedTable = create("table")
// append it to the dom, we will update the content of this table later
document.body.append(sortedTable)


saveBtn.addEventListener("click", () => {
  
  // take and show screenshot of the main table
  // to take screenshot of the sorted table, put sorted table in toPng(sortedTable) like this.
  domtoimage.toPng(table)
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
    
    // take and download screenshot of the table
    domtoimage.toBlob(table)
    .then(function (blob) {
        saveAs(blob, 'table.png');
    });
    

})

// initial data
let data = [
  {
    id: 1,
    name: "adib",
    input: 10
  },
  {
    id: 2,
    name: "anto",
    input: 12
  }
]
// initial id count
let id = 3

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
