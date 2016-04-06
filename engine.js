get = function(id) {return document.getElementById(id)}
var multAllelesIndic = [0,0]
var coDomIndic = [0,0]
var incomDomIndic = [0,0]
var sexLinkIndic = [0,0]
var Trait = {
	create: function(num) {
		get("1trait").style.visibility = "hidden"
		get("2trait").style.visibility = "hidden"
		get("instructions").innerHTML = "Now, select the specific attributes of your trait(s)"
		for(i = 0;i < num;i++){
			get("crtArea").innerHTML += "<br> Trait " + (i+1) + "<br> <input type='radio' name='incom-coDom" + (i+1) + "' id='normDom" + (i+1) + "'>Normal Dominance</input> <input type='radio' name='incom-coDom" + (i+1) + "' id='incomDom" + (i+1) + "'>Incompletely Dominant</input> <input type='radio' name='incom-coDom" + (i+1) + "' id='coDom" + (i+1) + "'>Co-Dominant</input>"
			get("crtArea").innerHTML += "<br> <input type='checkbox' id='sex-link" + (i+1) + "'>Sex-Linked</input> <br> <input type='checkbox' id='multAlleles'" + (i+1) + "'>Multiple Alleles</input><br>"
		}
		get("crtArea").innerHTML += "<br><button onclick='t.assign(" + num + ")'>Confirm</button>"
	},
	assign: function(num){
		for(i=0,i<num,i++){
			
		}
	},
	specify: function(traitNum) {
		get("crtArea").style.visibility = "hidden"
	},
	parents: function() {
		
	},
	cross: function() {
		
	}
}
var t = Trait