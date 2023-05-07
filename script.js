function ColourTable(value) {

  var table = document.getElementById("myTable");
  var totalRows = table.rows.length;
  //To display all values
  for (var x = totalRows - 1; x >= 0; x--) {
    let totalColumnCount = table.rows[x].cells.length;

    for (var y = 0; y <= totalColumnCount; y++) {
      if (value[y] > 0) {
        table.rows[x].cells[y].style.backgroundColor = "blue";
        value[y] = value[y] - 1;
      }

    }
  }

}

window.onload = function generateTable() {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");
  // creating all cells
  for (let i = 0; i < 11; i++) {
    // creates a table row
    const row = document.createElement("tr");
    for (let j = 0; j < 11; j++) {
      var cell = document.createElement("td");
      const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  tbl.setAttribute("border", "1");
  tbl.setAttribute("id", "myTable");
  const value = [0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0];
  ColourTable(value);
}
