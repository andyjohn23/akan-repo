function validation(){
    var yearofbirth = document.myform.yearofbirth.value;
    var monthofbirth = document.myform.monthofbirth.value;
    var dateofbirth = document.myform.dateofbirth.value;
    var chooseGender= document.myform.gender.value;;
    var current_year=new Date().getFullYear();
    
    if((yearofbirth == "") || (yearofbirth.length !=4) || 
    (yearofbirth < 1900) || ( yearofbirth > current_year)) {
        alert("please provide a valid year of birth between 1900-2020");
        document.myform.yearofbirth.focus() ;
        return false;

    }else if(monthofbirth == "" || monthofbirth.length !=2 || monthofbirth > 12) {
            alert("please provide a valid month of birth between 01-12");
            document.myform.monthofbirth.focus() ;
            return false;

    }else if(dateofbirth == "" || dateofbirth.length !=2 || dateofbirth > 31) {
            alert("please provide a valid date of birth between 01-31");
            document.myform.dateofbirth.focus() ;
            return false;

    }else if(chooseGender == ""){
            alert("you must choose gender");
            return false;
    }else{
        return true;
    }
}

function day(century, year, month, date){
    return ((((century/4)-2*century-1)+((5*year/4)) + ((26*(month+1)/10)) + date)%7);
}

function akanFinder(){
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
    var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleName = ["Akosua", "Adwea", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    var yearValue = document.getElementById("yearofbirth").value;

    var century = (yearValue.slice(0,2));
    var year = (yearValue.slice(2,4));
    var month = document.getElementById("monthofbirth").value;
    var date = document.getElementById("dateofbirth").value;
    var gender = document.getElementById("gender").value;

    var result=day(century,year,month,date).toFixed(); 

    if (gender == "1" && result == 0) {
        alert("you were born on " +days[0]+ " and your akan name is " +maleName[0]);
      } else if (gender == "2" && result == 0) {
        alert("you were born on " +days[0]+ " and your akan name is " +femaleName[0]);
      }else if (gender == "1" && result == 1) {
        alert("you were born on " +days[1]+ " and your akan name is " +maleName[1]);
      } else if (gender == "2" && result == 1) {
        alert("you were born on " +days[1]+ " and your akan name is " +femaleName[1]);
      }else if (gender == "1" && result == 2) {
        alert("you were born on " +days[2]+ " and your akan name is " +maleName[2]);
      } else if (gender == "2" && result == 2) {
        alert("you were born on " +days[2]+ " and your akan name is " +femaleName[2]);
      }else if (gender == "1" && result == 3) {
        alert("you were born on " +days[3]+ " and your akan name is " +maleName[3]);
      } else if (gender == "2" && result == 3) {
        alert("you were born on " +days[3]+ " and your akan name is " +femaleName[3]);
      }else if (gender == "1" && result == 4) {
        alert("you were born on " +days[4]+ " and your akan name is " +maleName[4]);
      } else if (gender == "2" && result == 4) {
        alert("you were born on " +days[4]+ " and your akan name is " +femaleName[4]);
      }else if (gender == "1" && result == 5) {
        alert("you were born on " +days[5]+ " and your akan name is " +maleName[5]);
      } else if (gender == "2" && result == 5) {
        alert("you were born on " +days[5]+ " and your akan name is " +femaleName[5]);
      }else if (gender == "1" && result == 6) {
        alert("you were born on " +days[6]+ " and your akan name is " +maleName[6]);
      } else if (gender == "2" && result == 6) {
        alert("you were born on " +days[6]+ " and your akan name is " +femaleName[6]);
      }else {
        alert("null");
      }
    
}