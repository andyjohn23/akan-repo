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

    }else if(chooseGender[0].checked==false && chooseGender[1].checked==false){
            alert("you must choose gender");
    }else{
        return true;
    }
}

function dayValueCalculation(){
    yearofbirth = document.getElementById("yearofbirth").value;

    CC = parseInt(yearofbirth.substring(0,2));
    YY = parseInt(yearofbirth.substring(2,4));
    MM = parseInt(document.getElementById("monthofbirth").value);
    DD = parseInt(document.getElementById("dateofbirth").value);
    dayOfWeek = (((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM +1 )/10) ) + DD)%7;
    console.log(dayOfWeek);
    return (Math.floor(dayOfWeek));
}

function genderGet(){
    var chooseGender = document.getElementsByName("gender");
    if(chooseGender[0].checked == true){
        var gender = "male";
    }else if(chooseGender[1].checked == true){
        var gender = "female";
    }else{
        return false;
    }
    switch(gender){
        case "male":
        
        if(valueOfDay == 1){
            alert("You were born on " +days[0]+ " and your akan name is " +maleName[0]);
        }else if(valueOfDay == 2){
            alert("You were born on " +days[1]+ " and your akan name is " +maleName[1]);
        }else if(valueOfDay == 3){
            alert("You were born on " +days[2]+ " and your akan name is " +maleName[2]);
        }else if(valueOfDay == 4){
            alert("You were born on " +days[3]+ " and your akan name is " +maleName[3]);
        }else if(valueOfDay == 5){
            alert("You were born on " +days[4]+ " and your akan name is " +maleName[4]);
        }else if(valueOfDay == 6){
            alert("You were born on " +days[5]+ " and your akan name is " +maleName[5]);
        }else if(valueOfDay == -0){
            alert("You were born on " +days[6]+ " and your akan name is " +maleName[6]);
        }
        break
        case "female":
            if(valueOfDay == 1){
                alert("You were born on " +days[0]+ " and your akan name is " +femaleName[0]);
            }else if(valueOfDay == 2){
                alert("You were born on " +days[1]+ " and your akan name is " +femaleName[1]);
            }else if(valueOfDay == 3){
                alert("You were born on " +days[2]+ " and your akan name is " +femaleName[2]);
            }else if(valueOfDay == 4){
                alert("You were born on " +days[3]+ " and your akan name is " +femaleName[3]);
            }else if(valueOfDay == 5){
                alert("You were born on " +days[4]+ " and your akan name is " +femaleName[4]);
            }else if(valueOfDay == 6){
                alert("You were born on " +days[5]+ " and your akan name is " +femaleName[5]);
            }else if(valueOfDay == -0){
                alert("You were born on " + days[6]+ " and your akan name is " +femaleName[6]);
            }
        break
         default:
    }
}

function findName(){
    valueOfDay = dayValueCalculation();
    genderGet();
}