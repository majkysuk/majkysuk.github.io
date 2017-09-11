function tryit(main) {
	var x = "5" , y= 10 ; 
	z = + x + y ;
document.write(z);
}



var ar = [2,4,6,1,3,5];

function max (ar) {
	var m = Math.max.apply( Math, ar );
	
	document.write (m);
}

function www(arr){

	var arr = new Array(5), i;

		for(i = 0; i < arr.length; i++) {

		    arr[i] = +prompt('Enter number');

		}


	var max = Math.max.apply(null, arr);

	 
	alert(max);

}
