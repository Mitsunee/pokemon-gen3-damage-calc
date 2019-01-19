//SETUP VARS
var input = undefined,//Get form elements
	currentPick = "AtkType",
	AtkType = "normal",
	DefTypeA = "normal",
	DefTypeB = "none",
	typeReference = {
		normal:{
			type:"Physical",
			none:1,
			normal:1,
			fire:1,
			water:1,
			grass:1,
			electric:1,
			ice:1,
			psychic:1,
			ghost:0,
			dark:1,
			poison:1,
			ground:1,
			rock:0.5,
			steel:0.5,
			fighting:1,
			flying:1,
			bug:1,
			dragon:1},
		fire:{
			type:"Special",
			none:1,
			normal:1,
			fire:0.5,
			water:0.5,
			grass:2,
			electric:1,
			ice:2,
			psychic:1,
			ghost:1,
			dark:1,
			poison:1,
			ground:1,
			rock:0.5,
			steel:2,
			fighting:1,
			flying:1,
			bug:2,
			dragon:0.5},
		water:{
			type:"Special",
			none:1,
			normal:1,
			fire:2,
			water:0.5,
			grass:0.5,
			electric:1,
			ice:1,
			psychic:1,
			ghost:1,
			dark:1,
			poison:1,
			ground:2,
			rock:2,
			steel:1,
			fighting:1,
			flying:1,
			bug:1,
			dragon:0.5},
		grass:{
			type:"Special",
			none:1,
			normal:1,
			fire:0.5,
			water:2,
			grass:0.5,
			electric:1,
			ice:1,
			psychic:1,
			ghost:1,
			dark:1,
			poison:0.5,
			ground:2,
			rock:2,
			steel:0.5,
			fighting:1,
			flying:0.5,
			bug:0.5,
			dragon:0.5},
		electric:{
			type:"Special",
			none:1,
			normal:1,
			fire:1,
			water:2,
			grass:0.5,
			electric:0.5,
			ice:1,
			psychic:1,
			ghost:1,
			dark:1,
			poison:1,
			ground:0,
			rock:1,
			steel:1,
			fighting:1,
			flying:2,
			bug:1,
			dragon:0.5},
		ice:{
			type:"Special",
			none:1,
			normal:1,
			fire:0.5,
			water:0.5,
			grass:2,
			electric:1,
			ice:0.5,
			psychic:1,
			ghost:1,
			dark:1,
			poison:1,
			ground:2,
			rock:1,
			steel:0.5,
			fighting:1,
			flying:2,
			bug:1,
			dragon:2},
		psychic:{
			type:"Special",
			none:1,
			normal:1,
			fire:1,
			water:1,
			grass:1,
			electric:1,
			ice:1,
			psychic:0.5,
			ghost:1,
			dark:0,
			poison:2,
			ground:1,
			rock:1,
			steel:0.5,
			fighting:2,
			flying:1,
			bug:1,
			dragon:1},
		ghost:{
			type:"Physical",
			none:1,
			normal:0,
			fire:1,
			water:1,
			grass:1,
			electric:1,
			ice:1,
			psychic:2,
			ghost:2,
			dark:0.5,
			poison:1,
			ground:1,
			rock:1,
			steel:0.5,
			fighting:1,
			flying:1,
			bug:1,
			dragon:1},
		dark:{
			type:"Special",
			none:1,
			normal:1,
			fire:1,
			water:1,
			grass:1,
			electric:1,
			ice:1,
			psychic:2,
			ghost:2,
			dark:0.5,
			poison:1,
			ground:1,
			rock:1,
			steel:0.5,
			fighting:0.5,
			flying:1,
			bug:1,
			dragon:1},
		poison:{
			type:"Physical",
			none:1,
			normal:1,
			fire:1,
			water:1,
			grass:2,
			electric:1,
			ice:1,
			psychic:1,
			ghost:0.5,
			dark:1,
			poison:0.5,
			ground:0.5,
			rock:0.5,
			steel:0,
			fighting:1,
			flying:1,
			bug:1,
			dragon:1},
		ground:{
			type:"Physical",
			none:1,
			normal:1,
			fire:2,
			water:1,
			grass:0.5,
			electric:2,
			ice:1,
			psychic:1,
			ghost:1,
			dark:1,
			poison:2,
			ground:1,
			rock:2,
			steel:2,
			fighting:1,
			flying:0,
			bug:0.5,
			dragon:1},
		rock:{
			type:"Physical",
			none:1,
			normal:1,
			fire:2,
			water:1,
			grass:1,
			electric:1,
			ice:2,
			psychic:1,
			ghost:1,
			dark:1,
			poison:1,
			ground:0.5,
			rock:1,
			steel:0.5,
			fighting:0.5,
			flying:2,
			bug:2,
			dragon:1},
		steel:{
			type:"Physical",
			none:1,
			normal:1,
			fire:0.5,
			water:0.5,
			grass:1,
			electric:0.5,
			ice:2,
			psychic:1,
			ghost:1,
			dark:1,
			poison:1,
			ground:1,
			rock:2,
			steel:0.5,
			fighting:1,
			flying:1,
			bug:1,
			dragon:1},
		fighting:{
			type:"Physical",
			none:1,
			normal:2,
			fire:1,
			water:1,
			grass:1,
			electric:1,
			ice:2,
			psychic:0.5,
			ghost:0,
			dark:2,
			poison:0.5,
			ground:1,
			rock:2,
			steel:2,
			fighting:1,
			flying:0.5,
			bug:0.5,
			dragon:1},
		flying:{
			type:"Physical",
			none:1,
			normal:1,
			fire:1,
			water:1,
			grass:2,
			electric:0.5,
			ice:1,
			psychic:1,
			ghost:1,
			dark:1,
			poison:1,
			ground:1,
			rock:0.5,
			steel:0.5,
			fighting:2,
			flying:1,
			bug:2,
			dragon:1},
		bug:{
			type:"Physical",
			none:1,
			normal:1,
			fire:0.5,
			water:1,
			grass:2,
			electric:1,
			ice:1,
			psychic:2,
			ghost:0.5,
			dark:2,
			poison:0.5,
			ground:1,
			rock:1,
			steel:0.5,
			fighting:0.5,
			flying:0.5,
			bug:1,
			dragon:1},
		dragon:{
			type:"Special",
			none:1,
			normal:1,
			fire:1,
			water:1,
			grass:1,
			electric:1,
			ice:1,
			psychic:1,
			ghost:1,
			dark:1,
			poison:1,
			ground:1,
			rock:1,
			steel:0.5,
			fighting:1,
			flying:1,
			bug:1,
			dragon:2},
		blankcopy:{
			type:"Physical",
			none:1,
			normal:1,
			fire:1,
			water:1,
			grass:1,
			electric:1,
			ice:1,
			psychic:1,
			ghost:1,
			dark:1,
			poison:1,
			ground:1,
			rock:1,
			steel:1,
			fighting:1,
			flying:1,
			bug:1,
			dragon:1}
	};

