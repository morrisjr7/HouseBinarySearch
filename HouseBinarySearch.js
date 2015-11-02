var array = [];
numberofAvenues = 30;
numberofStreets = 30;
randStreet = Math.floor((Math.random())*30+1)
randAvenue = Math.floor((Math.random())*30+1)
arsonLocation = {"Street":randStreet, "Avenue":randAvenue};
var x = 1;
var y = 1;
 

function findMedian(values) {

    values.sort(function(a,b) {return a - b;} );


    var half = Math.floor(values.length/2);

    if(values.length % 2)

        return (values[half]);
    else
        return (values[half-1]);
};
function medianNumber(values) {
    
    values.sort(function(a,b) {return a - b;} );


    var half = Math.floor(values.length/2);

    if(values.length % 2)

        return half;
    else
        return half-1;
};

function add_y_values(x){
	var y = 1
	for (var i = 0; i < numberofAvenues; i++) {
			
			array.push({"Street":x, "Avenue":y});
			y++
		};
};

function loadstreets(x){
for (i = 0; i < numberofStreets ; i++) {
	add_y_values(x)
	x++;
}}
function solveArson (blocklist){
	for (i = 5; i > 0; i--){
	 var streetlist = []
	 for (var b = blocklist.length - 1; b >= 0; b--) {
	 		streetlist.push(blocklist[b].Street);
	 	};	
	 console.log(blocklist.length)	
	 var median = findMedian(streetlist);
	 	//console.log(median+ "Street")
	 	if(median<arsonLocation.Street){
		console.log("Move all units West of "+median+"th Street");
	 		var arrayLength = blocklist.length
//	 		console.log("Arson Location"+arsonLocation.Street+"Median Street: "+median.Street)

	 			for (var o = arrayLength - 1 ; o >= 0 ; o--) {

	 				if (blocklist[o].Street <= median) {
	 				   blocklist.splice(o,1)
	 				};
	 			
	 			};
//	 	console.log("Remove East. Total Remaining ="+blocklist.length)	

	 	}else{
	 		console.log("Move all units East of "+median+"th Street");
	 		var arrayLength = blocklist.length

	 		for (var o = arrayLength-1; o >= 0; o--) {
	 			if (blocklist[o].Street > median) {

	 				blocklist.splice(o,1);
	 			};
			};
//		console.log("Remove West. Total Remaining ="+blocklist.length)
		};		
		var avenuelist = []
		for (var a = blocklist.length - 1; a >= 0; a--) {
				avenuelist.push(blocklist[a].Avenue)
		};
		console.log(blocklist.length)
		median = findMedian(avenuelist);

	//	console.log(median+" Avenue")
		if(median<arsonLocation.Avenue){
			console.log("Move all units North of "+median+"th Avenue");
			var arrayLength = blocklist.length
	 			for (var o = arrayLength-1; o >= 0 ; o--) {
	 			
	 				if (blocklist[o].Avenue <= median) {
	 				blocklist.splice(o,1)	 				};
	 			
	 			};
//		console.log("Remove South. Total Remaining ="+blocklist.length)	
	 	  }
	 	else{
	 		console.log("Move all units South of "+median+"th Avenue");
	 		var arrayLength = blocklist.length
	 		
	 		for (var o = arrayLength-1; o >= 0; o--) {
	 			if (blocklist[o].Avenue  > median) {
	 				
	 				blocklist.splice(o,1)
	 			};
			};
//		 console.log("Remove North."+i+" Total Remaining ="+blocklist.length)
		};	

	}
	console.log(arsonLocation);
	if (blocklist.length<2){
        console.log("We found the Two Word Arsonist! He is at a house at Street "+blocklist[0].Street+" and Avenue "+blocklist[0].Avenue+". Dispatch all units to that location")	
    }
    else {
    	console.log("He hung up! We believe he could be at these locations ");
    	console.log(blocklist);
    }
}


loadstreets(x,y);

solveArson(array);

