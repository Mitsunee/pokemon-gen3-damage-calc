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