//DMGCALC
function rollDamage(base) {
		// rolls all possible damage rolls and returns information aquired
		// param: base 	- base dmg
		rolls=[];
		rollsVerbose="";
		for (let i=85;i<101;i++) {
			roll =0| (base*i)/100;
			rolls.push(roll);
			rollsVerbose += roll;
			if(i!=100) rollsVerbose += ", ";
		}		
		return {"rolls":rolls.reverse(),"rollsVerbose":rollsVerbose};
	}
function DamageCalc(){
	////-- Input --
	if(input === undefined) input = document.getElementsByForm("calcInput");
	let ATK = input.attackerAtkStat.value,
		basePower = input.attackerMoveBP.value,
		DEF = input.defenderDefStat.value,
		weathercheck = radioValue("weathercheck"),
		aS = input.attackerAtkStage.value,
		dS = input.defenderDefStage.value,
		Lv = input.attackerLevel.value,
		HP = input.defenderHPStat.value,
		baseDmg,baseCritDmg,i;
		
	////-- output[0]: Repeat information for reference --
	let summary = "[Level " + input.attackerLevel.value + " ";
	if(aS>=0) summary += "+";
	summary += aS + " " + ATK + " with " + basePower + "BP" + "] vs [";
	if(dS>=0) summary += "+";
	summary += dS + " " + DEF + " with " + input.defenderHPStat.value + "HP]";
	let output = summary+"\n";
	
	////-- modify stats based boost --
	if(input.badgeBoostAtk.checked) ATK	   =0| ATK*1.1;	  //10% Badgeboost to ATK
	if(input.badgeBoostDef.checked) DEF	   =0| DEF*1.1;	  //10% Badgeboost to DEF
	if(input.itemBoost.checked)		ATK	   =0| ATK*1.1;	  //10% Itemboost
	if(input.abilityBoost.checked)  basePower =0| basePower*1.5;//50% Basepower boost from Ability
	
	////-- Calculate Stat Stage Modifiers --
	//AtkStages
	switch(true) {
		case (aS > 0): 
			aSM = (10 + (5 * aS)) / 10;
			break;
		case (aS < 0):
			aSM = 10 / (10 + (-5 * aS));
			break;
		default:
			aSM = 1;
	}
	
	//DefStages
	switch(true) {
		case (dS < 0):
			dSM = 10 / (10 + (-5 * dS));
			break;
		case (dS > 0):
			dSM = (10 + (5 * dS)) / 10;
			break;
		default:
			dSM = 1;
	}
	
	////-- Calculate Base Damage--
	baseDmg =0| Math.trunc(Math.trunc(2*Lv/5+2)*(ATK*aSM)*basePower/(DEF*dSM))/50;
	//Crits only apply atkstages if > 0 and defstages if < 0
	baseCritDmg =0| Math.trunc(Math.trunc(2*Lv/5+2)*(ATK*(aS <= 0 ? 1 : aSM))*basePower/(DEF*(dS >= 0 ? 1 : dSM)))/50;
	
	////-- basedamage modifiers --
	if(input.lsrefcheck.checked) {//Light Screen or Reflect?
		if(input.doublecheck.checked) {//in doubles
			baseDmg =0| baseDmg*(2/3);
			baseCritDmg =0| baseCritDmg*(2/3);
		} else {//against single target
			baseDmg =0| baseDmg*(0.5);
			baseCritDmg =0| baseCritDmg*(0.5);
		}
	}
	if(input.doublecheck.checked){//doubles dmg halving
		baseDmg =0| baseDmg*(0.5);
		baseCritDmg =0| baseCritDmg*(0.5);
	}
	switch(weathercheck){
		case "goodweather"://beneficial weather
			baseDmg =0| baseDmg*(1.5);
			baseCritDmg =0| baseCritDmg*(1.5);
			break;
		case "badweather"://bad weather
			baseDmg =0| baseDmg*(0.5);
			baseCritDmg =0| baseCritDmg*(0.5);
			break;
	}
	//Add two and double crits
	baseDmg+=2;
	baseCritDmg+=2;
	baseCritDmg*=2;
	
	if(input.stabcheck.checked){//+50% from STAB
		baseDmg =0| baseDmg*(1.5);
		baseCritDmg =0| baseCritDmg*(1.5);
	}
	//type effectiveness
	baseDmg =0| baseDmg*(input.typeeffect.value);
	baseCritDmg =0| baseCritDmg*(input.typeeffect.value);
	
	
	////-- Perform dmg rolls --
	let noncrit = rollDamage(baseDmg),
		crit = rollDamage(baseCritDmg);
	
	////-- Non-Critical Hit --
	if(noncrit.rolls[15]<HP){
		noncrit.OHKO=0;
	} else {
		i=0;
		for(let roll of noncrit.rolls) {//Count rolls that kill
			if(roll>=HP) {i++;} else break;
		}
		noncrit.OHKO=i/16*100;
	}
	noncrit.minRollPercentage =0| noncrit.rolls[15]/HP*100;
	noncrit.maxRollPercentage =0| noncrit.rolls[0]/HP*100;
	//output
	if(input.outputVerbose.checked) {
		output += noncrit.rollsVerbose;
	} else {
		output += noncrit.rolls[15] + " (" + noncrit.minRollPercentage + "%) " + " - " + noncrit.rolls[0] + " (" + noncrit.maxRollPercentage + "%)";
	}
	output += "\n"+ noncrit.OHKO + "% chance to OHKO";
	if(input.outputVerbose.checked) output += " (" + noncrit.minRollPercentage + "% to " + noncrit.maxRollPercentage + "%)";
	
	////-- Critical Hit --
	if(input.showCrits.checked) {
		//processing
		if(crit.rolls[15]<HP){
			crit.OHKO=0;
		} else {
			i=0;
			for(let roll of noncrit.rolls) {
				if(roll>=HP) {i++;} else break;
			}
			crit.OHKO=i/16*100;
		}
		crit.minRollPercentage =0| crit.rolls[15]/HP*100;
		crit.maxRollPercentage =0| crit.rolls[0]/HP*100;
		//output
		input.outputarea.style.height="102px";
		output += "\n" + summary + " CRIT\n";
		if(input.outputVerbose.checked) {
			output  += crit.rollsVerbose + "\n" + crit.OHKO + "% chance to OHKO" + " (" + crit.minRollPercentage + "% to " + crit.maxRollPercentage + "%)";
		} else {
			output  += crit.rolls[15] + " (" + crit.minRollPercentage + "%) " + " - " + crit.rolls[0] + " (" + crit.maxRollPercentage + "%)" + "\n" + crit.OHKO + "% chance to OHKO";
		}
	} else input.outputarea.style.height="56px";
	
	////-- delivery --
	input.outputarea.innerHTML=output;
	switch(noncrit.OHKO) {
		case 0: 
			input.outputarea.className="lives";
			break;
		case 100:
			input.outputarea.className="kill";
			break;
		default:
			input.outputarea.className="range";
	}
}

