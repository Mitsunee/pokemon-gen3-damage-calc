var input = undefined;//Get form elements
var damage = {
	"basedmg": 0,
	"critdmg": 0,
	multiplier : function(x){
		// param: x - the multiplier to be added to both dmg types
		x = +x;
		this.basedmg =0| this.basedmg * x;
		this.critdmg =0| this.critdmg * x;
	},
	init : function(A,D,BP){
		// description: initiates the basedmg and factors in attack and defense stages
		// param: A  - modified atk stat
		// param: D  - modified def stat
		// param: BP - modified movebasepower
		
		aS = input.attackerAtkStage.value;
		dS = input.defenderDefStage.value;
		L = input.attackerLevel.value;
		//AtkStages
		if(aS > 0) {
			SM = (10 + (5 * aS)) / 10;
		} else if(aS < 0) {
			SM = 10 / (10 + (-5 * aS));
		} else  SM = 1;
		A =0| A*SM;//Apply atkStage multiplier to atkStat
		
		//DefStages (seperated because critical hits ignore positive defStages)
		if(dS < 0) {
			SM = 10 / (10 + (-5 * dS));
			D =0| D*SM;
		}
		//set critical hit basedmg
		this.critdmg =0| Math.trunc(Math.trunc(2*L/5+2)*A*BP/D)/50;
		
		if(dS > 0) {//positive defStage
			SM = (10 + (5 * dS)) / 10;
			D =0| D*SM;
		}
		//set non-critical basedmg
		this.basedmg =0| Math.trunc(Math.trunc(2*L/5+2)*A*BP/D)/50;
	},
	two : function() {
		// description: adds 2, because the source code does that.
		//              also doubles critdmg, because that needs to happen some point after here.
		this.basedmg +=2;
		this.critdmg +=2;
		this.critdmg *=2;
	},
	roll : function(HP,base) {
		// rolls all possible damage rolls and returns information aquired
		// param: HP 	- Defender's HP stat
		// param: base 	- base dmg (put either damage.basedmg or damage.critdmg)
		rolls=[];
		rollsVerbose="";
		missedrange = 0;
		for (i=85;i<101;i++) {
			roll =0| (base*i)/100;
			rolls.push(roll);
			rollsVerbose += roll;
			if(i!=100) rollsVerbose += ", ";
			if(HP - roll > 0) missedrange += 1;
		}
		OHKO = 100 * ((16 - missedrange)/16);
		percminroll =0|  rolls[0] * 100 / HP;
		percmaxroll =0| rolls[15] * 100 / HP;
		
		return {"rolls":rolls,"rollsVerbose":rollsVerbose,"OHKO":OHKO,"percminroll":percminroll,"percmaxroll":percmaxroll};
	}
}

function DamageCalc(){
	////-- Input --
	if(input === undefined) input = document.getElementById("calcInput").elements;
	ATK = input.attackerAtkStat.value;
	BasePower = input.attackerMoveBP.value;
	DEF = input.defenderDefStat.value;
	weathercheck = radioValue("weathercheck");
		
	////-- output[0]: Repeat information for reference --
	summary = "[Level " + input.attackerLevel.value + " ";
	if(input.attackerAtkStage.value>=0) summary += "+";
	summary += input.attackerAtkStage.value + " " + ATK + " with " + BasePower + "BP" + "] vs [";
	if(input.defenderDefStage.value>=0) summary += "+";
	summary += input.defenderDefStage.value + " " + DEF + " with " + input.defenderHPStat.value + "HP]";
	output = summary+"\n";
	
	////-- modify stats based boost --
	if(input.badgeBoostAtk.checked) ATK       =0| ATK*1.1;      //10% Badgeboost to ATK
	if(input.badgeBoostDef.checked) DEF       =0| DEF*1.1;      //10% Badgeboost to DEF
	if(input.itemBoost.checked)		ATK       =0| ATK*1.1;      //10% Itemboost
	if(input.abilityBoost.checked)  BasePower =0| BasePower*1.5;//50% Basepower boost from Ability
	
	////-- initialize --
	damage.init(ATK,DEF,BasePower);
	
	////-- basedamage modifiers --
	if(input.lsrefcheck.checked) {//Light Screen or Reflect?
		if(input.doublecheck.checked) {//in doubles
			damage.multiplier(2/3);
		} else {//against single target
			damage.multiplier(0.5);
		}
	}
	if(input.doublecheck.checked)   damage.multiplier(0.5);//doubles dmg halving
	if(weathercheck=="goodweather") damage.multiplier(1.5);//beneficial weather
	if(weathercheck=="badweather")  damage.multiplier(0.5);//bad weather
	damage.two();
	if(input.stabcheck.checked) damage.multiplier(1.5);//+50% from STAB
	damage.multiplier(input.typeeffect.value);//type effectiveness
	
	////-- Roll non-critical hit --
	noncrit = damage.roll(input.defenderHPStat.value,damage.basedmg);
	if(input.outputVerbose.checked) {
		output += noncrit.rollsVerbose;
	} else {
		output += noncrit.rolls[0] + " (" + noncrit.percminroll + "%) " + " - " + noncrit.rolls[15] + " (" + noncrit.percmaxroll + "%)";
	}
	output += "\n"+ noncrit.OHKO + "% chance to OHKO";
	if(input.outputVerbose.checked) output += " (" + noncrit.percminroll + "% to " + noncrit.percmaxroll + "%)";
	
	////-- Critical Hit --
	if(input.showCrits.checked) {
		input.outputarea.style.height="102px";
		output += "\n" + summary + " CRIT\n";
		crithit = damage.roll(input.defenderHPStat.value,damage.critdmg);
		if(input.outputVerbose.checked) {
			output  += crithit.rollsVerbose + "\n"
					+ crithit.OHKO + "% chance to OHKO" + " (" + crithit.percminroll + "% to " + crithit.percmaxroll + "%)";
		} else {
			output  += crithit.rolls[0] + " (" + crithit.percminroll + "%) " + " - " + crithit.rolls[15] + " (" + crithit.percmaxroll + "%)" + "\n"
					+ crithit.OHKO + "% chance to OHKO";
		}
	} else input.outputarea.style.height="56px";
	
	////-- delivery --
	input.outputarea.innerHTML=output;
	if(noncrit.OHKO==0) {
		input.outputarea.className="lives";
	} else if(noncrit.OHKO==100) {
		input.outputarea.className="kill";
	} else {
		input.outputarea.className="range";
	}
}