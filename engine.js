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
var Trait = {
	create: function(num) {
		get("1trait").style.visibility = "hidden"
		get("2trait").style.visibility = "hidden"
		get("instructions").innerHTML = "Now, select the specific attributes of your trait(s)"
		for(i = 1;i <= num;i++){ //i is one so code is compressed in element creation
			get("crtArea").innerHTML += "<br> Trait " + i + "<br> <input type='radio' name='incom-coDom" + i + "' id='normDom" + i + "'>Normal Dominance</input> <input type='radio' name='incom-coDom" + i + "' id='incomDom" + i + "'>Incompletely Dominant</input> <input type='radio' name='incom-coDom" + i + "' id='coDom" + i + "'>Co-Dominant</input>"
			get("crtArea").innerHTML += "<br> <input type='checkbox' id='sex-link" + i + "'>Sex-Linked</input> <br> <input type='checkbox' id='multAlleles" + i + "' onchange='t.specify(" + i + ")'>Multiple Alleles</input><br>"
			//elemCreate("input","radio","normDom" + (i),"incom-coDom" + (i),"Normal Dominance","crtArea")
			//elemCreate("input","radio","incomDom" + (i),"incom-coDom" + (i),"Incomplete Dominance","crtArea")
			//elemCreate("input","radio","coDom" + (i),"incom-coDom" + (i),"Co-Dominance","crtArea")
			//elemCreate("input","checkbox","sex-link" + (i),undefined,"Sex-Linked","crtArea")
			//elemCreate("input","checkbox","multAlleles" + (i),undefined,"Multiple Alleles","crtArea",function(){t.specify(i)},"onchange")
		}
		get("crtArea").innerHTML += "<br><button onclick='t.assign(" + num + ")'>Confirm</button>"
		//elemCreate("input","button","butConfirm",undefined,"Confirm","crtArea",function(){t.assign(num)})
	},
	specify: function(num){
		for(i=1;i<=num;i++){
			if(get("multAlleles" + i).checked == "true"){
				alert(num)
				get("crtArea").innerHTML += "<input type='number' min='1' max='3' id='multAlleleNumber" + i + "'>Number of Alleles</input>"
				/*elemCreate("input","number","multAlleleNumber" + num,undefined,"Number of Alleles")
				get("multAlleleNumber" + num).min = 2
				get("multAlleleNumber" + num).max = 4*/
			}
		}
	},
	assign: function(traitNum) {
		get("crtArea").style.visibility = "hidden"
	},
	parents: function() {
		
	},
	cross: function() {
		
	}
}
var t = Trait