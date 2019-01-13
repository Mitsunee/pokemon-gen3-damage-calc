function pokeSearch(that) {//that is the calling form element's this
	let haystack;
	switch(that.name) {
		case "defenderName":
			haystack = document.querySelector("#search-defender>table>tbody").children;
			break;
		default:
			return false;
	}
	if(that.value == "") {
		for(let i of haystack) i.style.display="table-row";//show all rows
		return false;
	}
	for(let i of haystack) {
		if(i.dataset.pokemonname.indexOfIgnoreCase(that.value)!==-1) {
			i.style.display="table-row";
		} else {
			i.style.display="none";
		}
	}
}