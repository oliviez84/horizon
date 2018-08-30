// JavaScript Document



function kiosque() {
	menuOff() ;
    document.getElementById("kiosque").style.display = "block";	
}

function propos() {
	menuOff() ;
    document.getElementById("propos").style.display = "block";
}


function mesBoutons() {
    document.getElementById("mesBoutons").style.display = "block";	
}

function affiche(choix) {
	var choix=choix;
	
	if(choix==1) {
		 afficheOff();
		 document.getElementById("affiche1").style.display = "block";
	
	}
   else if(choix==2) {
	   afficheOff();
	   document.getElementById("affiche2").style.display = "block";
}	
}

						/* mes function off */

function menuOff() {
	document.getElementById("kiosque").style.display = "none";
	document.getElementById("propos").style.display = "none";
}

function afficheOff() {
	
     document.getElementById("affiche1").style.display = "none";
	 document.getElementById("affiche2").style.display = "none";
}
