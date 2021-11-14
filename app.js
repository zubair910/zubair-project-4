///////////////Q1/////////////////

var now = new Date()
document.write(now)


/////////Q2//////////////////
var now = new Date()
alert(now.getMonth()); 


///////////////////Q3///////////////////

var now = new Date().toString();
alert(now.slice(0 , 3));

////////////Q4////////////////



var days = ["saturday" , "sunday" ] 

userdays = prompt("enter your days")

if(userdays === days[i]){
    alert("its fun day")
}

else{
    alert("its not fun day")
}


////////////////Q5/////////////////


var days = ["first fifteen days of month"]
var userInput = prompt("Enter Your days")



for(var i = 0 ; i < days.length ; i++){

        if(userInput === "first fifteen days of month" ){
            alert("yes")
           
            
        }
        else if(userInput === "Last days of the month"){

        }


}

/////////////////Q6////////////////////
var whethers = "before noon" ;
if(whethers ===  "after noon"){
    alert("its A.M")
}

else{
        alert("its P.M")
}


//////////////////////Q7//////////////////////
var date  = new Date(2020)

document.write( date)

////////////////////Q8///////////////////
var year  = new Date(2015)

document.write(year)



/////////////////////Q10/////////////


var age = ["your age is 2021 " , "<br> your birth year is 1994 " ,]

document.write(age)