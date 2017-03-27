
function generateTable(parent) {

	
	var table, x, y, i, j;
	var f = [0,1];
	
	table = document.createElement("table");
	
	table.style.textAlign = "right";
	
	table.style.fontFamily = "Courier";
	
	table.style.fontSize = "40px";

	table.setAttribute("border", 10);


	for (i = 0; i < 21; i++) {

		x = document.createElement("td");

		x.appendChild(document.createTextNode(i));

		x.style.color = "black";

		x.style.background = "aqua";

					
			for (j = 2; j < 21; j++) {

				y = document.createElement("tr");

				//y.style.padding = 4"px";

				f.push(f[(j - 1)] + f[(j - 2)]);

				y.appendChild(document.createTextNode(f[i]));

			}
		

		x.appendChild(y);

		
		table.appendChild(x);

	}

	document.body.appendChild(table);

}