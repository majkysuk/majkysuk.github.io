
function generateTable(parent) {

	
	var table, x, y, i, j;

	table = document.createElement("table");
	
	table.style.textAlign = "right";
	
	table.style.fontFamily = "Courier";
	
	table.style.fontSize = "40px";

	table.setAttribute("border", 10);


	for ( i = 1; i < 10; i++) {

		x = document.createElement("tr");

		for (j=1; j<10; j++) {

			y = document.createElement(i == 1 || j == 1 ? "th" : "td");

			y.appendChild(document.createTextNode(i*j));

			y.style.padding = "4px";

			y.style.width = 100 / 9 + "%";

			if (i == j) {
				y.style.color = "white";
				y.style.background = "Black";
			}

			if (i < j) {				
				y.style.background = "aqua";
			}

			if (i > j) {				
				y.style.background = "yellow";
			}

				
			x.appendChild(y);

		}

		table.appendChild(x);

	}

	document.body.appendChild(table);

}