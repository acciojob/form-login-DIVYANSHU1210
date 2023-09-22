function getFormvalue() {


	
	var form = document.getElementById("form1");

	var fname = form.elements["fname"].value;
	var lname = form.elements["lname"].value;

	console.log(fname, lname);
	
}
