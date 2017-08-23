function radioValue(radioName) {
	rObj=document.getElementsByName(radioName);
    for (var i=0; i<rObj.length; i++) if (rObj[i].checked) return rObj[i].value;
    return false;
}