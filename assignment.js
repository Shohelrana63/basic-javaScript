// feetToMile
function feetToMile(feet){
    var mile = feet/5280; //5280 feet = 1mile.
    return mile;
}
var result = feetToMile(15000);
console.log(result.toFixed(3));

// woodCalculator//
function woodCalculator(chair, table, bed){
    // 1 cubic wood to make 1 chair
    // 3 cubic wood to make 1 table
    // 5 cubic wood to make 1 bed
    var chairCount = chair*1;
    var tableCount = table* 3;
    var bedCount =bed* 5;
    var total = chairCount + tableCount + bedCount;
    return total;
}
var result = woodCalculator(14,5,12);
console.log("The amount of Cubic = " + result);

//brickCalculator
function brickCalculator(numOfFloors){
    if(numOfFloors<=0){
        console.log("Number of floors can't be 0 or less")
        return;
    }

    else if(numOfFloors<=10)
        return numOfFloors*15*1000;

    else if(numOfFloors<=20)
        return 150000 + ((numOfFloors-10)*1000*12);

    else
        return 270000 + ((numOfFloors-20)*1000*10);
}
var result = brickCalculator(12);
console.log("Total of bricks = "+ result);


//tinyFriend
function tinyFriend(names){
    var shortest = names[0];
    for(var i=1; i<names.length; i++){
        if(names[i].length<shortest.length)
            shortest = names[i];
    }
    return shortest;
}
var result = tinyFriend(['Jackie', 'Steve','Zuckerberg', 'father']);
console.log(result);