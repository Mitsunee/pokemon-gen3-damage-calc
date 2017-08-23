<!DOCTYPE html>
<html>
<head>
<title>Pokemon Generation 3 Damage Calculator</title>
<meta charset="utf-8">
<meta name="description" content="Javascript port of G_heinz' Generation 3 Damage Calculator for Pokemon Ruby, Sapphire, Emerald, Fire Red, Leaf Green and the Gamecube spin-offs.">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="Pokemon Generation 3 Damage Calculator">
<meta name="twitter:description" content="Javascript port of G_heinz' Generation 3 Damage Calculator for Pokemon Ruby, Sapphire, Emerald, Fire Red, Leaf Green and the Gamecube spin-offs.">
<meta name="twitter:image" content="/i/gen3dmgcalc/384.png">
<meta name="twitter:creator" content="@Mitsunee">
<meta property="og:title" content="Pokemon Generation 3 Damage Calculator">
<meta property="og:image" content="/i/gen3dmgcalc/384.png">
<meta property="og:description" content="Javascript port of G_heinz' Generation 3 Damage Calculator for Pokemon Ruby, Sapphire, Emerald, Fire Red, Leaf Green and the Gamecube spin-offs.">
<link href="/favicon.ico" rel="shortcut icon">
<link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet">
<style>
body,html{min-width:1210px;}
body{
	font-family:'Lato',sans-serif;
	line-height:1.1em;
	background:url('i/bg.png') #7dad71 top center repeat-x;
}

/**MAIN AREAS**/
main,#form{width:800px !important;}
main,footer,#typeEffectHelp{
	margin-left:25px;
	border:1px solid #00B0F0;
	padding:12px;
	border-radius:12px;
	background:rgba(238,255,255,0.75);
	font-size:14px;
}
footer,#typeEffectHelp{width:300px;}
#form table {
	border:1px solid #00B0F0;
	padding:2px;
	border-radius:8px;
}

/**TOP TWO TABLES**/
#form table.pokemon {
	width:300px;
	float:left;
	margin:0px 50px 15px 50px;
}
#form table.pokemon tr:last-of-type td{padding-bottom:10px;}
#form table.bonus-effects{width:100%;}
input[type="number"]{
	width:100px;
	border:1px inset #00B0F0;
	background:#DDF0FF;
	color:#0080B0;
}

