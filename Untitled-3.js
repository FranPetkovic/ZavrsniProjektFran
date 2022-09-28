let input1=document.querySelector(".input1")
let input2=document.querySelector(".input2")
let input3=document.querySelector(".input3")
let gumb1=document.querySelector("#gumb1")
let gumb2=document.querySelector("#gumb2")
let gumb3=document.querySelector("#gumb3")
let paragraf=document.querySelector("#paragraf")

gumb1.onclick = function() {myFunction1()};
gumb2.onclick = function() {myFunction2()};
gumb3.onclick = function() {myFunction3()};

function myFunction1(){
    if(input1.value>0){
        input1.value=1
    }
    else{
        input1.value=0
    }
    if(input2.value>0){
        input2.value=1
    }
    else{
        input2.value=0
    }
    if(input3.value>0){
        input3.value=1
    }
    else{
        input3.value=0
    }


    if(input1.value === "1"){
        paragraf.innerHTML="1"
    }
    
    if(input2.value === "1"){
        paragraf.innerHTML="1"
    }
    if(input3.value === "1"){
        paragraf.innerHTML="1"
    }
    if(input1.value==="0" && input2.value==="0" && input3.value==="0"){
        paragraf.innerHTML="0"
    }
}
function myFunction2(){
    if(input1.value>0){
        input1.value=1
    }
    else{
        input1.value=0
    }
    if(input2.value>0){
        input2.value=1
    }
    else{
        input2.value=0
    }
    if(input3.value>0){
        input3.value=1
    }
    else{
        input3.value=0
    }


    if(input1.value === "1" && input2.value==="1"&& input3.value==="1"){
        paragraf.innerHTML="1"
    }

    else{
        paragraf.innerHTML="0"
    }
    
}
function myFunction3(){
    if(input1.value>0){
        input1.value=1
    }
    else{
        input1.value=0
    }
    if(input2.value>0){
        input2.value=1
    }
    else{
        input2.value=0
    }
    if(input3.value>0){
        input3.value=1
    }
    else{
        input3.value=0
    }

    if(input1.value==="1"){
        paragraf.innerHTML="0"
    }
    else{
        paragraf.innerHTML="1"
    }
}