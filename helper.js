export const selector = s => document.querySelector(s)
export const selectorAll = s => document.querySelectorAll(s)
export const create = s => document.createElement(s)

// create a single row
export const createRow = (singleRowData) => {
  
  //create a tr tag
  const tr = create("tr")
  
  //create an array to contain the 3 td 
  const tds = []
  
  // push the td to the array
  for (let i = 0; i < 3; i++) {
    tds.push(create("td"))
  }
  
  // update the td with the passed data
  tds[0].textContent = singleRowData.id
  tds[1].textContent = singleRowData.name
  tds[2].textContent = singleRowData.input
  
  // append the td to tho row
  tr.append(...tds)
  
  // return the tr
  return tr
}

// create column (no, name, input) row
export const createColumnNames = (cols) =>
 {
   // create a row
   const tr = create("tr")
   // create empty array to hold the td
   const tds = []
   
   //for each column, create a td and assign the text to it and append it to the tr
   cols.forEach(col => {
     const td = create("td")
     td.textContent = col
     tr.append(td)
   })
   
   //return to tr
   return tr
 }
 
export const data = [
  {
    id: 1,
    name: "noyon",
    input: 12
  },
  {
    id: 2,
    name: "adib",
    input: 17
  },
  {
    id: 3,
    name: "anto",
    input: 16
  },
  {
    id: 4,
    name: "salman",
    input: 11
  },
  {
    id: 5,
    name: "tanvir",
    input: 18
  },
  {
    id: 6,
    name: "amjad",
    input: 14
  },
]

window.onerror = (err, i, j, k) => {
  console.log(err, i, j, k);
}