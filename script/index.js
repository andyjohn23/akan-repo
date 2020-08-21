function validateform(){
    var yearofbirth = document.myform.yearofbirth.value;
    var monthofbirth = document.myform.monthofbirth.value;
    var dateofbirth = document.myform.dateofbirth.value;
    var gender= document.getElementsByName("gender");
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

    }else if(gender[0].checked==false && gender[1].checked==false){
            alert("you must choose gender");
    }else{
        return true;
    }
}