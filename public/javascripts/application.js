// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults


/**
 * @author Julie
 */

 	
	var settinggraveup = false;
  
 	function animateGrave(grave){
      if($('#grave-' + grave).css('margin-top') == '-4px'){ //It is currently up, so put it down.
		$('#' + grave + '-categories').css('visibility', 'hidden');
         $('#grave-' + grave).animate({
          marginTop: "8px" 
          }, 500, function() {
          settinggraveup = false;
        });
      } else { //It is currently down, so put it up.
        $('#grave-' + grave).animate({
            marginTop: "-4px" 
          }, 500, function() {
      		$('#' + grave + '-categories').css('visibility', 'visible');
          	settinggraveup = true;
        });
      }
    }   
  	
  	function radioGraves(type,  id){
  		if(id <5){ //Setting Grave, not 'random'
			UnCheckRadio(type + '_category_list_' + 5);
  		}else if(id == 5){ //Setting Grave, 'random'
  			for(var i = 1; i <=4; i++){
				UnCheckRadio(type + '_category_list_' + i);
  			}
  			CheckRadio(type + '_category_list_' + 5);
  		}else if (id > 5 && id <=10){ //Monster Grave, not 'random' or 'none'
				UnCheckRadio(type + '_category_list_' + 11);
				UnCheckRadio(type + '_category_list_' + 12);
  		}else if (id == 11){ //Monster Grave, 'none'
  			for(var i = 6; i <=10; i++){
				UnCheckRadio(type + '_category_list_' + i);
  			}
  			UnCheckRadio(type + '_category_list_' + 12);
  			CheckRadio(type + '_category_list_' + 11);
  		}else if (id == 12){ //Monster Grave, 'random'
  			for(var i = 6; i <=11; i++){
				UnCheckRadio(type + '_category_list_' + i);
  			}
  			CheckRadio(type + '_category_list_' + 12);
  		}
  		else if (id > 12 && id <=16){ //Weather Grave
			UnCheckRadio(type + '_category_list_' + 17);
			UnCheckRadio(type + '_category_list_' + 18);
  		}else if (id == 17){ //Weather Grave, 'none'
  			for(var i = 13; i <=16; i++){
				UnCheckRadio(type + '_category_list_' + i);
  			}
  			UnCheckRadio(type + '_category_list_' + 18);
  			CheckRadio(type + '_category_list_' + 17);
  		}else if (id == 18){ //Weather Grave, 'random'
  			for(var i = 13; i <=17; i++){
				UnCheckRadio(type + '_category_list_' + i);
  			}
  			CheckRadio(type + '_category_list_' + 18);
  		}else if (id > 18 && id <=21){ //Creatures Grave
			UnCheckRadio(type + '_category_list_' + 22);
			UnCheckRadio(type + '_category_list_' + 23);
  		}else if (id == 22){ //Creatures Grave, 'none'
  			for(var i = 19; i <=21; i++){
				UnCheckRadio(type + '_category_list_' + i);
  			}
  			UnCheckRadio(type + '_category_list_' + 23);
  			CheckRadio(type + '_category_list_' + 22);
  		}else if (id == 23){ //Creatures Grave, 'random'
  			for(var i = 19; i <=22; i++){
				UnCheckRadio(type + '_category_list_' + i);
  			}
  			CheckRadio(type + '_category_list_' + 23);
  		}else if(id == 24){ //Blood Grave, 'yes'
			UnCheckRadio(type + '_category_list_' + 25);
			UnCheckRadio(type + '_category_list_' + 26);
  			CheckRadio(type + '_category_list_' + 24);
  		}else if(id == 25){ //Blood Grave, 'yes'
			UnCheckRadio(type + '_category_list_' + 24);
			UnCheckRadio(type + '_category_list_' + 26);
  			CheckRadio(type + '_category_list_' + 25);
  		}else if(id == 26){ //Blood Grave, 'random'
			UnCheckRadio(type + '_category_list_' + 24);
			UnCheckRadio(type + '_category_list_' + 25);
  			CheckRadio(type + '_category_list_' + 26);
  		}else if(id == 27){ //Victim Grave, 'yes'
			UnCheckRadio(type + '_category_list_' + 28);
			UnCheckRadio(type + '_category_list_' + 29);
  			CheckRadio(type + '_category_list_' + 27);
  		}else if(id == 28){ //Victim Grave, 'yes'
			UnCheckRadio(type + '_category_list_' + 27);
			UnCheckRadio(type + '_category_list_' + 29);
  			CheckRadio(type + '_category_list_' + 28);
  		}else if(id == 29){ //Victim Grave, 'random'
			UnCheckRadio(type + '_category_list_' + 27);
			UnCheckRadio(type + '_category_list_' + 28);
  			CheckRadio(type + '_category_list_' + 29);
  		}else {
  			//nothing
  		}
  		
  	}
  	
  	function UnCheckRadio(objID){
		rad = $('#' + objID);
		if(rad != undefined){
			rad.checked= false;
			rad.previousSibling.style.backgroundPosition = '0px 0px';
		}
  	}
  	
  	function CheckRadio(objID){
		rad = $('#' + objID);
		if(rad != undefined){
			rad.checked = true;
			rad.previousSibling.style.backgroundPosition = "0 -" + radioHeight*2 + "px";
		}
  	}

	function raiseGraves(){
		$('#graves-container').css('visibility', 'visible');
		raiseGrave('setting');
		raiseGrave('monsters');
		raiseGrave('weather');
		raiseGrave('creatures');
		raiseGrave('blood');
		raiseGrave('victims');
	}
	
	function lowerGraves(){ 
		lowerGrave('setting');
		lowerGrave('monsters');
		lowerGrave('weather');
		lowerGrave('creatures');
		lowerGrave('blood');
		lowerGrave('victims');
	}
	
	function raiseGrave(grave){
		$('#grave-' + grave).animate({
          marginTop: "8px" 
          }, 1000, function() {
        });	
	}
	
	function lowerGrave(grave){
		$('#' + grave + '-categories').css('visibility', 'hidden');
		$('#grave-' + grave).animate({
          marginTop: "110px" 
          }, 1000, function() {
	        if(grave == 'victims'){
				$('#graves-container').css('visibility', 'hidden');
      			$('#share-button').css('visibility', 'visible');
	        }
        });	
	}
	
    
    function stopCoaster(){
      $('#roller-coaster').css('visibility', 'hidden');
    }
    
    function soundChange(sound){
		var nature = ["nature-crickets.mp3"];
		var breathing = ['breathing-female.mp3', 'breathing-male.mp3'];
		var soundtrack = ['creaky.mp3', 'soundtrack.mp3', 'soundtrack2.mp3'];
		var musicbox = ['musicbox.mp3', 'musicbox2.mp3'];
			
		player.mute();
		
		if(sound == 'nature'){
			var randomnumber=Math.floor(Math.random()*(nature.length-1));
			$('#sound-element').html(
				"<embed src='../sounds/" + nature[randomnumber] + "' hidden=true autostart=true loop=true>");
		}else if (sound == 'video'){
			$('#sound-element').html("");
			player.unMute();
		}else if (sound == 'off'){
			$('#sound-element').html("");
		}else if (sound == 'breathing'){
			var randomnumber=Math.floor(Math.random()*(breathing.length-1));
			$('#sound-element').html(
				"<embed src='../sounds/" + breathing[randomnumber] + "' hidden=true autostart=true loop=true>");
		}else if (sound == 'music-box'){
			var randomnumber=Math.floor(Math.random()*(musicbox.length-1));
			$('#sound-element').html(
				"<embed src='../sounds/" + musicbox[randomnumber] + "' hidden=true autostart=true loop=true>");
		} else if (sound == 'random'){
			var randomnumber=Math.floor(Math.random()*(soundtrack.length-1));
			$('#sound-element').html(
				"<embed src='../sounds/" + soundtrack[randomnumber] + "' hidden=true autostart=true loop=true>");
		}
		
	}
		    
       
