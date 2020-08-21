var CC, YY, MM, DD, dayOfWeek, valueOfDay;
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kwasi", "Kwasi"];
var femaleName = ["Akosua", "Adwea", "Abenna", "Akua", "Yaa", "Afua", "Ama"];

function validateform(){
    var yearofbirth = document.myform.yearofbirth.value;
    var monthofbirth = document.myform.monthofbirth.value;
    var dateofbirth = document.myform.dateofbirth.value;
    var chooseGender= document.getElementsByName("gender");
    var current_year=new Date().getFullYear();

    if((yearofbirth == "") || (yearofbirth.length !=4) || 
    (yearofbirth < 1900) || ( yearofbirth > current_year)) {
        alert("please provide a valid year of birth between 1900-2020");
        document.myform.yearofbirth.focus() ;
        return false;

    }else if(monthofbirth == "" || monthofbirth.length !=2 || monthofbirth > 12) {
            alert("please provide a valid month of birth between 1-12");
            document.myform.monthofbirth.focus() ;
            return false;

    }else if(dateofbirth == "" || dateofbirth.length !=2 || dateofbirth > 31) {
            alert("please provide a valid date of birth between 1-31");
            document.myform.dateofbirth.focus() ;
            return false;

    }else if(chooseGender == ""){
            alert("you must choose gender");
            return false;
    }else{
        return true;
    }
}

function dayValueCalculation(){
    var yearofbirth = document.getElementById("yearofbirth").value;
    
    CC = parseInt(yearofbirth.slice(0,2));
    YY = parseInt(yearofbirth.slice(2,4));
    MM = parseInt(document.getElementById("monthofbirth").value);
    DD = parseInt(document.getElementById("dateofbirth").value);
    dayOfWeek = Math.floor((((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM +1 )/10) ) + DD)%7);
    return dayOfWeek;
    
}

function getGender(){
    var chooseGender = document.getElementsByName("gender");
    if(chooseGender==0){
        gender = "male";
    }else if(chooseGender==1){
        gender = "female";
    }else{
        return false;
    }
}

function akanFinder(){
    var dayValue = dayValueCalculation ();
    var genderSelect = getGender();

    if(genderSelect === "male"){
        document.getElementById("answer").innerHTML=("You are a Male born on " +days[dayValue] +" and your Akan name is. " +maleName[dayValue]);
      }else  if(genderSelect === "female"){
        document.getElementById("answer").innerHTML=("You are a Male born on " +days[dayValue] +" and your Akan name is. " +femaleName[dayValue]);
      }else{
            document.getElementById("answer").innerHTML=("Check your details");
     }
         
}