textarea{
	border-radius:8px;
	box-sizing:border-box;
	color:#121212;
	min-height:56px;
	max-height:56px;
	min-width:796px;
	max-width:796px;
	margin-top:15px;
	padding:4px;
	overflow:hidden;
}
textarea.kill{
	border:1px outset #00D080;
	background:#DDF0FF;
}
textarea.range{
	border:1px outset #D08000;
	background:#FFF0DD;
}
textarea.lives{
	border:1px outset #D08080;
	background:#F0EEEE;
}
th{
	font-size:16px;
	font-weight:700;
	text-align:center;
	padding:10px 0px;
}
td{
	height:24px;min-height:24px;max-height:24px;
	vertical-align:middle;
	text-align:left;
	/**font-family:'Courier New',monospace;**/
}
aside {
	position:absolute;
	top:75px;
	left:850px;
	width:320px;
}
aside hr{border-top:1px solid #00B0F0;}
.smol{font-size:12px;}
a{color:#060 !important;text-decoration:none;}
a:hover{text-decoration:underline;}
input[type="button"]{
	border:1px outset #00B0F0;
	border-radius:8px;
	background:#DDF0FF;
	padding:2px;
	color:#0080B0;
}
input[type="button"]:active,input[type="radio"]:not(:checked)+label:active {
	border:1px outset #005080;
	background:#EFF;
	color:#003080;
}
h1{
	text-align:center;
	font-weight:700;
	width:1200px;
}
h3{margin:0.4em 3px;}
.clear {clear:both;}

/**CALC RADIOS**/
main input[type="radio"]{display:none;}
main input[type="radio"]+label{
	display:block;
	float:left;
	font-family:'Lato',sans-serif;
	margin:0.5em 0px;
	padding:5px;
	color:#0080B0;
	border:1px outset #00B0F0;
	background:#EFF;
	text-align:center;
}
main input[type="radio"]:not(:checked)+label{opacity:0.33;}
main input[type="radio"]:not(:checked)+label:hover{opacity:0.75;}
main input[type="radio"]:checked+label      {opacity:1;}
p label:first-of-type {
	border-top-left-radius:8px;
	border-bottom-left-radius:8px;
}
p label:last-of-type {
	border-top-right-radius:8px;
	border-bottom-right-radius:8px;
}
img[alt="R"],img[alt="V"]{transform:translateY(12px);}
img[alt="K"],img[alt="B"]{transform:translateY(-12px);}

/**Typeeffect helper**/
#typeEffectHelp{margin-bottom:15px;}
#MoveTypeText{position:relative;bottom:10px;left:10px;}
#typePicker{
	position:absolute;
	width:210px;
	border:1px solid #00B0F0;
	padding:8px;
	border-radius:10px;
	background:rgba(238,255,255,1);
	font-size:12px;
}
#typePicker img {width:32px;height:16px;}
</style>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="js/radioValue.js"></script>
<script src="js/typeEffect.js"></script>
<script src="js/gen3calc.js"></script>
</head>
<body onload="DamageCalc();">
<h1 style="text-align:center;"><img src="i/382.png" alt="K"> <img src="i/383.png" alt="G"> <img src="i/384.png" alt="R"> Damage Calculator for Generation 3 <img src="i/003.png" alt="V"> <img src="i/006.png" alt="C"> <img src="i/009.png" alt="B"></h1>
<main><form id="form" onchange="DamageCalc();return false;">
<!--	Basic stats		-->
	<table class="pokemon"><!--	Attacker		-->
		<tr>
			<th colspan="2">Attacker<img src="i/atk.png" alt="atk" style="float:right;margin-right:12px;"></th>
		</tr>
		<tr>
			<td>Level:</td>
			<td><input type="number" name="L" min="1" max="100" step="1" value="50" oninput="DamageCalc();"></td>
		</tr>
		<tr>
			<td>Offensive stat value:</td>
			<td><input type="number" min="1" max="999" step="1" value="100" name="Atk" oninput="DamageCalc();"></td>
		</tr>
		<tr>
			<td>Move's base power:</td>
			<td><input type="number" min="1" max="999" step="1" value="80" name="BP" oninput="DamageCalc();"></td>
		</tr>
		<tr>
			<td>Attack stage:</td>
			<td><input type="number" name="AStage" min="-6" max="6" step="1" value="0" oninput="DamageCalc();"></td>
		</tr>
	</table>
	<table  class="pokemon"><!--	Defender		-->
		<tr>
			<th colspan="2">Defender<img src="i/def.png" alt="def" style="float:right;margin-right:12px;"></th>
		</tr>
		<tr><td colspan="2"></td></tr>
		<tr>
			<td>Defensive stat value:</td>
			<td><input type="number" min="1" max="999" step="1" value="100" name="Def" oninput="DamageCalc();"></td>
		</tr>
		<tr>
			<td>HP value:</td>
			<td><input type="number" min="1" max="999" step="1" value="250" name="HPvalue" oninput="DamageCalc();"></td>
		</tr>
		<tr>
			<td>Defense stage:</td>
			<td><input type="number" name="DStage" min="-6" max="6" step="1" value="0" oninput="DamageCalc();"></td>
		</tr>
	</table>
	<div class="clear"></div>
<!--	Bonus Effects		-->
	<table class="bonus-effects">
		<tr>
			<th colspan="4">Bonus Effects and Type-Effectiveness<img src="i/star.png" alt="eff" style="float:right;margin-right:12px;"></th>
		</tr>
		<tr>
			<td><input type="checkbox" name="badgeboost" id="badgeboost"></td>
			<td><label for="badgeboost">Does a badge boost apply?</label></td>
			<td><input type="checkbox" name="softwater" id="softwater"></td>
			<td><label for="softwater">Does the held item boost the damage by 10% <span class="smol">(Mystic Water etc.)</span>?</label></td>
		</tr>
		<tr>
			<td><input type="checkbox" name="torrentcheck" id="torrentcheck"></td>
			<td><label for="torrentcheck">Does Torrent/Blaze apply?</label></td>
			<td><input type="checkbox" name="doublecheck" id="doublecheck"></td>
			<td><label for="doublecheck">Does the attack target both defending Pokemon?</label></td>
		</tr>
		<tr>
			<td><input type="checkbox" name="stabcheck" id="stabcheck"></td>
			<td><label for="stabcheck">Is the move STAB?</label></td>
			<td><input type="checkbox" name="lsrefcheck" id="lsrefcheck"></td>
			<td><label for="lsrefcheck">Does Light Screen or Reflect apply?</label></td>
		</tr>
		<tr>
			<td colspan="4"><p>The move is...<br>
			<input type="radio" name="weathercheck" value="noweather" id="noweather" checked><label for="noweather" style="width:30%;">...not affected by weather</label>
			<input type="radio" name="weathercheck" value="goodweather" id="goodweather"><label for="goodweather" style="width:30%;">...boosted by weather</label>
			<input type="radio" name="weathercheck" value="badweather" id="badweather"><label for="badweather" style="width:30%;">...negatively affected by weather</label><br class="clear"></p>
			<p>What is the type-effectiveness? <a onclick="$('#typeEffectHelp').show();">[Open Helper]</a><br>
			<input type="radio" name="typeeffect" value="0.25" id="025effective"><label for="025effective" style="width:5%;">0.25</label>
			<input type="radio" name="typeeffect" value="0.5" id="05effective"><label for="05effective" style="width:5%;">0.5</label>
			<input type="radio" name="typeeffect" value="1" id="1effective" checked><label for="1effective" style="width:5%;">1</label>
			<input type="radio" name="typeeffect" value="2" id="2effective"><label for="2effective" style="width:5%;">2</label>
			<input type="radio" name="typeeffect" value="4" id="4effective"><label for="4effective" style="width:5%;">4</label><br class="clear"></p>
			</td>
		</tr>
	</table>
	<textarea name="outputarea" class="range" style="width:100%;height:50px;" onmouseup="$(this).select();" readonly></textarea>
</form></main>
<!--Side Bar-->
<aside>
	<form id="typeEffectHelp" style="display:none;">
		<img src="i/unownx.gif" alt="Close" title="Close" onclick="$(this).parent().hide();" style="float:right;">
		<h3 style="text-align:center;">Type Effectiveness Helper</h3>
		<table>
			<tr>
				<td colspan="2">Attack Type:</td>
			</tr>
			<tr>
				<td><img src="i/normal.gif" alt="AtkType" id="AtkTypeImg" onclick="openTypePicker('AtkType');"></td>
				<td><img src="i/Physical.png" alt="MoveType" id="MoveType"><span id="MoveTypeText">Physical</span></td>
			</tr>
			<tr>
				<td colspan="2">Defender Types:</td>
			</tr>
			<tr>
				<td><img src="i/normal.gif" alt="DefTypeA" id="DefTypeAImg" onclick="openTypePicker('DefTypeA');"></td>
				<td><img src="i/none.gif" alt="DefTypeB" id="DefTypeBImg" onclick="openTypePicker('DefTypeB');"></td>
			</tr>
			<tr>
				<td>Effectiveness:</td><td id="typeEffectHelpOutput">1</td>
		</table>
	</form>
	<footer>
		<span class="smol">Version 2.1.3 (added Type Effectiveness Helper)</span><br>
		<span class="smol">Original script by: G_heinz</span><br>
		<span class="smol">Thx to: Darkwarrior, Stringflow</span>
		<hr><h3>Other versions:</h3>
		G_heinz' original python script (modified): <a href="http://pastebin.com/3ByqgxtP">Pastebin</a><br>
		Stringflow's java port: <a href="/downloads/RSE_Damage_Calculator.zip">Direct download</a>
		<hr><h3>Resources:</h3>
		<span class="smol">Trainer Guides/Data</span><br>
		<a href="https://docs.google.com/spreadsheets/d/1n7rmyMGOR9ishlC8LuXxKtSgnwNxOUY2XScyPvFnGqo/edit#gid=0">Sapphire</a><br>
		<a href="https://docs.google.com/spreadsheets/d/1YBll3FbJfaIMJ2CtV72kXfYTlF0qRDxuWHHKhUJ76Uo/edit#gid=0">Emerald</a><br>
		<a href="https://pastebin.com/S1gyPTfL">Fire Red</a><br>
		<a href="https://www.dropbox.com/s/pkdpz96jue1qk1f/Colosseum%20trainer%20guide.xlsx?dl=0">Colosseum</a><br>
		<br>
		<a href="http://imgur.com/a/UnOCz">Fire Red Item Locations</a>
		<hr>
		<table style="width:100%;">
			<tr>
				<td colspan="6"><a href="http://www.speedrun.com/pokemon" style="display:block;width:100%;margin-bottom:0.5em;text-align:center;"><img src="i/psrsrc.png" alt="Pokemon Speedruns" title="Pokemon Speedruns"></a></td>
			</tr>
			<tr>
				<td><a href="http://www.speedrun.com/pkmnrubysapphire"><img src="i/382.png" alt="Pokemon Sapphire" title="Pokemon Sapphire"></a></td>
				<td><a href="http://www.speedrun.com/pkmnemerald"><img src="i/384.png" alt="Pokemon Emerald" title="Pokemon Emerald"></a></td>
				<td><a href="http://www.speedrun.com/pkmnfrlg"><img src="i/006.png" alt="Pokemon Fire Red" title="Pokemon Fire Red"></a></td>
				<td><a href="http://www.speedrun.com/pkmncolosseum"><img src="i/250.png" alt="Pokemon Colosseum" title="Pokemon Colosseum"></a></td>
				<td><a href="http://www.speedrun.com/pkmnxd"><img src="i/249s.png" alt="Pokemon XD Gale Of Darkness" title="Pokemon XD Gale Of Darkness"></a></td>
				<td><a href="http://www.speedrun.com/pmdredblue"><img src="i/300md.png" alt="Pokemon Mystery Dungeon" title="Pokemon Mystery Dungeon"></a></td>
			</tr>
		</table>
	</footer>
</aside>
<!--Side Bar End-->
<!--Type Picker-->
<div id="typePicker-clicktrap" style="position:fixed;top:0px;left:0px;width:100%;height:100%;display:none;" onclick="$('#typePicker').hide();$(this).hide();"></div>
<div id="typePicker" style="display:none;"><span>Choose the Defender's secondary type:</span><br>
<img src="i/none.gif" alt="none" onclick="pickType('none');">
<img src="i/normal.gif" alt="normal" onclick="pickType('normal');">
<img src="i/fire.gif" alt="fire" onclick="pickType('fire');">
<img src="i/water.gif" alt="water" onclick="pickType('water');">
<img src="i/grass.gif" alt="grass" onclick="pickType('grass');">
<img src="i/electric.gif" alt="electric" onclick="pickType('electric');">
<img src="i/ice.gif" alt="ice" onclick="pickType('ice');">
<img src="i/psychic.gif" alt="psychic" onclick="pickType('psychic');">
<img src="i/ghost.gif" alt="ghost" onclick="pickType('ghost');">
<img src="i/dark.gif" alt="dark" onclick="pickType('dark');">
<img src="i/poison.gif" alt="poison" onclick="pickType('poison');">
<img src="i/ground.gif" alt="ground" onclick="pickType('ground');">
<img src="i/rock.gif" alt="rock" onclick="pickType('rock');">
<img src="i/steel.gif" alt="steel" onclick="pickType('steel');">
<img src="i/fighting.gif" alt="fighting" onclick="pickType('fighting');">
<img src="i/flying.gif" alt="flying" onclick="pickType('flying');">
<img src="i/bug.gif" alt="bug" onclick="pickType('bug');">
<img src="i/dragon.gif" alt="dragon" onclick="pickType('dragon');">
</div>
<!--Type Picker End-->
</body>
</html>