get = function(id) {return document.getElementById(id)}

var Trait = {
	create: function(num) {
		get("1trait").style.visibility = "hidden"
		get("2trait").style.visibility = "hidden"
		console.log(num)
		for(i = 0;i < num;i++){
			get("intArea").innerHTML += "<br> Trait " + (i+1) + "<br> <input type='radio' name='incom-coDom" + (i+1) + "' id='normDom" + (i+1) + "'>Normal Dominance</input> <input type='radio' name='incom-coDom" + (i+1) + "' id='incomDom" + (i+1) + "'>Incompletely Dominant</input> <input type='radio' name='incom-coDom" + (i+1) + "' id='coDom" + (i+1) + "'>Co-Dominant</input>"
			get("intArea").innerHTML += "<br> <input type='checkbox' id='sex-link" + (i+1) + "'>Sex-Linked</input> <br> <input type='checkbox' id='multAlleles'" + (i+1) + "'>Multiple Alleles</input><br>"
		}
		get("intArea").innerHTML += "<button onclick='t.specify(num)' value='Confirm'>"
	},
	specify: function(traitNum) {
		
	},
	parents: function() {
		
	},
	cross: function() {
		
	}
}
var t = Trait