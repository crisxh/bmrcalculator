age=document.getElementById("age").value
height=document.getElementById("height").value
weight=document.getElementById("weight").value
gender=document.getElementById("gender")

    

    
    

function bmr(age,height,weight,gender){
    let bmrValue;
    /*age=document.getElementById("age").value
    height=document.getElementById("height").value
    weight=document.getElementById("weight").value
    gender=document.getElementById("gender")*/
    
    if (gender ==  "f"){
       bmrValue = 9.247*weight + 3.098*height -4.330*age + 447.593;
    } else if(gender == "m"){
        bmrValue =13.397*weight + 4.799*height -5.677*age +88.362;
        
       }
    
       /*console.log(bmrValue);*/
       /*document.getElementById('output').innerHTML=bmrValue;*/
       return bmrValue;
}


    
function bmrSubmit(){
let submit=bmr(age,height,weight,gender);
document.getElementById('output').innerHTML=submit;
return submit
}

      

/*console.log(bmr(25,160,80,"f"))
console.log(bmr(25,160,80,"m"))*/

