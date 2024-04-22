
function calculate(){
    var height=(document.getElementById("height").value)
var weight=(document.getElementById("weight").value)


var bmi= Number(weight)/Number((height*height))


var bmi
if(bmi<=18.5){
    console.log("under")
    var show=document.getElementById("show").innerHTML="underweight"
}
else if(bmi>18.5&&bmi<=24.9){
    console.log("noraml")
    var show=document.getElementById("show").innerHTML="normal"
}


else if(bmi>25&&bmi<=29.9){
    console.log("overwieght")
    var show=document.getElementById("show").innerHTML="overweight"

}

else{
    console.log("obesity")
    var show=document.getElementById("show").innerHTML="obesity"
}
show =bmi

}