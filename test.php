<!DOCTYPE html>
<html>
<head>
<style>
body,html{font-family:'Arial',sans-serif;}
table#pokelist {
	margin-top:1em;
	border-collapse:collapse;
}
table#pokelist img.poketype {
	width:32px;
	height:16px;
}
table#pokelist tr {
	border:2px solid #3333DD;
	background:#DDDDFF;
}
</style>
<script>
/** SEARCH FUNCTION **/
function searchFilter(el,hay,output) {//el is the <form>, hay is the id of the <table>, output is the id of a div for outputting stats of the search
	checkDataId = false;//initialize this to be false;
	input = el.elements["pokelist-search-input"].value;//make this better later for multiple searches :\
	haystack = document.getElementById(hay).children[0].children;
	if(input==""||input==null||input==undefined) {//empty input
		document.getElementById(output).innerHTML="";
		for(i=0;i<haystack.length;i++) {haystack[i].style.display="table-row";}//show all rows
		return;
	}
	filteredInput = input.replace(/[^0-9A-Za-z-. ]/g,"");//Filter out invalid characters
	if(filteredInput=="") {//empty input after filtering
		document.getElementById(output).innerHTML="";
		for(i=0;i<haystack.length;i++) {haystack[i].style.display="table-row";}//show all rows
		return;
	}
	if(filteredInput.length<4 && !isNaN(filteredInput)) checkDataId = true;
	needle = filteredInput.toLowerCase();//forcing lowercase to make the search case-insensitive
	document.getElementById(output).innerHTML="Search for '"+filteredInput+"'";//Mirror userinput
	searchCounter = 0;
	for(i=0;i<haystack.length;i++) {//go through haystack
		thisMonName=haystack[i].dataset.pokemonname.toLowerCase();//get name and make it lowercase
		thisMonId=haystack[i].dataset.pokemonid;//get id too, just for readability
		if(thisMonName.indexOf(needle) != -1 || (checkDataId && thisMonId.indexOf(needle) != -1)) {//find needle in either the name or id if applicable
			haystack[i].style.display="table-row";//display this row
			searchCounter++;//add to search counter
		} else {
			haystack[i].style.display="none";//do not display this row
		}
	}
	if(searchCounter==0) {
		document.getElementById(output).innerHTML+=" found no results.";
	} else {
		document.getElementById(output).innerHTML+=" found "+searchCounter+" results.";
	}
}
</script>
</head>
<body><?php
$json = file_get_contents("js/pokestats.json");
$data = json_decode($json,true);
?>
<form id="pokelist-search" oninput="searchFilter(this,'pokelist','pokelist-search-output');" onsubmit="void(0);return false;">
<label for="pokelist-search-input">Search: </label><input type="text" name="pokelist-search-input" id="pokelist-search-input"> <span id="pokelist-search-output"></span>
</form>
<table id="pokelist"><?php
foreach($data["pokemon"] as $pokemon) {
	echo "<tr data-pokemonname=\"".$pokemon["name"]."\" data-pokemonid=\"".$pokemon["id"]."\">".PHP_EOL;
	echo "<td><img src=\"i/mons/icons/".$pokemon["id"].".png\"></td>".PHP_EOL;
	echo "<td>".$pokemon["id"]."</td>".PHP_EOL;
	echo "<td colspan=\"4\">".$pokemon["name"]."</td>".PHP_EOL;
	echo "<td";
	if ($pokemon["type"][1]=="none") echo ' colspan="2"';
	echo "><img src=\"typeicons/".$pokemon["type"][0].".gif\" alt=\"".$pokemon["type"][0]."\" class=\"poketype\"></td>".PHP_EOL;
	if ($pokemon["type"][1]!="none") echo "<td><img src=\"typeicons/".$pokemon["type"][1].".gif\" alt=\"".$pokemon["type"][1]."\" class=\"poketype\"></td>".PHP_EOL;
	echo "<td>".$pokemon["basestats"][0]."</td>".PHP_EOL;
	echo "<td>".$pokemon["basestats"][1]."</td>".PHP_EOL;
	echo "<td>".$pokemon["basestats"][2]."</td>".PHP_EOL;
	echo "<td>".$pokemon["basestats"][3]."</td>".PHP_EOL;
	echo "<td>".$pokemon["basestats"][4]."</td>".PHP_EOL;
	echo "<td>".$pokemon["basestats"][5]."</td>".PHP_EOL;
	echo "</tr>".PHP_EOL;
}
?></table>
</body></html>