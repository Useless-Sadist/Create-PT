elemCreate = function(type,styleType,id,name,text,div,action=function(){},trigger="click"){
	var elem = document.createElement(type)
	elem.type = styleType
	elem.id = id
	elem.name = name
	if(styleType == "button"){
		elem.value = text
	}
	else{
		elem.textContent = text
	}
	elem.addEventListener(trigger, action)
	get(div).appendChild(elem)
}
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
			//get("crtArea").innerHTML += "<br> Trait " + (i+1) + "<br> <input type='radio' name='incom-coDom" + (i+1) + "' id='normDom" + (i+1) + "'>Normal Dominance</input> <input type='radio' name='incom-coDom" + (i+1) + "' id='incomDom" + (i+1) + "'>Incompletely Dominant</input> <input type='radio' name='incom-coDom" + (i+1) + "' id='coDom" + (i+1) + "'>Co-Dominant</input>"
			//get("crtArea").innerHTML += "<br> <input type='checkbox' id='sex-link" + (i+1) + "'>Sex-Linked</input> <br> <input type='checkbox' id='multAlleles" + (i+1) + "'>Multiple Alleles</input><br>"
			elemCreate("input","radio","normDom" + i,"incom-coDom" + i,"Normal Dominance","crtArea")
			elemCreate("input","radio","incomDom" + i,"incom-coDom" + i,"Incomplete Dominance","crtArea")
			elemCreate("input","radio","coDom" + i,"incom-coDom" + i,"Co-Dominance","crtArea")
			elemCreate("input","checkbox","sex-link" + i,undefined,"Sex-Linked","crtArea")
			elemCreate("input","checkbox","multAlleles" + i,undefined,"Multiple Alleles","crtArea")
		}
		//get("crtArea").innerHTML += "<br><button onclick='t.assign(" + num + ")'>Confirm</button>"
		elemCreate("input","button","butConfirm",undefined,"Confirm","crtArea",function(){t.assign(num)})
	},
	assign: function(num){
		for( i=0; i<num; i++){
			if(get("multAlleles"+ (i+1)).checked == "true"){
				get("crtArea").innerHTML = "<input type='number' min='1' max='3' id=''"
			}
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