//SEARCH
function pokeSearch(that) {//that is the calling form element's this
	let haystack,icon,errorDiv;
	switch(that.name) {
		case "defenderName":
			haystack = document.querySelector("#search-defender>table>tbody").children;
			icon=$("#defender-icon")[0];
			errorDiv=$("#search-defender-empty-result");
			errorDiv.hide();
			break;
		default:
			return false;
	}
	if(that.value == "") {
		for(let i of haystack) i.style.display="table-row";//show all rows
		icon.src="i/mons/icons/000.png";
		return false;
	}
	let foundMon=false;
	for(let i of haystack) {
		if(i.dataset.pokemonname.indexOfIgnoreCase(that.value)!==-1) {
			i.style.display="table-row";
			foundMon=true;
		} else {
			i.style.display="none";
		}
	}
	if(foundMon==false) errorDiv.show();
}
function pokeSearchPick(that,what) {//that is the selected pokemon's this, what is currently always "defender" until I add more stuff LOL
	//validate proper use of function
	let who = that.dataset,
		where;
	switch(what) {
		case "defender":
			where = [document.getElementById("defender-name"),document.querySelector("#defender-name+img")];
			break;
		default:
			return false;
	}
	//fill data
	where[0].value=who.pokemonname;
	where[1].src="i/mons/icons/"+who.pokemonid+".png";
	let type = who.pokemontype.split(",");
	currentPick="DefTypeA";
	pickType(type[0],false);
	currentPick="DefTypeB";
	pickType(type[1],false);
	
	//blur
	// where[0].blur();
}

