get = function(id) {return document.getElementById(id)}
del = function(id) {get(id).parentNode.removeChild(get(id))}
var multAllelesIndic = [1,1]
var incomcoDomIndic = [0,0]
var sexLinkIndic = [0,0]
var trait1 = []
var trait2 = []
var gamMale = []
var gamFem = []
var malAll = []
var femAll = []
var kids = []
var Trait = {
	create: function(num) {
		del("1trait")
		del("2trait")
		get("instructions").innerHTML = "Now, select the specific attributes of your trait" + (num > 1 ? "s." : ".")
		for(i = 1;i <= num;i++){ //i is one so code is compressed in element creation
			get("crtArea").innerHTML += "<br> Trait " + i + "<br> <input type='radio' name='incom-coDom" + i + "' id='normDom" + i + "' onchange='t.specify(" + i + ")' checked>Normal Dominance</input>" +
			"<input type='radio' name='incom-coDom" + i + "' id='incomDom" + i + "' onchange='t.specify(" + i + ")'>Incompletely Dominant</input>" +
			"<input type='radio' name='incom-coDom" + i + "' id='coDom" + i + "' onchange='t.specify(" + i + ")'>Co-Dominant</input>" +
			"<br> <input type='checkbox' id='sex-link" + i + "' onchange='t.specify(" + i + ")'>Sex-Linked</input> <br>" +
			"<input type='checkbox' id='multAlleles" + i + "' onchange='t.specify(" + i + ")'>Multiple Dominant Alleles</input><br>" +
			"<input type='number'min='2' max='3' id='multAlleleNumber" + i + "' value=2 onchange='t.specify(" + i + ")' disabled>Number of Dominant Alleles</input><br>"
		}
		get("crtArea").innerHTML += "<br><button onclick='t.assign(" + num + ")'>Confirm</button>"
	},
	specify: function(num){
		if(get("multAlleles" + num).checked == true){
			get("multAlleleNumber" + num).disabled = false
			multAllelesIndic[num - 1] = parseInt(get("multAlleleNumber" + num).value)
		}
		else{
			get("multAlleleNumber" + num).disabled = true
			multAllelesIndic[num - 1] = 1
		}
		if(get("normDom" + num).checked == true){
			incomcoDomIndic[num - 1] = 0
		}
		else if(get("incomDom" + num).checked == true){
			incomcoDomIndic[num - 1] = 1
		}
		else if(get("coDom" + num).checked == true){
			incomcoDomIndic[num - 1] = 2
		}
		if(get("sex-link" + num).checked == true){
			sexLinkIndic[num - 1] = 1
		}
		else{
			sexLinkIndic[num - 1] = 0
		}
	},
	assign: function(traitNum) {
		get("overall").innerHTML += "<div id='specArea'></div>"
		del("crtArea")
		get("instructions").innerHTML = "Now, assign values to the alleles."
		for(i=1;i<=traitNum;i++){
			get("specArea").innerHTML += "Trait " + i + ":<br><br>" 
			for(j=1;j<=multAllelesIndic[i-1];j++){
				get("specArea").innerHTML += "<input type='text' maxlength=1 id='domAllele" + i + j + "'>Dominant Allele " + j + "</input><br>"
			}
			get("specArea").innerHTML += "<input type='text' maxlength=1 id='resAllele" + i + "'>Recessive Allele </input><br><br>"
		}
		get("specArea").innerHTML += "<input type='button' id='traitSpecConfirm' onclick='t.parents(" + traitNum + ")' value='Confirm'></input>"
	},
	parents: function(traitNum){
		for(i=1;i<=traitNum;i++){
			for(j=1;j<=multAllelesIndic[i-1];j++){
				if(i == 1){
					trait1[j] = get("domAllele1" + j).value
				}
				else if(i == 2){
					trait2[j] = get("domAllele2" + j).value
				}
			}
			if(i == 1){
				trait1[0] = get("resAllele1").value
			}
			else if(i == 2){
				trait2[0] = get("resAllele2").value
			}
		}
		del("specArea")
		get("instructions").innerHTML = "Next, define which alleles the parents possess."
		get("overall").innerHTML += "<div id='parArea'></div>"
		get("parArea").innerHTML += "<div id='parMale'>Male Parent<br></div><br><div id='parFem'>Female Parent<br></div>"
		for(i = 0;i < traitNum;i++){
			get("parMale").innerHTML += "Trait " + (i+1) + ": <br>"
			get("parFem").innerHTML += "Trait " + (i+1) + ": <br>"
			for(j=0;j<2;j++){
				get("parMale").innerHTML += "<select id='allele" + i + j + "Male'></select>"
				get("parFem").innerHTML += "<select id='allele" + i + j + "Fem'></select>"
				for(k = 0;k <= multAllelesIndic[i];k++){
					get("allele" + i + j + "Male").innerHTML += "<option value='" + (i == 0 ? trait1[k] : trait2[k]) + "'>" + (i == 0 ? trait1[k] : trait2[k]) + "</option>"
					get("allele" + i + j + "Fem").innerHTML += "<option value='" + (i == 0 ? trait1[k] : trait2[k]) + "'>" + (i == 0 ? trait1[k] : trait2[k]) + "</option>"
				}
				get("parMale").innerHTML += "<br>"
				get("parFem").innerHTML += "<br>"
			}
			if(sexLinkIndic[i] == 1){
				del("allele" + i + "1Male")
				get("parMale").innerHTML += "<text id='allele" + i + "1Male>Y</text>" 
			}
		}
		get("parArea").innerHTML += "<button onclick='t.cross(" + traitNum + ")'>Confirm</button>"
	},
	cross: function(traitNum) {
		if(traitNum == 1){
			malAll = [get("allele00Male").value,get("allele01Male").value]
			femAll = [get("allele00Fem").value,get("allele01Fem").value]
		}
		else if(traitNum == 2){
			malAll = [get("allele00Male").value,get("allele01Male").value,get("allele10Male").value,get("allele11Male").value]
			femAll = [get("allele00Fem").value,get("allele01Fem").value,get("allele10Fem").value,get("allele11Fem").value] 
		}
		del("parArea")
		get("overall").innerHTML += "<div id='graphArea'></div>"
		if(traitNum == 1){
			kids = [malAll[0] + femAll[0],malAll[1] + femAll[0],malAll[0] + femAll[1],malAll[1] + femAll[1]]
		}
		else if(traitNum == 2){
			gamMale = [[malAll[0],malAll[2]],[malAll[0],malAll[3]],[malAll[1],malAll[2]],[malAll[1],malAll[3]]] //nested arrays are essential to prevent spaghetti
			gamFem = [[femAll[0],femAll[2]],[femAll[0],femAll[3]],[femAll[1],femAll[2]],[femAll[1],femAll[3]]]
			var count = 0
			for(i=0;i<4;i++){
				for(j=0;j<4;j++){
					kids[count] = (gamMale[i][0] + gamFem[j][0] + gamMale[i][1] + gamFem [j][1])
					count++
				}
			}
			get("graphArea").innerHTML += "Male Gametes:<br>"
			for(i in gamFem){
				get("graphArea").innerHTML += gamMale[i][0] + gamMale[i][1] + (i < (gamMale.length - 1) ? ", " : "<br><br>")
			}
			get("graphArea").innerHTML += "Female Gametes:<br>"
			for(i in gamMale){
				get("graphArea").innerHTML += gamFem[i][0] + gamFem[i][1] + (i < (gamMale.length - 1) ? ", " : "<br><br>")
			}
		}
		get("graphArea").innerHTML += "Children:<br>"
		for(i in kids){
			get("graphArea").innerHTML += kids[i] + (i < (kids.length - 1) ? ", " : "")
		}
		get("graphArea").innerHTML += "<br><br><br><table id='kidsTable' style='table' align='center'></table>"
		if(traitNum == 1){
			for(i=0;i<2;i++){
				get("kidsTable").innerHTML += "<tr id='row" + i + "'></tr>"
				for(j=0;j<2;j++){
					get("row" + i).innerHTML += "<td>" + kids[(i*2) + j] + "</td>"
				}
			}
		}
		else if(traitNum == 2){
			for(i=0;i<4;i++){
				get("kidsTable").innerHTML += "<tr id='row" + i + "'></tr>"
				for(j=0;j<4;j++){
					get("row" + i).innerHTML += "<td>" + kids[(i*4) + j] + "</td>"
				}
			}
		}
		get("graphArea").innerHTML += "<br><br><br><button id='restart' onclick='t.restart()'>Restart</button>"
	},
	restart: function(){
		del("graphArea")
		get("overall").innerHTML += "<div id='crtArea'><button id='1trait' onclick='t.create(1)'>1 Trait</button><button id='2trait' onclick='t.create(2)'>2 Traits</button></div>"
		multAllelesIndic = [1,1]
		incomcoDomIndic = [0,0]
		sexLinkIndic = [0,0]
		trait1 = []
		trait2 = []
		gamMale = []
		gamFem = []
		malAll = []
		femAll = []
		kids = []
	}
}
var t = Trait