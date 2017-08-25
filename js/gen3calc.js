function DamageCalc(){
	//Full credit to G_Heinz for writing the original Phython script.
	
	////-- Input --
	input = document.getElementById("calcInput").elements;//Get form elements
	//save variables that are used multiple times
	L = input.attackerLevel.value;
	A = input.attackerAtkStat.value;
	BP = input.attackerMoveBP.value;
	atkStage = input.attackerAtkStage.value;
	D = input.defenderDefStat.value;
	HP = input.defenderHPStat.value;
	defStage = input.defenderDefStage.value;
	weathercheck = radioValue("weathercheck");
		
	////-- output part 1 --
	output = "Level " + L + " ";
	if(atkStage>=0) output += "+";
	output += atkStage + " " + A + " with " + BP + "BP";
	output += " vs ";
	if(defStage>=0) output += "+";
	output += defStage + " " + D + " with " + HP + "HP:\n";
	
	////-- modify stats based boost --
	if(input.badgeBoost.checked) A = Math.trunc(A*1.1);//10% Badgeboost
	if(input.itemBoost.checked) A = Math.trunc(A*1.1);//10% Itemboost
	if(input.abilityBoost.checked) BP = Math.trunc(BP*1.5);//50% Basepower boost from Ability
	//AtkStages
	if(atkStage > 0) {
        SM = (10 + (5 * atkStage)) / 10;
	} else if(atkStage < 0) {
        SM = 10 / (10 + (-5 * atkStage));
	} else  SM = 1;
	A = Math.trunc(A*SM);//Apply atkStage multiplier to atkStat
	//DefStages
	if(defStage > 0) {
		SM = (10 + (5 * defStage)) / 10;
	} else if(defStage < 0) {
		SM = 10 / (10 + (-5 * defStage));
	}
	D = Math.trunc(D*SM);//Apply defStage multiplier to defStat

	////-- calculate base damage --
	basedamage = Math.trunc(Math.trunc(Math.trunc(2*L/5+2)*A*BP/D)/50);
	
	////-- Modifiers --
	//LightScreen/Reflect and Double Battle modifiers
	if(input.doublecheck.checked) {doublecheck=true;} else {doublecheck=false;}
	if(input.lsrefcheck.checked) {lsrefcheck=true;} else {lsrefcheck=false;}
	if(lsrefcheck && doublecheck===false) {//Light Screen or Reflect apply hitting one target
		basedamage = Math.trunc(basedamage/2)
	} else if(lsrefcheck && doublecheck) {//Light Screen or Reflect apply hitting both targets
		basedamage = Math.trunc((basedamage*2)/3)
	}
	if(doublecheck == "y") basedamage = Math.trunc(basedamage/2);
	//Weather modifiers
	if(weathercheck=="goodweather") basedamage = Math.trunc(basedamage*1.5);
	if(weathercheck=="badweather") basedamage = Math.trunc(basedamage/2);
	basedamage += 2;
	//factor in STAB and type-effectiveness
	if(input.stabcheck.checked) basedamage = Math.trunc(basedamage*1.5);
	damage = basedamage * radioValue("typeeffect");

	////-- damage rolls --
	missedrange = 0;
	for (i=85;i<101;i++) {
		roll = Math.trunc((damage*i)/100)
		if(HP - roll > 0) missedrange += 1;
	}
	OHKO = 100 * ((16 - missedrange)/16);
	minroll = Math.trunc((damage*85)/100);
	//Calculating damage in %
	percminroll = minroll / HP * 100;
	percdamage = damage / HP * 100;
	
	////-- output part 2 --
	output += minroll + " (" + percminroll + "%) ";
	output += " - ";
	output += damage + " (" + percdamage + "%)\n";
	output += OHKO + "% chance to OHKO";
	
	////-- delivery --
	outputarea = document.getElementsByName("outputarea")[0];
	outputarea.innerHTML=output;
	if(OHKO==0) {
		outputarea.className="lives";
	} else if(OHKO==100) {
		outputarea.className="kill";
	} else {
		outputarea.className="range";
	}
}