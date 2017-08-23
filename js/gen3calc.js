function DamageCalc(){ //Note that this is a python port. If you just got cancer, blame the snake, not the cat who ported it :P
	//Full credit to G_Heinz for writing the original Phython script.

	//Read Variables from types number or range
	L = document.getElementsByName("L")[0].value;
	A = document.getElementsByName("Atk")[0].value;
	P = document.getElementsByName("BP")[0].value;
	D = document.getElementsByName("Def")[0].value;
	HP = document.getElementsByName("HPvalue")[0].value;
	xitem = document.getElementsByName("AStage")[0].value;
	defstage = document.getElementsByName("DStage")[0].value;
	//Read Checkboxes
	if(document.getElementsByName("badgeboost")[0].checked) {badgeboost="y";} else {badgeboost="n";}
	if(document.getElementsByName("softwater")[0].checked) {softwater="y";} else {softwater="n";}
	if(document.getElementsByName("torrentcheck")[0].checked) {torrentcheck="y";} else {torrentcheck="n";}
	if(document.getElementsByName("doublecheck")[0].checked) {doublecheck="y";} else {doublecheck="n";}
	if(document.getElementsByName("stabcheck")[0].checked) {stabcheck="y";} else {stabcheck="n";}
	if(document.getElementsByName("lsrefcheck")[0].checked) {lsrefcheck="y";} else {lsrefcheck="n";}
	//Read type-effectiveness
	typeeffect = +radioValue("typeeffect");
	//Read weathercheck
	weathercheck = radioValue("weathercheck");
	if(weathercheck=="goodweather") {raincheck="y";} else {raincheck="n";}
	if(weathercheck=="badweather") {suncheck="y";} else {suncheck="n";}
	
	//output part 1
	output = "Lvl" + L + " ";
	if(xitem>=0) output += "+";
	output += xitem + " " + A + " with " + P + "BP";
	output += " vs ";
	if(defstage>=0) output += "+";
	output += defstage + " " + D + " with " + HP + "HP:\n";
	
	//next modify the attack stat based on the answers to the above
	if(badgeboost=="y")	A = Math.trunc(A*1.1);
	if(softwater=="y") A = Math.trunc(A*1.1);
	
	//Calculate Attack Stages
	SMx = 10; SMy = 10;
	if(xitem > 0) {
		SMx += 5 * xitem;
	} else if(xitem < 0) {
		SMy += -5 * xitem;
	}
	SM = SMx / SMy;
	A = Math.trunc(A*SM);
	
	//Calculate Defense Stages
	SMx = 10; SMy = 10;
	if(defstage > 0) {
		SMx += 5 * defstage;
	} else if(defstage < 0) {
		SMy += -5 * defstage;
	}
	SM = SMx / SMy;
	D = Math.trunc(D*SM);
	
	//Torrent
	if(torrentcheck=="y") P = Math.trunc(P*1.5);

	//third calculate the base damage of the attack before a few additional modifiers
	basedamage = Math.trunc(Math.trunc(Math.trunc(2*L/5+2)*A*P/D)/50)

	//then include the relevant modifiers
	if(lsrefcheck=="y" && doublecheck=="n") {
		basedamage = Math.trunc(basedamage/2)
	} else if(lsrefcheck=="y" && doublecheck=="y") {
		basedamage = Math.trunc((basedamage*2)/3)
	}
	if(raincheck == "y") basedamage = Math.trunc(basedamage*1.5);
	if(suncheck == "y") basedamage = Math.trunc(basedamage*0.5);
	if(doublecheck == "y") basedamage = Math.trunc(basedamage/2);
	basedamage += 2;

	//factor in STAB
	if(stabcheck == "y") basedamage = Math.trunc(basedamage*1.5);

	//then type-effectiveness
	damage = basedamage * typeeffect;

	//finally factor in damage variance and print
	missedrange = 0
	for (i=85;i<101;i++) {
		roll = Math.trunc((damage*i)/100)
		if(HP - roll > 0) missedrange += 1;
	}
	OHKO = 100 * ((16 - missedrange)/16);
	minroll = Math.trunc((damage*85)/100);
	//Calculating damage in %
	percminroll = minroll / HP * 100;
	percdamage = damage / HP * 100;
	
	//output part 2
	output += minroll + " (" + percminroll + "%) ";
	output += " - ";
	output += damage + " (" + percdamage + "%)\n";
	output += OHKO + "% chance to OHKO";
	
	//put it out
	outputarea = document.getElementsByName("outputarea")[0];
	outputarea.innerHTML=output;
	console.log(OHKO);
	if(OHKO==0) {
		outputarea.className="lives";
	} else if(OHKO==100) {
		outputarea.className="kill";
	} else {
		outputarea.className="range";
	}
}