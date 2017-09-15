<!DOCTYPE html>
<html>
<head>
<title>Pokemon Generation 3 Damage Calculator</title>
<meta charset="utf-8">
<meta name="description" content="Damage Calculator for Pokemon Ruby, Sapphire, Emerald, Fire Red, Leaf Green and the Gamecube spin-offs.">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="Pokemon Generation 3 Damage Calculator">
<meta name="twitter:description" content="Damage Calculator for Pokemon Ruby, Sapphire, Emerald, Fire Red, Leaf Green and the Gamecube spin-offs.">
<meta name="twitter:image" content="i/gen3dmgcalc/384.png">
<meta name="twitter:creator" content="@Mitsunee">
<meta property="og:title" content="Pokemon Generation 3 Damage Calculator">
<meta property="og:image" content="i/gen3dmgcalc/384.png">
<meta property="og:description" content="Damage Calculator for Pokemon Ruby, Sapphire, Emerald, Fire Red, Leaf Green and the Gamecube spin-offs.">
<link href="/favicon.ico" rel="shortcut icon">
<link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet">
<link href="style.css" rel="stylesheet">
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="js/gen3calc.min.js"></script>
<!-- Pretty code:
<script src="js/radioValue.js"></script>
<script src="js/typeEffect.js"></script>
<script src="js/gen3calc.js"></script>-->
</head>
<body onload="DamageCalc();">
<h1 style="text-align:center;"><img src="i/382.png" alt="K"> <img src="i/383.png" alt="G"> <img src="i/384.png" alt="R"> Damage Calculator for Generation 3 <img src="i/003.png" alt="V"> <img src="i/006.png" alt="C"> <img src="i/009.png" alt="B"></h1>
<main><form id="calcInput" onchange="DamageCalc();return false;">
<!--	Basic stats		-->
	<table class="pokemon"><!--	Attacker		-->
		<tr>
			<th colspan="2">Attacker<img src="i/atk.png" alt="atk" style="float:right;margin-right:12px;"></th>
		</tr>
		<tr>
			<td>Level:</td>
			<td><input type="number" name="attackerLevel" min="1" max="100" step="1" value="50" oninput="DamageCalc();"></td>
		</tr>
		<tr>
			<td>Offensive stat value:</td>
			<td><input type="number" min="1" max="999" step="1" value="125" name="attackerAtkStat" oninput="DamageCalc();"></td>
		</tr>
		<tr>
			<td>Move's base power:</td>
			<td><input type="number" min="1" max="999" step="1" value="80" name="attackerMoveBP" oninput="DamageCalc();"></td>
		</tr>
		<tr>
			<td>Attack stage:</td>
			<td><input type="number" name="attackerAtkStage" min="-6" max="6" step="1" value="0" oninput="DamageCalc();"></td>
		</tr>
	</table>
	<table  class="pokemon"><!--	Defender		-->
		<tr>
			<th colspan="2">Defender<img src="i/def.png" alt="def" style="float:right;margin-right:12px;"></th>
		</tr>
		<tr><td colspan="2"></td></tr>
		<tr>
			<td>Defensive stat value:</td>
			<td><input type="number" min="1" max="999" step="1" value="80" name="defenderDefStat" oninput="DamageCalc();"></td>
		</tr>
		<tr>
			<td>Current HP:</td>
			<td><input type="number" min="1" max="999" step="1" value="150" name="defenderHPStat" oninput="DamageCalc();"></td>
		</tr>
		<tr>
			<td>Defense stage:</td>
			<td><input type="number" name="defenderDefStage" min="-6" max="6" step="1" value="0" oninput="DamageCalc();"></td>
		</tr>
	</table>
	<div class="clear"></div>
