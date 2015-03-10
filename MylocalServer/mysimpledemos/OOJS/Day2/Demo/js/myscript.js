    
   function fnValidEmail() {
         
        var valEmail = document.getElementById('email').value;
        valEmail = valEmail.replace(/\s{2,}/g, ' ');
        if (valEmail == null || valEmail == " ") {
            console.log("empty email");
            document.getElementById('errorEmail').style.display = 'block';
        }
        else {
            console.log(valEmail);
            document.getElementById('errorEmail').style.display = 'none';
        }
        console.log(valEmail);
    }
    function fnValidName() {
        var valName = document.getElementById('name').value;
        valName = valName.replace(/\s{2,}/g, ' ');
        if (valName == null || valName == " ") {
             console.log("empty Name");
            document.getElementById('errorName').style.display='block';
        }
        else {
            console.log(valName);
            document.getElementById('errorName').style.display = 'none';
        }
        console.log(valName);

    }
    function fnValidRadio() {
        var valRadioArray = document.getElementsByName('gend');
        var flag;
        for (var i = 0; i < valRadioArray.length; i++) {
            if (valRadioArray[i].checked) {
                flag = true;
                break;
            }
        }
        if (flag == true) {
            console.log("radio is not selected");
            document.getElementById('errorGend').style.display = 'none';
        }
        else {
            document.getElementById('errorGend').style.display = 'block';
        }
    }
    function fnValidSubmit(){
        fnValidEmail();
        fnValidName();
        fnValidRadio();
        return false;
    }