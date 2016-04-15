/*elemCreate = function(type,styleType,id,name,text,div,action=function(){},trigger="click"){
	var elem = document.createElement(type)
	elem.type = styleType
	elem.id = id
	elem.name = name
	if(styleType == "button"){
		elem.value = text
	}
	else{
		elem.innerHTML = text
	}
	elem.addEventListener(trigger, action)
	get(div).appendChild(elem)
	if(styleType == "button"){
		get(id).value = text
	}
	else{
		get(id).innerHTML = text
	}
}*/
get = function(id) {return document.getElementById(id)}
del = function(id) {get(id).parentNode.removeChild(get(id))}
var multAllelesIndic = [1,1]
var incomcoDomIndic = [0,0]
var sexLinkIndic = [0,0]
var trait1 = ["","","",""]
var trait2 = ["","","",""]
var traitAmt = 0
var Trait = {
	create: function(num) {
		del("1trait")
		del("2trait")
		traitAmt = num
		get("instructions").innerHTML = "Now, select the specific attributes of your trait" + (num > 1 ? "s." : ".")
		for(i = 1;i <= num;i++){ //i is one so code is compressed in element creation
			get("crtArea").innerHTML += "<br> Trait " + i + "<br> <input type='radio' name='incom-coDom" + i + "' id='normDom" + i + "' onchange='t.specify(" + i + ")' checked>Normal Dominance</input>" +
			"<input type='radio' name='incom-coDom" + i + "' id='incomDom" + i + "' onchange='t.specify(" + i + ")'>Incompletely Dominant</input>" +
			"<input type='radio' name='incom-coDom" + i + "' id='coDom" + i + "' onchange='t.specify(" + i + ")'>Co-Dominant</input>" +
			"<br> <input type='checkbox' id='sex-link" + i + "' onchange='t.specify(" + i + ")'>Sex-Linked</input> <br>" +
			"<input type='checkbox' id='multAlleles" + i + "' onchange='t.specify(" + i + ")'>Multiple Dominant Alleles</input><br>" +
			"<input type='number'min='2' max='3' id='multAlleleNumber" + i + "' value=2 onchange='t.specify(" + i + ")' disabled>Number of Dominant Alleles</input><br>"
			/*elemCreate("input","radio","normDom" + (i),"incom-coDom" + (i),"Normal Dominance","crtArea")
			elemCreate("input","radio","incomDom" + (i),"incom-coDom" + (i),"Incomplete Dominance","crtArea")
			elemCreate("input","radio","coDom" + (i),"incom-coDom" + (i),"Co-Dominance","crtArea")
			elemCreate("input","checkbox","sex-link" + (i),undefined,"Sex-Linked","crtArea")
			elemCreate("input","checkbox","multAlleles" + (i),undefined,"Multiple Alleles","crtArea",function(){t.specify(i)},"onchange")*/
		}
		get("crtArea").innerHTML += "<br><button onclick='t.assign(" + num + ")'>Confirm</button>"
		//elemCreate("input","button","butConfirm",undefined,"Confirm","crtArea",function(){t.assign(num)})
	},
	specify: function(num){
		if(get("multAlleles" + num).checked == true){
			get("multAlleleNumber" + num).disabled = false
			multAllelesIndic[num - 1] = parseInt(get("multAlleleNumber" + num).value)
			/*elemCreate("input","number","multAlleleNumber" + num,undefined,"Number of Alleles")
			get("multAlleleNumber" + num).min = 2
			get("multAlleleNumber" + num).max = 4*/
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
					trait1[j-1] = get("domAllele1" + j).value
				}
				else if(i == 2){
					trait2[j-1] = get("domAllele2" + j).value
				}
			}
			if(i == 1){
				trait1[3] = get("resAllele1").value
			}
			else if(i == 2){
				trait2[3] = get("resAllele2").value
			}
		}
		del("specArea")
		get("instructions").innerHTML = "Next, define which alleles the parents possess."
		get("overall").innerHTML += "<div id='parArea'></div>"
		get("parArea").innerHTML += "<div id='parMale'>Male Parent</div><br><div id='parFem'>Female Parent</div>"
		for(i = 0;i < traitNum;i++){
			
		}
	},
	cross: function() {
		
	},
	graph: function() {
		
	}
}
var t = Trait