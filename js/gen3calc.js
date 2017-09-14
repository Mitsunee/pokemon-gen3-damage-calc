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
	if(input.outputVerbose.checked) {outputVerbose=true;} else {outputVerbose=false;}
	outputarea = input.outputarea;
		
	////-- output part 1 --
	output = "Level " + L + " ";
	if(atkStage>=0) output += "+";
	output += atkStage + " " + A + " with " + BP + "BP";
	output += " vs ";
	if(defStage>=0) output += "+";
	output += defStage + " " + D + " with " + HP + "HP:\n";
	
	////-- modify stats based boost --
	if(input.badgeBoostAtk.checked) A =0| A*1.1;//10% Badgeboost to ATK
	if(input.badgeBoostDef.checked) D =0| D*1.1;//10% Badgeboost to DEF
	if(input.itemBoost.checked) A =0| A*1.1;//10% Itemboost
	if(input.abilityBoost.checked) BP =0| BP*1.5;//50% Basepower boost from Ability
	//AtkStages
	if(atkStage > 0) {
        SM = (10 + (5 * atkStage)) / 10;
	} else if(atkStage < 0) {
        SM = 10 / (10 + (-5 * atkStage));
	} else  SM = 1;
	A =0| A*SM;//Apply atkStage multiplier to atkStat
	//DefStages
	if(defStage > 0) {
		SM = (10 + (5 * defStage)) / 10;
	} else if(defStage < 0) {
		SM = 10 / (10 + (-5 * defStage));
	} else  SM = 1;
	D =0| D*SM;//Apply defStage multiplier to defStat
	
	////-- calculate base damage --
	basedamage = Math.trunc(Math.trunc(Math.trunc(2*L/5+2)*A*BP/D)/50);
	
	////-- Modifiers --
	//LightScreen/Reflect and Double Battle modifiers
	if(input.doublecheck.checked) {doublecheck=true;} else {doublecheck=false;}
	if(input.lsrefcheck.checked) {lsrefcheck=true;} else {lsrefcheck=false;}
	if(lsrefcheck && doublecheck===false) {//Light Screen or Reflect apply hitting one target
		basedamage =0| basedamage/2;
	} else if(lsrefcheck && doublecheck) {//Light Screen or Reflect apply hitting both targets
		basedamage =0| (basedamage*2)/3;
	}
	if(doublecheck) basedamage =0| basedamage/2;
	//Weather modifiers
	if(weathercheck=="goodweather") basedamage =0| basedamage*1.5;
	if(weathercheck=="badweather") basedamage =0| basedamage/2;
	basedamage += 2;
	//factor in STAB and type-effectiveness
	if(input.stabcheck.checked) basedamage =0| basedamage*1.5;
	damage =0| basedamage * radioValue("typeeffect");

	////-- damage rolls --
	missedrange = 0;
	for (i=85;i<101;i++) {
		roll =0| (damage*i)/100;
		if(input.outputVerbose.checked) {
			output += roll;
			if(i != 100) output += ", ";
		}
		if(HP - roll > 0) missedrange += 1;
	}
	OHKO = 100 * ((16 - missedrange)/16);
	minroll =0| (damage*85)/100;
	//Calculating damage in %
	percminroll =0| minroll * 100 / HP;
	percmaxroll =0| damage * 100 / HP;
	
	////-- output part 2 --
	if(input.outputVerbose.checked) {
		output += "\n"
	} else {
		output += minroll + " (" + percminroll + "%) ";
		output += " - ";
		output += damage + " (" + percmaxroll + "%)\n";
	}
	output += OHKO + "% chance to OHKO";
	if(input.outputVerbose.checked) output += " (" + percminroll + "% to " + percmaxroll + "%)";
	
	////-- CRITICAL HITS -- (for now this is just an adjusted copy of the code)
	if(input.showCrits.checked) {
		output += "\nCritical Hits:\n";
		outputarea.style.height="102px";
		
		////-- re-read and modify Defense stat -- 
		D = input.defenderDefStat.value;//re-read Defense Stat
		if(input.badgeBoostDef.checked) D =0| D*1.1;//10% Badgeboost to DEF
		//DefStages
		if(defStage < 0) {
			SM = 10 / (10 + (-5 * defStage));
		} else  SM = 1;//positive defStages get ingored
		D =0| D*SM;//Apply defStage multiplier to defStat
		
		////-- calculate base damage --
		basedamage = Math.trunc(Math.trunc(Math.trunc(2*L/5+2)*A*BP/D)/50);
		
		////-- Modifiers --
		//LightScreen/Reflect and Double Battle modifiers
		if(lsrefcheck && doublecheck===false) {//Light Screen or Reflect apply hitting one target
			basedamage =0| basedamage/2;
		} else if(lsrefcheck && doublecheck) {//Light Screen or Reflect apply hitting both targets
			basedamage =0| (basedamage*2)/3;
		}
		if(doublecheck) basedamage =0| basedamage/2;
		//Weather modifiers
		if(weathercheck=="goodweather") basedamage =0| basedamage*1.5;
		if(weathercheck=="badweather") basedamage =0| basedamage/2;
		basedamage += 2;
		//factor in STAB and type-effectiveness
		if(input.stabcheck.checked) basedamage =0| basedamage*1.5;
		damage =0| basedamage * radioValue("typeeffect") * 2;

		////-- damage rolls --
		missedrange = 0;
		for (i=85;i<101;i++) {
			roll =0| (damage*i)/100;
			if(input.outputVerbose.checked) {
				output += roll;
				if(i != 100) output += ", ";
			}
			if(HP - roll > 0) missedrange += 1;
		}
		critOHKO = 100 * ((16 - missedrange)/16);
		minroll =0| (damage*85)/100;
		//Calculating damage in %
		percminroll =0| minroll * 100 / HP;
		percmaxroll =0| damage * 100 / HP;
		
		////-- output part 2 --
		if(input.outputVerbose.checked) {
			output += "\n"
		} else {
			output += minroll + " (" + percminroll + "%) ";
			output += " - ";
			output += damage + " (" + percmaxroll + "%)\n";
		}
		output += critOHKO + "% chance to OHKO";
		if(input.outputVerbose.checked) output += " (" + percminroll + "% to " + percmaxroll + "%)";
	} else outputarea.style.height="56px";
	
	////-- delivery --
	outputarea.innerHTML=output;
	if(OHKO==0) {
		outputarea.className="lives";
	} else if(OHKO==100) {
		outputarea.className="kill";
	} else {
		outputarea.className="range";
	}
}