//TYPE LIST AND EFFECTIVENESS
function openTypePicker(picking) {
	pickerDIV = document.getElementById("typePicker");
	switch(picking){
		case "AtkType":
			pickerDIV.getElementsByTagName("span")[0].innerHTML="Choose the Attack Type:";
			pickerDIV.style.left="172px";
			$(pickerDIV.getElementsByTagName("img")[0]).hide();
			break;
		case "DefTypeA":
			pickerDIV.getElementsByTagName("span")[0].innerHTML="Choose the Defender's first type:";
			pickerDIV.style.left="572px";
			$(pickerDIV.getElementsByTagName("img")[0]).hide();
			break;
		case "DefTypeB":
			pickerDIV.getElementsByTagName("span")[0].innerHTML="Choose the Defender's secondary type:";
			pickerDIV.style.left="718px";
			$(pickerDIV.getElementsByTagName("img")[0]).show();
			break;
	}
	pickerDIV.style.top="336px";
	currentPick = picking;
	$(pickerDIV).show();
	$(document.getElementById("typePicker-clicktrap")).show();
}
function pickType(pickedType,replaceIcon) {
	document.getElementById(currentPick+"Img").src="i/"+pickedType+".gif";
	switch(currentPick) {
		case "AtkType":
			AtkType=pickedType;
			break;
		case "DefTypeA":
			DefTypeA=pickedType;
			if(replaceIcon!==false) $("#defender-icon")[0].src="i/mons/icons/000.png"; 
			break;
		case "DefTypeB":
			DefTypeB=pickedType;
			if(replaceIcon!==false) $("#defender-icon")[0].src="i/mons/icons/000.png"; 
			break;
	}
	$('#typePicker').hide();
	$('#typePicker-clicktrap').hide();
	
	document.getElementById("typeeffect").value=typeReference[AtkType][DefTypeA] * typeReference[AtkType][DefTypeB];
	document.getElementById("MoveType").src="i/"+typeReference[AtkType]["type"]+".png";
	document.getElementById("MoveTypeText").innerHTML=typeReference[AtkType]["type"];
	DamageCalc();
}

