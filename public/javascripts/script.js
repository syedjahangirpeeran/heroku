document.getElementById("ProductsImg").src="../images/topWindowShades.png";
document.getElementById("InfoImg").src="../images/infoHVAC.png";
document.getElementById("BckImg").src="../images/img_windowBck.jpg";

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       startProcess50(this);
    }
};
xhttp.open("GET", "/javascripts/cz_r_web3b.json", true);
xhttp.send();

var Pr = 23;
//default value, also see default value of slider
var pbase = 2;
var pdesign;
var prSpecs =28;
var paraspec;
var productCost = 6000; //default
var productCost1;
var CA = 3;
var Dt = 1;
var Dtxt = "k";
var hsavings60; //total whole house savings
var request1 = "http://www.smartzerohome.com";
var request2 = "http://www.smartzerohome.com";


cat = 2;
Pr_id = 4;
function startProcess50(xml) {
    var xml = JSON.parse(xhttp.responseText);
	if (cat == 2) {
	  hsavings60 = 5000;
	} else {
	  hsavings60 = 8000;
	}

	if (hsavings60 == 8000) {
	  CA = 1;
	} else {
	  CA = 2;
	}
	var stringButton50 = 5;
		//stringButton2 = String(C) + String(A) + String(O);
		for (var i = 0; i < xml.results.cdata.length; i++) {
		if (xml.results.cdata[i].cz == parseInt(stringButton50)) {
			var zxml = xml.results.cdata[i];			
			if (cat == 2) {
				if (Pr_id == 4) {
					Dt = 4;
				} else {
					Dt = 1;
				}
			}
			var text1 = "ba" + Dt.toString();
			var text2 = "do" + Dt.toString();
			var text3 = "sp" + Dt.toString();
			document.getElementById("txt_dt1").value = zxml[text1];
			zArea = 3000; //changed from calcArea
			//INSULATION
			if (Dt == 1) {

				Pr = 1;
				prTitle = "Wall";
				document.getElementById("txt_main2").innerHTML = "Top 3 W Products";	
				document.getElementById("ProductsImg").src="../images//topWallInsulation.png";

				paraspec = "sp1";
				pdesign = parseInt(zxml[paraspec]);
				//pdesignW = pdesign;

				if (A == 1) {
					prSpecs = zxml[text2];
				} else if (A == 2) {
					prSpecs = zxml[text3];                   
				}
				document.getElementById("txt_inform").innerHTML = "Wall's performance is measured by its ability to insulate";		

			} else if (Dt == 2) {

				Pr = 2;
				prTitle = "Roof Insulation";
				document.getElementById("txt_main2").innerHTML = "Top 3 Roof Insulation Products";											
				document.getElementById("ProductsImg").src="../images//topRoofInsulation.png";
				document.getElementById("InfoImg").src="../images//infoInsulation.png";
				document.getElementById("BckImg").src="../images//img_insulationBck.jpg";
				if (A == 1) {
					prSpecs = zxml[text2];
				} else if (A == 2) {
					prSpecs = zxml[text3];                
				}
				//mc_help.txt_inform.text="R (resistance) value measures the effectiveness of insulation";
				document.getElementById("txt_inform").innerHTML = "R-value measures the effectiveness";	

			} else if (Dt == 21) {
				Pr = 24;
				prTitle = "Refrigerator";
				document.getElementById("txt_main2").innerHTML = "Top F";									
				document.getElementById("ProductsImg").src="../images//topFridge.png";
				document.getElementById("InfoImg").src="../images//infoAppliances.png";
				document.getElementById("BckImg").src="../images//img_appliancesBck.jpg";
				//mc_app.y = 116;
				if (calcArea == 1200 || calcArea == 1500) {
					prSpecs = "17";
				} else {
					prSpecs = "28 ";
				}
			} //ends if APPLIANCES all Dt 
			
			if (Dt != 16) { //not equal to,
				document.getElementById("txt_dt2").value = prSpecs;
			}
			document.getElementById("txt_main").innerHTML = "fridge test text";						
		}
	}
}
document.getElementById("btn_go").addEventListener("click", actBtn_go);
function actBtn_go() {
	cat = 1;
	Pr_id = 2;
}
//btn_pinfo1.addEventListener(MouseEvent.CLICK, actBtn_pinfo1);
document.getElementById("btn_buy1").addEventListener("click", actBtn_pinfo1);
function actBtn_pinfo1() {

	var linkinfo1 = "http://building.dow.com/en-us/products/f/frothpak-foam-insulation";				 	
	window.open(linkinfo1);
}

document.getElementById("btn_infoURL").addEventListener("click", actBtn_info);
function actBtn_info() {
	if (Dt==1){
		request1 = "http://www.smartzerohome.com/insulation_wall_SmartZeroHome.html";      
	} 
	else {
		request1 = "http://www.smartzerohome.com/insulation_attic_SmartZeroHome.html";
	}
	//prInfo = request1;
	window.open(request1);
}//end btn info action 

document.getElementById("btn_allBest").addEventListener("click", actBtn_product);
function actBtn_product() {
	if (Dt==1){
		request2 = "http://www.smartzerohome.com/insulation_topWallInsulation_SmartZeroHome.html"; 
	} 
	else if (Dt==2){
		request2  = "http://www.smartzerohome.com/insulation_topRoofInsulation_SmartZeroHome.html";
	}
	window.open(request2);	
}//end action button
	