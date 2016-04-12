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
var multAllelesIndic = [0,0]
var incomcoDomIndic = [0,0]
var sexLinkIndic = [0,0]
var traitAmt = 0
var Trait = {
	create: function(num) {
		get("1trait").style.visibility = "hidden"
		get("2trait").style.visibility = "hidden"
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
		get("crtArea").style.visibility = "hidden"
		
	},
	cross: function() {
		
	},
	graph: function() {
		
	}
}
var t = Trait