<!--	Bonus Effects		-->
	<table class="bonus-effects">
		<tr>
			<th colspan="4">Bonus Effects and Type-Effectiveness<img src="i/star.png" alt="eff" style="float:right;margin-right:12px;"></th>
		</tr>
		<tr>
			<td><input type="checkbox" name="badgeBoostAtk" id="badgeBoostAtk" onclick="document.getElementById('badgeBoostDef').checked = false;"></td>
			<td><label for="badgeBoostAtk" title="Only for calculating your Pokemon attacking an opponent!" onclick="document.getElementById('badgeBoostDef').checked = false;">Does offensive badge boost apply?</label></td>
			<td><input type="checkbox" name="itemBoost" id="itemBoost"></td>
			<td><label for="itemBoost">Does the held item boost the damage by 10% <span class="smol">(Mystic Water etc.)</span>?</label></td>
		</tr>
		<tr>
			<td><input type="checkbox" name="badgeBoostDef" id="badgeBoostDef" onclick="document.getElementById('badgeBoostAtk').checked = false;"></td>
			<td><label for="badgeBoostDef" title="Only for calculating an attack targeting your Pokemon!" onclick="document.getElementById('badgeBoostAtk').checked = false;">Does defensive badge boost apply?</label></td>
			<td><input type="checkbox" name="abilityBoost" id="abilityBoost"></td>
			<td><label for="abilityBoost">Does Torrent/Blaze apply?</label></td>
		</tr>
		<tr>
			<td><input type="checkbox" name="doublecheck" id="doublecheck"></td>
			<td><label for="doublecheck" title="The damage of attacks that hit both targets in a double battle is split">Does the attack target both defending Pokemon?</label></td>
			<td><input type="checkbox" name="stabcheck" id="stabcheck"></td>
			<td><label for="stabcheck">Does the move get STAB?</label></td>
		</tr>
		<tr>
			<td><input type="checkbox" name="lsrefcheck" id="lsrefcheck"></td>
			<td colspan="3"><label for="lsrefcheck" title="Reference the Type Effectiveness Helper if you're unsure about the damage type of your attack">Does Light Screen or Reflect apply? <i>(Light Screen for special attacks, Reflect for physical attacks)</i></label>
		</tr>
		<tr>
			<td colspan="4"><p>The move is...<br>
			<input type="radio" name="weathercheck" value="noweather" id="noweather" checked><label for="noweather" style="width:30%;">...not affected by weather</label>
			<input type="radio" name="weathercheck" value="goodweather" id="goodweather"><label for="goodweather" style="width:30%;">...boosted by weather</label>
			<input type="radio" name="weathercheck" value="badweather" id="badweather"><label for="badweather" style="width:30%;">...negatively affected by weather</label><br class="clear"></p>
			<p>What is the type-effectiveness? <a onclick="$('#typeEffectHelp').slideDown();">[Open Helper]</a><br>
			<input type="radio" name="typeeffect" value="0.25" id="025effective"><label for="025effective" style="width:5%;">0.25</label>
			<input type="radio" name="typeeffect" value="0.5" id="05effective"><label for="05effective" style="width:5%;">0.5</label>
			<input type="radio" name="typeeffect" value="1" id="1effective" checked><label for="1effective" style="width:5%;">1</label>
			<input type="radio" name="typeeffect" value="2" id="2effective"><label for="2effective" style="width:5%;">2</label>
			<input type="radio" name="typeeffect" value="4" id="4effective"><label for="4effective" style="width:5%;">4</label><br class="clear"></p>
			</td>
		</tr>
	</table>
	<textarea name="outputarea" class="range" style="width:100%;height:50px;" onmouseup="$(this).select();" readonly></textarea>
	<table style="border:0px;">
		<tr>
			<td><input type="checkbox" name="outputVerbose" id="outputVerbose"></td>
			<td><label for="outputVerbose">Show all possible Damage numbers</label></td>
			<td><input type="checkbox" name="showCrits" id="showCrits"></td>
			<td><label for="showCrits">Show critical hit rolls</label></td>
		</tr>
	</table>
</form></main>
<!--Side Bar-->
<aside>
	<form id="typeEffectHelp" style="display:none;">
		<img src="i/unownx.gif" alt="Close" title="Close" onclick="$(this).parent().slideUp();" style="float:right;">
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
		<span class="smol">Version 3.0 (rewrite #2)</span><br>
		<span class="smol">Original script by: G_heinz</span><br>
		<span class="smol">Thx to: Darkwarrior, Stringflow</span>
		<hr><h3>Other versions:</h3>
		G_heinz' script (modified): <a href="http://pastebin.com/3ByqgxtP">Pastebin</a><br>
		Source Code decompile: <a href="https://github.com/pret/pokeruby/blob/master/src/calculate_base_damage.c">on Github</a><br>
		Stringflow's java port: <a href="/downloads/RSE_Damage_Calculator.zip">Direct download</a><br>
		Github repo: <a href="https://github.com/Mitsunee/Gen3DmgCalc">Github</a>
		<hr><h3>Resources:</h3>
		<span class="smol">Trainer Guides/Data</span><br>
		<a href="https://docs.google.com/spreadsheets/d/1n7rmyMGOR9ishlC8LuXxKtSgnwNxOUY2XScyPvFnGqo/edit#gid=0">Sapphire</a><br>
		<a href="https://docs.google.com/spreadsheets/d/1YBll3FbJfaIMJ2CtV72kXfYTlF0qRDxuWHHKhUJ76Uo/edit#gid=0">Emerald</a><br>
		<a href="https://pastebin.com/S1gyPTfL">Fire Red</a><br>
		<a href="https://www.dropbox.com/s/pkdpz96jue1qk1f/Colosseum%20trainer%20guide.xlsx?dl=0">Colosseum</a><br>
		<br>
		<a href="http://imgur.com/a/UnOCz">Fire Red Item Locations</a>
		<hr>
		<table style="width:100%;" id="psr-icons">
			<tr>
				<td rowspan="2" style="text-align:center;"><a href="http://www.pokemonspeedruns.com/"><img src="i/psrico.png" alt="Pokemon Speedruns" title="Pokemon Speedruns" style="width:95px;height:auto;"></a></td>
				<td><a href="http://www.speedrun.com/pkmnrubysapphire"><img src="i/382.png" alt="Pokemon Sapphire" title="Pokemon Sapphire"></a></td>
				<td><a href="http://www.speedrun.com/pkmnemerald"><img src="i/384.png" alt="Pokemon Emerald" title="Pokemon Emerald"></a></td>
				<td><a href="http://www.speedrun.com/pkmnfrlg"><img src="i/006.png" alt="Pokemon Fire Red" title="Pokemon Fire Red"></a></td>
			</tr>
			<tr>
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