//COLLECTION
function collectionAppendCurrent() {
	currentCalc = document.getElementById("calcInput").elements.outputarea.value;
	userTitle = document.getElementById("save-dialog").elements.calcName;
	currentCollection = document.getElementById("calc-collection").elements.collection;
	currentCollection.value += userTitle.value + "\n";
	currentCollection.value += currentCalc;
	currentCollection.value += "\r\n \r\n";
	$('#save-dialog').hide()
	$("#save-options").show();
	$("#collection-options").show();
	$("#calc-collection").show();
	currentCollection.style.height = (currentCollection.scrollHeight - 28)+"px";
	userTitle.value="";
}
function collectionSaveDialog() {
	$("#save-dialog").show().find('input[type=text]').focus();
	$("#save-options").hide();
	return;
}
function collectionSaveAs() {
	collectionArea = document.getElementById("collectionarea");
	if(collectionArea.value=="") return false;
	collectionContent = collectionArea.value.replace(/([^\r])\n/g, "$1\r\n");
	var blob = new Blob([collectionContent], {type: "text/plain;charset=Windows-1252"});
	
	d = new Date;
	saveDate = "";
	if(d.getDate() < 10) saveDate += "0";
	saveDate += d.getDate();
	if(d.getMonth()+1 < 10) saveDate += "0";
	saveDate += (d.getMonth() +1);
	saveDate += d.getFullYear();
	if(d.getHours() < 10) saveDate += "0";
	saveDate += d.getHours();
	if(d.getMinutes() < 10) saveDate += "0";
	saveDate += d.getMinutes();
	fileName = "damage-calcs-"+saveDate+".txt";
	
	saveAs(blob, fileName);
}
function collectionClear() {
	document.getElementById("collectionarea").value="";
	currentCollection.style.height = (currentCollection.scrollHeight)+"px";
	$("#collection-options").hide();
	$("#calc-collection").hide();
}