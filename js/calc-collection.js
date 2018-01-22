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
	return false;
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