/* CUSTOM FORM ELEMENTS

Created by Ryan Fait
www.ryanfait.com

The only things you may need to change in this file are the following
variables: checkboxHeight, radioHeight and selectWidth (lines 24, 25, 26)

The numbers you set for checkboxHeight and radioHeight should be one quarter
of the total height of the image want to use for checkboxes and radio
buttons. Both images should contain the four stages of both inputs stacked
on top of each other in this order: unchecked, unchecked-clicked, checked,
checked-clicked.

You may need to adjust your images a bit if there is a slight vertical
movement during the different stages of the button activation.

The value of selectWidth should be the width of your select list image.

Visit http://ryanfait.com/ for more information.

*/

var checkboxHeight = "12";
var radioHeight = "12";
var selectWidth = "190";


/* No need to change anything after this */


document.write('<style type="text/css">input.styled { display: none; } select.styled { position: relative; width: ' + selectWidth + 'px; opacity: 0; filter: alpha(opacity=0); z-index: 5; } .disabled { opacity: 0.5; filter: alpha(opacity=50); }</style>');

var Custom = {
	init: function() {
		var inputs = document.getElementsByTagName("input"), span = Array(), textnode, option, active;
		for(a = 0; a < inputs.length; a++) {
			if((inputs[a].type == "checkbox" || inputs[a].type == "radio") && inputs[a].className == "styled") {
				span[a] = document.createElement("span");
				span[a].className = inputs[a].type;

				if(inputs[a].checked == true) {
					if(inputs[a].type == "checkbox") {
						position = "0 -" + (checkboxHeight*2) + "px";
						span[a].style.backgroundPosition = position;
					} else {
						position = "0 -" + (radioHeight*2) + "px";
						span[a].style.backgroundPosition = position;
					}
				}
				inputs[a].parentNode.insertBefore(span[a], inputs[a]);
				inputs[a].onchange = Custom.clear;
				if(!inputs[a].getAttribute("disabled")) {
					span[a].onmousedown = Custom.pushed;
					span[a].onmouseup = Custom.check;
				} else {
					span[a].className = span[a].className += " disabled";
				}
			}
		}
		inputs = document.getElementsByTagName("select");
		for(a = 0; a < inputs.length; a++) {
			if(inputs[a].className == "styled") {
				option = inputs[a].getElementsByTagName("option");
				active = option[0].childNodes[0].nodeValue;
				textnode = document.createTextNode(active);
				for(b = 0; b < option.length; b++) {
					if(option[b].selected == true) {
						textnode = document.createTextNode(option[b].childNodes[0].nodeValue);
					}
				}
				span[a] = document.createElement("span");
				span[a].className = "select";
				span[a].id = "select" + inputs[a].name;
				span[a].appendChild(textnode);
				inputs[a].parentNode.insertBefore(span[a], inputs[a]);
				if(!inputs[a].getAttribute("disabled")) {
					inputs[a].onchange = Custom.choose;
				} else {
					inputs[a].previousSibling.className = inputs[a].previousSibling.className += " disabled";
				}
			}
		}
		document.onmouseup = Custom.clear;
	},
	pushed: function() {
		element = this.nextSibling;
		if(element.checked == true && element.type == "checkbox") {
			this.style.backgroundPosition = "0 -" + checkboxHeight*3 + "px";
		} else if(element.checked == true && element.type == "radio") {
			this.style.backgroundPosition = "0 -" + radioHeight*3 + "px";
		} else if(element.checked != true && element.type == "checkbox") {
			this.style.backgroundPosition = "0 -" + checkboxHeight + "px";
		} else {
			this.style.backgroundPosition = "0 -" + radioHeight + "px";
		}
	},
	check: function() {
		element = this.nextSibling;
		if(element.checked == true && element.type == "checkbox") {
			this.style.backgroundPosition = "0 0";
			element.checked = false;
		} else {
			if(element.type == "checkbox") {
				this.style.backgroundPosition = "0 -" + checkboxHeight*2 + "px";
			} else {
				this.style.backgroundPosition = "0 -" + radioHeight*2 + "px";
				group = this.nextSibling.name;
				inputs = document.getElementsByTagName("input");
				for(a = 0; a < inputs.length; a++) {
					if(inputs[a].name == group && inputs[a] != this.nextSibling) {
						inputs[a].previousSibling.style.backgroundPosition = "0 0";
					}
				}
			}
			element.checked = true;
		}
	},
	clear: function() {
		inputs = document.getElementsByTagName("input");
		for(var b = 0; b < inputs.length; b++) {
			if(inputs[b].type == "checkbox" && inputs[b].checked == true && inputs[b].className == "styled") {
				inputs[b].previousSibling.style.backgroundPosition = "0 -" + checkboxHeight*2 + "px";
			} else if(inputs[b].type == "checkbox" && inputs[b].className == "styled") {
				inputs[b].previousSibling.style.backgroundPosition = "0 0";
			} else if(inputs[b].type == "radio" && inputs[b].checked == true && inputs[b].className == "styled") {
				inputs[b].previousSibling.style.backgroundPosition = "0 -" + radioHeight*2 + "px";
			} else if(inputs[b].type == "radio" && inputs[b].className == "styled") {
				inputs[b].previousSibling.style.backgroundPosition = "0 0";
			}
		}
	},
	choose: function() {
		option = this.getElementsByTagName("option");
		for(d = 0; d < option.length; d++) {
			if(option[d].selected == true) {
				document.getElementById("select" + this.name).childNodes[0].nodeValue = option[d].childNodes[0].nodeValue;
			}
		}
	}
}
window.onload = Custom.init;
	
